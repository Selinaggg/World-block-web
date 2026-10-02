#include <Arduino.h>
#include <EEPROM.h>
#include <math.h>
#include "generated_codebook.h"
#include "generated_channel_map.h"

// WorldBlocks one-to-eight-module sensing firmware for Arduino Mega 2560.
// All CD74HC4067 muxes share D2-D5. Module identity is its stable SIG pin:
// module 0 is A0, module 1 is A1, through module 7 on A7.

const uint32_t SERIAL_BAUD = 115200;
const char *FIRMWARE_VERSION = "worldblocks-mega-sensing/0.3.4";
const uint8_t PROTOCOL_VERSION = 2;
// Temporary bench-debug lock. While true, every CONFIG request is normalized
// to one 4x2 module on DEBUG_MODULE_PIN. Set false to restore normal
// 1/2/4/6/8 operation.
const bool SINGLE_MODULE_DEBUG = false;
const uint8_t DEBUG_MODULE_PIN = A0;
const uint8_t DEBUG_MODULE_PORT_INDEX = 0;
const uint8_t MAX_MODULE_COUNT = 8;
const uint8_t COLUMNS_PER_MODULE = 16;
const uint8_t COLUMNS_PER_MODULE_LAYER = 8;
const uint8_t ROWS_PER_MODULE_LAYER = 2;
const uint8_t MAX_COLUMN_COUNT = MAX_MODULE_COUNT * COLUMNS_PER_MODULE;
const uint8_t LAYER_COLS = 4;
const uint8_t VALIDATED_MAX_STACK = 7;
const uint8_t TRACKING_CAPACITY = 16;
const uint8_t STACK_CODE_BITS = 3;
const uint8_t PACKED_STACK_BYTES =
  (TRACKING_CAPACITY * STACK_CODE_BITS + 7) / 8;

const uint8_t MUX_SIG_PINS[MAX_MODULE_COUNT] = {A0, A1, A2, A3, A4, A5, A6, A7};
const uint8_t MUX_SELECT_PINS[4] = {2, 3, 4, 5};
const uint8_t BUZZER_PIN = 13;
const uint16_t BUZZER_PULSE_MS = 50;
// The buzzer is active-low. A value of 192 keeps it active for roughly 25%
// of each PWM cycle, reducing its average power and perceived volume.
const uint8_t BUZZER_ACTIVE_PWM = 192;

const float REFERENCE_OHMS = 1370.0f;
const uint8_t ADC_SAMPLE_COUNT = 9;
const uint16_t MUX_SETTLE_US = 75;
const uint16_t STABILITY_MS = 80;
const float CHANGE_THRESHOLD_US = 8.0f;
const float MAX_CLASS_ERROR_US = 10.0f;

float committedGUs[MAX_COLUMN_COUNT];
float emptyBaselineGUs[MAX_COLUMN_COUNT];
uint8_t stackSize[MAX_COLUMN_COUNT];
// Codes 0-6 (empty or electrical code index + 1) fit in three bits. Packing
// preserves 16 tracked layers across 128 columns without exhausting Mega SRAM.
uint8_t packedStackCodes[MAX_COLUMN_COUNT][PACKED_STACK_BYTES];
bool correctionRequired[MAX_COLUMN_COUNT];
uint16_t activeFaultSeq[MAX_COLUMN_COUNT];
uint16_t faultRecoverySinceMs[MAX_COLUMN_COUNT];
uint16_t lastFaultSampleMs[MAX_COLUMN_COUNT];
int8_t pendingDirection[MAX_COLUMN_COUNT];
int8_t pendingCodeIndex[MAX_COLUMN_COUNT];
uint8_t pendingPopCount[MAX_COLUMN_COUNT];
uint16_t pendingSinceMs[MAX_COLUMN_COUNT];
uint32_t pendingSignalUs[MAX_COLUMN_COUNT];

uint8_t moduleCount = 1;
uint8_t layerRows = ROWS_PER_MODULE_LAYER;
uint32_t detectionSeq = 0;
uint32_t operationSeq = 0;
uint16_t faultSeq = 0;
uint32_t correctionSeq = 0;
uint32_t resetSeq = 0;
uint32_t buzzerReleaseMs = 0;
bool buzzerActive = false;
String bootId;
String topologyId;
String activeRecoveryId;
bool recoveryMode = true;
uint32_t deviceId = 0;
uint32_t bootGeneration = 0;

const uint32_t BOOT_IDENTITY_MAGIC = 0x57424944UL;  // "WBID"
const uint32_t BOOT_IDENTITY_SALT = 0x6D2B79F5UL;
const int BOOT_IDENTITY_EEPROM_ADDRESS = 0;

struct BootIdentityRecord {
  uint32_t magic;
  uint32_t deviceId;
  uint32_t generation;
  uint32_t checksum;
};

uint32_t bootIdentityChecksum(const BootIdentityRecord &record) {
  return (
    record.magic
    ^ record.deviceId
    ^ record.generation
    ^ BOOT_IDENTITY_SALT
  );
}

uint32_t collectBootEntropy() {
  uint32_t entropy = micros() ^ 0xA5C31F27UL;
  for (uint8_t sample = 0; sample < 24; sample++) {
    entropy ^= ((uint32_t)analogRead(A15) << (sample % 17));
    entropy ^= micros() + ((uint32_t)sample * 0x9E3779B9UL);
    entropy ^= entropy << 13;
    entropy ^= entropy >> 17;
    entropy ^= entropy << 5;
    delayMicroseconds(37);
  }
  return entropy ? entropy : 1;
}

void initializeBootIdentity() {
  BootIdentityRecord record;
  EEPROM.get(BOOT_IDENTITY_EEPROM_ADDRESS, record);
  bool valid = (
    record.magic == BOOT_IDENTITY_MAGIC
    && record.deviceId != 0
    && record.checksum == bootIdentityChecksum(record)
  );
  if (!valid) {
    record.magic = BOOT_IDENTITY_MAGIC;
    record.deviceId = collectBootEntropy();
    record.generation = 0;
  }
  if (record.generation == 0xFFFFFFFFUL) {
    record.deviceId ^= collectBootEntropy();
    if (!record.deviceId) record.deviceId = 1;
    record.generation = 0;
  }
  record.generation++;
  record.checksum = bootIdentityChecksum(record);
  EEPROM.put(BOOT_IDENTITY_EEPROM_ADDRESS, record);

  deviceId = record.deviceId;
  bootGeneration = record.generation;
  bootId = "mega-sense-" + String(deviceId, HEX)
    + "-" + String(bootGeneration, HEX);
}

void triggerBuzzer() {
  analogWrite(BUZZER_PIN, BUZZER_ACTIVE_PWM);
  buzzerActive = true;
  buzzerReleaseMs = millis() + BUZZER_PULSE_MS;
}

void updateBuzzer() {
  if (
    buzzerActive
    && (int32_t)(millis() - buzzerReleaseMs) >= 0
  ) {
    digitalWrite(BUZZER_PIN, HIGH);
    buzzerActive = false;
  }
}

void emitJson(const String &payload) {
  Serial.print(F("WB_JSON:"));
  Serial.println(payload);
}

String tokenAt(const String &line, int wantedIndex) {
  int tokenIndex = 0;
  int start = 0;
  while (start < line.length()) {
    while (start < line.length() && line.charAt(start) == ' ') start++;
    if (start >= line.length()) break;
    int end = line.indexOf(' ', start);
    if (end < 0) end = line.length();
    if (tokenIndex == wantedIndex) return line.substring(start, end);
    tokenIndex++;
    start = end + 1;
  }
  return "";
}

uint8_t activeColumnCount() {
  return moduleCount * COLUMNS_PER_MODULE;
}

uint8_t columnsPerLayer() {
  return layerRows * LAYER_COLS;
}

uint8_t columnLayer(uint8_t column) {
  return column / columnsPerLayer();
}

const char *layerName(uint8_t column) {
  return columnLayer(column) == 0 ? "L0" : "L0.5";
}

uint8_t localColumn(uint8_t column) {
  return column % columnsPerLayer();
}

uint8_t columnRow(uint8_t column) {
  return localColumn(column) / LAYER_COLS;
}

uint8_t columnCol(uint8_t column) {
  return localColumn(column) % LAYER_COLS;
}

uint8_t columnModule(uint8_t column) {
  return columnRow(column) / ROWS_PER_MODULE_LAYER;
}

uint8_t localModuleColumn(uint8_t column) {
  return columnLayer(column) * COLUMNS_PER_MODULE_LAYER
    + (columnRow(column) % ROWS_PER_MODULE_LAYER) * LAYER_COLS
    + columnCol(column);
}

uint8_t physicalChannel(uint8_t column) {
  return PHYSICAL_CHANNEL_BY_COLUMN[localModuleColumn(column)];
}

uint8_t signalPinForModule(uint8_t module) {
  if (SINGLE_MODULE_DEBUG) return DEBUG_MODULE_PIN;
  return MUX_SIG_PINS[module];
}

String modulePort(uint8_t module) {
  if (SINGLE_MODULE_DEBUG) return "A" + String(DEBUG_MODULE_PORT_INDEX);
  return "A" + String(module);
}

uint8_t stackCode(uint8_t column, uint8_t layer) {
  uint16_t bitIndex = layer * STACK_CODE_BITS;
  uint8_t byteIndex = bitIndex / 8;
  uint8_t shift = bitIndex % 8;
  uint16_t window = packedStackCodes[column][byteIndex];
  if (byteIndex + 1 < PACKED_STACK_BYTES) {
    window |= ((uint16_t) packedStackCodes[column][byteIndex + 1]) << 8;
  }
  return (window >> shift) & 0x07;
}

void setStackCode(uint8_t column, uint8_t layer, uint8_t storedCode) {
  uint16_t bitIndex = layer * STACK_CODE_BITS;
  uint8_t byteIndex = bitIndex / 8;
  uint8_t shift = bitIndex % 8;
  uint16_t window = packedStackCodes[column][byteIndex];
  if (byteIndex + 1 < PACKED_STACK_BYTES) {
    window |= ((uint16_t) packedStackCodes[column][byteIndex + 1]) << 8;
  }
  window = (window & ~((uint16_t) 0x07 << shift))
    | (((uint16_t) storedCode & 0x07) << shift);
  packedStackCodes[column][byteIndex] = window & 0xff;
  if (byteIndex + 1 < PACKED_STACK_BYTES) {
    packedStackCodes[column][byteIndex + 1] = window >> 8;
  }
}

void clearStackCodes(uint8_t column) {
  memset(packedStackCodes[column], 0, PACKED_STACK_BYTES);
}

String columnId(uint8_t column) {
  String id = layerName(column);
  id += F("-r");
  id += columnRow(column);
  id += F("-c");
  id += columnCol(column);
  return id;
}

void setMuxChannel(uint8_t channel) {
  for (uint8_t bit = 0; bit < 4; bit++) {
    digitalWrite(MUX_SELECT_PINS[bit], bitRead(channel, bit));
  }
}

uint16_t medianAdc(uint8_t column) {
  uint16_t values[ADC_SAMPLE_COUNT];
  uint8_t signalPin = signalPinForModule(columnModule(column));
  setMuxChannel(physicalChannel(column));
  delayMicroseconds(MUX_SETTLE_US);
  analogRead(signalPin);  // discard after switching mux channel or ADC input
  for (uint8_t i = 0; i < ADC_SAMPLE_COUNT; i++) {
    values[i] = analogRead(signalPin);
  }
  for (uint8_t i = 1; i < ADC_SAMPLE_COUNT; i++) {
    uint16_t value = values[i];
    int8_t j = i - 1;
    while (j >= 0 && values[j] > value) {
      values[j + 1] = values[j];
      j--;
    }
    values[j + 1] = value;
  }
  return values[ADC_SAMPLE_COUNT / 2];
}

float adcToConductanceUs(uint16_t adc) {
  if (adc >= 1022) return 0.0f;
  if (adc == 0) return 1000000.0f;
  // Divider: 5V -> 1.37k reference -> ADC node -> passive stack -> GND.
  return 1000000.0f * (1023.0f - adc) / (REFERENCE_OHMS * adc);
}

int8_t classifyDelta(float absoluteDeltaGUs, float &errorUs) {
  int8_t bestIndex = -1;
  errorUs = 1000000.0f;
  for (uint8_t index = 0; index < ELECTRICAL_CODE_COUNT; index++) {
    float error = fabs(absoluteDeltaGUs - ELECTRICAL_CODES[index].targetGUs);
    if (error < errorUs) {
      errorUs = error;
      bestIndex = index;
    }
  }
  return errorUs <= MAX_CLASS_ERROR_US ? bestIndex : -1;
}

int8_t electricalCodeIndex(String id) {
  id.toUpperCase();
  for (uint8_t index = 0; index < ELECTRICAL_CODE_COUNT; index++) {
    if (id == ELECTRICAL_CODES[index].id) return index;
  }
  return -1;
}

bool matchRemovalSuffix(
  uint8_t column,
  float absoluteDeltaGUs,
  uint8_t &popCount,
  float &errorUs
) {
  float cumulativeGUs = 0.0f;
  errorUs = 1000000.0f;
  popCount = 0;
  for (uint8_t offset = 0; offset < stackSize[column]; offset++) {
    uint8_t codeIndex = stackCode(column, stackSize[column] - 1 - offset) - 1;
    cumulativeGUs += ELECTRICAL_CODES[codeIndex].targetGUs;
    float candidateError = fabs(absoluteDeltaGUs - cumulativeGUs);
    if (candidateError < errorUs) {
      errorUs = candidateError;
      popCount = offset + 1;
    }
  }
  return popCount > 0 && errorUs <= MAX_CLASS_ERROR_US;
}

void resetPending(uint8_t column) {
  pendingDirection[column] = 0;
  pendingCodeIndex[column] = -1;
  pendingPopCount[column] = 0;
  pendingSinceMs[column] = 0;
  pendingSignalUs[column] = 0;
}

void emitFault(const String &code, const String &message, int column = -1) {
  String payload = F("{\"protocol\":2,\"kind\":\"fault\",\"boot_id\":\"");
  payload += bootId;
  payload += F("\",\"status\":\"reported\",\"severity\":\"error\",\"device_us\":");
  payload += micros();
  payload += F(",\"code\":\"");
  payload += code;
  payload += F("\",\"message\":\"");
  payload += message;
  payload += '"';
  if (column >= 0) {
    payload += F(",\"column_id\":\"");
    payload += columnId(column);
    payload += '"';
  }
  payload += '}';
  emitJson(payload);
}

void emitColumnFault(
  uint8_t column,
  const String &status,
  const String &code,
  const String &message,
  uint16_t rawAdc,
  float observedGUs,
  float deltaGUs
) {
  String payload = F("{\"protocol\":2,\"kind\":\"fault\",\"boot_id\":\"");
  payload += bootId;
  payload += F("\",\"fault_id\":\"");
  payload += bootId;
  payload += F(":fault:");
  payload += activeFaultSeq[column];
  payload += F("\",\"status\":\"");
  payload += status;
  payload += F("\",\"severity\":\"error\",\"device_us\":");
  payload += micros();
  payload += F(",\"code\":\"");
  payload += code;
  payload += F("\",\"message\":\"");
  payload += message;
  payload += F("\",\"column_id\":\"");
  payload += columnId(column);
  payload += F("\",\"raw_adc\":");
  payload += rawAdc;
  payload += F(",\"observed_g_us\":");
  payload += String(observedGUs, 3);
  payload += F(",\"trusted_g_us\":");
  payload += String(committedGUs[column], 3);
  payload += F(",\"delta_g_us\":");
  payload += String(deltaGUs, 3);
  payload += '}';
  emitJson(payload);
}

void requireCorrection(
  uint8_t column,
  const String &code,
  const String &message,
  uint16_t rawAdc,
  float observedGUs,
  float deltaGUs
) {
  if (correctionRequired[column]) return;
  correctionRequired[column] = true;
  activeFaultSeq[column] = ++faultSeq;
  faultRecoverySinceMs[column] = 0;
  lastFaultSampleMs[column] = millis();
  emitColumnFault(column, "active", code, message, rawAdc, observedGUs, deltaGUs);
}

void resolveColumnFault(
  uint8_t column,
  const String &code,
  const String &message,
  uint16_t rawAdc,
  float observedGUs
) {
  if (!correctionRequired[column]) return;
  emitColumnFault(
    column, "resolved", code, message, rawAdc, observedGUs,
    observedGUs - committedGUs[column]
  );
  correctionRequired[column] = false;
  activeFaultSeq[column] = 0;
  faultRecoverySinceMs[column] = 0;
  lastFaultSampleMs[column] = 0;
  resetPending(column);
}

void emitFaultSample(uint8_t column, uint16_t adc, float conductance) {
  String payload = F("{\"protocol\":2,\"kind\":\"sample\",\"boot_id\":\"");
  payload += bootId;
  payload += F("\",\"column_id\":\"");
  payload += columnId(column);
  payload += F("\",\"raw_adc\":");
  payload += adc;
  payload += F(",\"filtered_g_us\":");
  payload += String(conductance, 3);
  payload += F(",\"committed_g_us\":");
  payload += String(committedGUs[column], 3);
  payload += F(",\"fault_active\":true}");
  emitJson(payload);
}

void emitHello() {
  String payload = F("{\"protocol\":2,\"kind\":\"hello\",\"firmware\":\"");
  payload += FIRMWARE_VERSION;
  payload += F("\",\"board\":\"arduino-mega-2560\",\"boot_id\":\"");
  payload += bootId;
  payload += F("\",\"electrical_codebook_id\":\"");
  payload += ELECTRICAL_CODEBOOK_ID;
  payload += F("\",\"channel_mapping_id\":\"");
  payload += CHANNEL_MAPPING_ID;
  payload += F("\",\"device_id\":\"");
  payload += String(deviceId, HEX);
  payload += F("\",\"boot_generation\":");
  payload += bootGeneration;
  payload += F(",\"simulation\":false,\"transport\":\"usb-serial\",");
  payload += F("\"recovery_mode\":");
  payload += recoveryMode ? F("true,") : F("false,");
  payload += F("\"sensing\":\"cd74hc4067-divider\"}");
  emitJson(payload);
}

void emitTopology() {
  String payload = F("{\"protocol\":2,\"kind\":\"topology\",\"topology_id\":\"");
  payload += topologyId;
  payload += F("\",\"boot_id\":\"");
  payload += bootId;
  payload += F("\",\"module_count\":");
  payload += moduleCount;
  payload += F(",\"max_stack\":7,\"validated_max_stack\":7,");
  payload += F("\"tracking_capacity\":16,\"adc_bits\":10,");
  payload += F("\"discovery\":\"configured\",\"layers\":[");
  payload += F("{\"id\":\"L0\",\"rows\":");
  payload += layerRows;
  payload += F(",\"cols\":4},");
  payload += F("{\"id\":\"L0.5\",\"rows\":");
  payload += layerRows;
  payload += F(",\"cols\":4}]}");
  emitJson(payload);

  for (uint8_t column = 0; column < activeColumnCount(); column++) {
    String channelPayload = F("{\"protocol\":2,\"kind\":\"channel\",\"topology_id\":\"");
    channelPayload += topologyId;
    channelPayload += F("\",\"column_id\":\"");
    channelPayload += columnId(column);
    channelPayload += F("\",\"layer\":\"");
    channelPayload += layerName(column);
    channelPayload += F("\",\"row\":");
    channelPayload += columnRow(column);
    channelPayload += F(",\"col\":");
    channelPayload += columnCol(column);
    channelPayload += F(",\"module\":");
    channelPayload += columnModule(column);
    channelPayload += F(",\"port\":\"");
    channelPayload += modulePort(columnModule(column));
    channelPayload += '"';
    channelPayload += F(",\"mux\":");
    channelPayload += columnModule(column);
    channelPayload += F(",\"channel\":");
    channelPayload += physicalChannel(column);
    channelPayload += F(",\"enabled\":true}");
    emitJson(channelPayload);
  }

  String endPayload = F("{\"protocol\":2,\"kind\":\"topology_end\",\"topology_id\":\"");
  endPayload += topologyId;
  endPayload += F("\",\"column_count\":");
  endPayload += activeColumnCount();
  endPayload += '}';
  emitJson(endPayload);
}

void emitDetection(
  const char *eventName,
  uint8_t column,
  uint8_t stackLayer,
  uint8_t codeIndex,
  uint16_t rawAdc,
  float filteredGUs,
  float deltaGUs,
  float classErrorUs,
  uint32_t signalUs,
  uint32_t operation,
  uint8_t operationIndex,
  uint8_t operationSize
) {
  detectionSeq++;
  uint32_t commitUs = micros();
  String payload = F("{\"protocol\":2,\"kind\":\"detection\",\"boot_id\":\"");
  payload += bootId;
  payload += F("\",\"detection_id\":\"");
  payload += bootId;
  payload += ':';
  payload += detectionSeq;
  payload += F("\",\"seq\":");
  payload += detectionSeq;
  payload += F(",\"operation_id\":\"");
  payload += bootId;
  payload += F(":op:");
  payload += operation;
  payload += F("\",\"operation_index\":");
  payload += operationIndex;
  payload += F(",\"operation_size\":");
  payload += operationSize;
  payload += F(",\"device_us\":");
  payload += commitUs;
  payload += F(",\"signal_us\":");
  payload += signalUs;
  payload += F(",\"commit_us\":");
  payload += commitUs;
  payload += F(",\"event\":\"");
  payload += eventName;
  payload += F("\",\"column_id\":\"");
  payload += columnId(column);
  payload += F("\",\"layer\":\"");
  payload += layerName(column);
  payload += F("\",\"row\":");
  payload += columnRow(column);
  payload += F(",\"col\":");
  payload += columnCol(column);
  payload += F(",\"module\":");
  payload += columnModule(column);
  payload += F(",\"port\":\"");
  payload += modulePort(columnModule(column));
  payload += '"';
  payload += F(",\"mux\":");
  payload += columnModule(column);
  payload += F(",\"channel\":");
  payload += physicalChannel(column);
  payload += F(",\"stack_layer\":");
  payload += stackLayer;
  payload += F(",\"code_id\":\"");
  payload += ELECTRICAL_CODES[codeIndex].id;
  payload += F("\",\"raw_adc\":");
  payload += rawAdc;
  payload += F(",\"filtered_g_us\":");
  payload += String(filteredGUs, 3);
  payload += F(",\"delta_g_us\":");
  payload += String(deltaGUs, 3);
  payload += F(",\"class_error_us\":");
  payload += String(classErrorUs, 3);
  payload += F(",\"confidence\":");
  payload += String(max(0.0f, 1.0f - classErrorUs / MAX_CLASS_ERROR_US), 3);
  payload += F(",\"outside_validated_range\":");
  payload += stackLayer > VALIDATED_MAX_STACK ? F("true") : F("false");
  payload += F(",\"simulation\":false}");
  emitJson(payload);
}

void emitState() {
  String beginPayload = F("{\"protocol\":2,\"kind\":\"state_begin\",\"boot_id\":\"");
  beginPayload += bootId;
  beginPayload += F("\",\"seq\":");
  beginPayload += detectionSeq;
  beginPayload += '}';
  emitJson(beginPayload);

  uint8_t occupied = 0;
  for (uint8_t column = 0; column < activeColumnCount(); column++) {
    if (!stackSize[column]) continue;
    occupied++;
    String payload = F("{\"protocol\":2,\"kind\":\"state_column\",\"boot_id\":\"");
    payload += bootId;
    payload += F("\",\"column_id\":\"");
    payload += columnId(column);
    payload += F("\",\"stack\":[");
    for (uint8_t layer = 0; layer < stackSize[column]; layer++) {
      if (layer) payload += ',';
      payload += '"';
      payload += ELECTRICAL_CODES[stackCode(column, layer) - 1].id;
      payload += '"';
    }
    payload += F("]}");
    emitJson(payload);
  }

  String endPayload = F("{\"protocol\":2,\"kind\":\"state_end\",\"boot_id\":\"");
  endPayload += bootId;
  endPayload += F("\",\"seq\":");
  endPayload += detectionSeq;
  endPayload += F(",\"occupied_columns\":");
  endPayload += occupied;
  endPayload += '}';
  emitJson(endPayload);
}

void emitScan() {
  for (uint8_t column = 0; column < activeColumnCount(); column++) {
    uint16_t adc = medianAdc(column);
    float conductance = adcToConductanceUs(adc);
    String payload = F("{\"protocol\":2,\"kind\":\"sample\",\"boot_id\":\"");
    payload += bootId;
    payload += F("\",\"column_id\":\"");
    payload += columnId(column);
    payload += F("\",\"module\":");
    payload += columnModule(column);
    payload += F(",\"mux\":");
    payload += columnModule(column);
    payload += F(",\"channel\":");
    payload += physicalChannel(column);
    payload += F(",\"raw_adc\":");
    payload += adc;
    payload += F(",\"filtered_g_us\":");
    payload += String(conductance, 3);
    payload += F(",\"committed_g_us\":");
    payload += String(committedGUs[column], 3);
    payload += F("}");
    emitJson(payload);
  }
}

void clearRuntimeState() {
  memset(stackSize, 0, sizeof(stackSize));
  memset(packedStackCodes, 0, sizeof(packedStackCodes));
  memset(correctionRequired, 0, sizeof(correctionRequired));
  memset(activeFaultSeq, 0, sizeof(activeFaultSeq));
  memset(faultRecoverySinceMs, 0, sizeof(faultRecoverySinceMs));
  memset(lastFaultSampleMs, 0, sizeof(lastFaultSampleMs));
  detectionSeq = 0;
  operationSeq = 0;
  faultSeq = 0;
  correctionSeq = 0;
  resetSeq = 0;
}

void initializeFromElectricalEmpty() {
  clearRuntimeState();
  for (uint8_t column = 0; column < activeColumnCount(); column++) {
    committedGUs[column] = 0.0f;
    emptyBaselineGUs[column] = 0.0f;
    resetPending(column);
  }
  Serial.println(F("WB_DIAG:initialized topology from electrical empty reference"));
}

void calibrateEmptyBoard() {
  clearRuntimeState();
  for (uint8_t column = 0; column < activeColumnCount(); column++) {
    uint16_t adc = medianAdc(column);
    committedGUs[column] = adcToConductanceUs(adc);
    emptyBaselineGUs[column] = committedGUs[column];
    resetPending(column);
  }
  Serial.println(F("WB_DIAG:calibrated current board as empty baseline"));
}

void commitCandidate(
  uint8_t column,
  int8_t direction,
  uint8_t codeIndex,
  uint8_t popCount,
  uint16_t adc,
  float conductance,
  float delta,
  float error
) {
  uint32_t operation = ++operationSeq;
  if (direction > 0) {
    if (stackSize[column] >= TRACKING_CAPACITY) {
      requireCorrection(
        column, "tracking_capacity",
        "detected add beyond 16-layer tracking capacity; reduce or correct this column",
        adc, conductance, delta
      );
      return;
    }
    setStackCode(column, stackSize[column], codeIndex + 1);
    stackSize[column]++;
    emitDetection(
      "add", column, stackSize[column], codeIndex, adc, conductance, delta,
      error, pendingSignalUs[column], operation, 1, 1
    );
  } else {
    if (!stackSize[column]) {
      requireCorrection(
        column, "empty_remove", "detected removal from empty trusted state",
        adc, conductance, delta
      );
      return;
    }
    if (!popCount || popCount > stackSize[column]) {
      requireCorrection(
        column, "remove_suffix_mismatch",
        "removed conductance does not match a known top suffix",
        adc, conductance, delta
      );
      return;
    }
    for (uint8_t index = 0; index < popCount; index++) {
      uint8_t removedLayer = stackSize[column];
      uint8_t removedCode = stackCode(column, removedLayer - 1) - 1;
      stackSize[column]--;
      setStackCode(column, stackSize[column], 0);
      emitDetection(
        "remove", column, removedLayer, removedCode, adc, conductance, delta,
        error, pendingSignalUs[column], operation, index + 1, popCount
      );
    }
  }
  committedGUs[column] = conductance;
}

void scanColumn(uint8_t column) {
  uint16_t adc = medianAdc(column);
  float conductance = adcToConductanceUs(adc);
  float delta = conductance - committedGUs[column];
  if (correctionRequired[column]) {
    if ((uint16_t)((uint16_t)millis() - lastFaultSampleMs[column]) >= 1000) {
      emitFaultSample(column, adc, conductance);
      lastFaultSampleMs[column] = (uint16_t)millis();
    }
    if (fabs(delta) < CHANGE_THRESHOLD_US) {
      if (!faultRecoverySinceMs[column]) faultRecoverySinceMs[column] = (uint16_t)millis();
      if ((uint16_t)((uint16_t)millis() - faultRecoverySinceMs[column]) >= STABILITY_MS) {
        triggerBuzzer();
        resolveColumnFault(
          column, "returned_to_trusted_state",
          "column returned to its last trusted conductance", adc, conductance
        );
      }
    } else {
      faultRecoverySinceMs[column] = 0;
    }
    return;
  }
  if (fabs(delta) < CHANGE_THRESHOLD_US) {
    resetPending(column);
    return;
  }

  int8_t direction = delta > 0 ? 1 : -1;
  float classError = 1000000.0f;
  uint8_t popCount = 1;
  int8_t codeIndex = -1;
  if (direction > 0) {
    codeIndex = classifyDelta(fabs(delta), classError);
  } else if (matchRemovalSuffix(column, fabs(delta), popCount, classError)) {
    codeIndex = stackCode(column, stackSize[column] - 1) - 1;
  }
  if (
    pendingDirection[column] != direction
    || pendingCodeIndex[column] != codeIndex
    || pendingPopCount[column] != popCount
  ) {
    pendingDirection[column] = direction;
    pendingCodeIndex[column] = codeIndex;
    pendingPopCount[column] = popCount;
    pendingSinceMs[column] = (uint16_t)millis();
    pendingSignalUs[column] = micros();
    return;
  }
  if ((uint16_t)((uint16_t)millis() - pendingSinceMs[column]) < STABILITY_MS) return;

  // Ring once for every stable physical action, whether it becomes a normal
  // detection or an unclassified/correction-required change. Grouped pops
  // reach this point once and therefore produce one pulse.
  triggerBuzzer();
  if (codeIndex < 0) {
    requireCorrection(
      column,
      direction < 0 ? "remove_suffix_mismatch" : "unclassified_add",
      direction < 0
        ? "removed conductance does not match a known top suffix"
        : "added conductance does not match one electrical code",
      adc, conductance, delta
    );
    resetPending(column);
    return;
  }

  commitCandidate(
    column, direction, codeIndex, popCount, adc, conductance, delta, classError
  );
  resetPending(column);
}

int16_t columnIndexForId(const String &id) {
  for (uint8_t column = 0; column < activeColumnCount(); column++) {
    if (id == columnId(column)) return column;
  }
  return -1;
}

void emitCorrection(
  const String &requestId,
  uint8_t column,
  bool accepted,
  const String &reason,
  const uint8_t *codes,
  uint8_t codeCount,
  uint16_t rawAdc,
  float observedGUs,
  float expectedGUs,
  float residualGUs,
  float toleranceGUs
) {
  correctionSeq++;
  String payload = F("{\"protocol\":2,\"kind\":\"correction\",\"boot_id\":\"");
  payload += bootId;
  payload += F("\",\"correction_id\":\"");
  payload += bootId;
  payload += F(":correction:");
  payload += correctionSeq;
  payload += F("\",\"request_id\":\"");
  payload += requestId;
  payload += F("\",\"fault_id\":\"");
  payload += bootId;
  payload += F(":fault:");
  payload += activeFaultSeq[column];
  payload += F("\",\"status\":\"");
  payload += accepted ? F("accepted") : F("rejected");
  payload += F("\",\"reason\":\"");
  payload += reason;
  payload += F("\",\"column_id\":\"");
  payload += columnId(column);
  payload += F("\",\"stack\":[");
  for (uint8_t index = 0; index < codeCount; index++) {
    if (index) payload += ',';
    payload += '"';
    payload += ELECTRICAL_CODES[codes[index]].id;
    payload += '"';
  }
  payload += F("],\"raw_adc\":");
  payload += rawAdc;
  payload += F(",\"observed_g_us\":");
  payload += String(observedGUs, 3);
  payload += F(",\"expected_g_us\":");
  payload += String(expectedGUs, 3);
  payload += F(",\"residual_g_us\":");
  payload += String(residualGUs, 3);
  payload += F(",\"tolerance_g_us\":");
  payload += String(toleranceGUs, 3);
  payload += F(",\"device_us\":");
  payload += micros();
  payload += '}';
  emitJson(payload);
}

void reconcileColumn(const String &line) {
  String requestId = tokenAt(line, 1);
  String requestedColumnId = tokenAt(line, 2);
  String codeList = tokenAt(line, 3);
  int16_t columnIndex = columnIndexForId(requestedColumnId);
  if (!requestId.length() || columnIndex < 0 || !codeList.length()) {
    emitFault("invalid_reconcile", "RECONCILE requires request ID, column ID, and code list or -");
    return;
  }
  uint8_t column = (uint8_t)columnIndex;
  if (!correctionRequired[column]) {
    emitFault("correction_not_required", "RECONCILE targets a healthy column", column);
    return;
  }

  uint8_t proposedCodes[TRACKING_CAPACITY];
  uint8_t proposedCount = 0;
  bool validCodes = true;
  if (codeList != "-") {
    int start = 0;
    while (start <= codeList.length()) {
      int end = codeList.indexOf(',', start);
      if (end < 0) end = codeList.length();
      if (proposedCount >= TRACKING_CAPACITY) {
        validCodes = false;
        break;
      }
      int8_t codeIndex = electricalCodeIndex(codeList.substring(start, end));
      if (codeIndex < 0) {
        validCodes = false;
        break;
      }
      proposedCodes[proposedCount++] = codeIndex;
      if (end >= codeList.length()) break;
      start = end + 1;
    }
  }

  uint16_t adc = medianAdc(column);
  float observedGUs = adcToConductanceUs(adc);
  float expectedGUs = emptyBaselineGUs[column];
  for (uint8_t index = 0; index < proposedCount; index++) {
    expectedGUs += ELECTRICAL_CODES[proposedCodes[index]].targetGUs;
  }
  float expectedStackGUs = expectedGUs - emptyBaselineGUs[column];
  float toleranceGUs = max(12.0f, 8.0f + expectedStackGUs * 0.015f);
  float residualGUs = fabs(observedGUs - expectedGUs);

  if (!validCodes) {
    emitCorrection(
      requestId, column, false, "invalid_or_oversized_stack", proposedCodes,
      proposedCount, adc, observedGUs, expectedGUs, residualGUs, toleranceGUs
    );
    return;
  }
  if (residualGUs > toleranceGUs) {
    emitCorrection(
      requestId, column, false, "aggregate_mismatch", proposedCodes,
      proposedCount, adc, observedGUs, expectedGUs, residualGUs, toleranceGUs
    );
    return;
  }

  clearStackCodes(column);
  for (uint8_t index = 0; index < proposedCount; index++) {
    setStackCode(column, index, proposedCodes[index] + 1);
  }
  stackSize[column] = proposedCount;
  committedGUs[column] = observedGUs;
  emitCorrection(
    requestId, column, true, "aggregate_validated", proposedCodes,
    proposedCount, adc, observedGUs, expectedGUs, residualGUs, toleranceGUs
  );
  resolveColumnFault(
    column, "operator_correction", "operator correction validated", adc, observedGUs
  );
}

void emitRecovery(
  const String &requestId,
  const String &status,
  const String &reason,
  int column = -1,
  const uint8_t *codes = NULL,
  uint8_t codeCount = 0,
  float observedGUs = 0.0f,
  float expectedGUs = 0.0f,
  float residualGUs = 0.0f,
  float toleranceGUs = 0.0f
) {
  String payload = F("{\"protocol\":2,\"kind\":\"recovery\",\"boot_id\":\"");
  payload += bootId;
  payload += F("\",\"recovery_id\":\"");
  payload += activeRecoveryId;
  payload += F("\",\"request_id\":\"");
  payload += requestId;
  payload += F("\",\"status\":\"");
  payload += status;
  payload += F("\",\"reason\":\"");
  payload += reason;
  payload += '"';
  if (column >= 0) {
    payload += F(",\"column_id\":\"");
    payload += columnId((uint8_t)column);
    payload += F("\",\"stack\":[");
    for (uint8_t index = 0; index < codeCount; index++) {
      if (index) payload += ',';
      payload += '"';
      payload += ELECTRICAL_CODES[codes[index]].id;
      payload += '"';
    }
    payload += F("],\"observed_g_us\":");
    payload += String(observedGUs, 3);
    payload += F(",\"expected_g_us\":");
    payload += String(expectedGUs, 3);
    payload += F(",\"residual_g_us\":");
    payload += String(residualGUs, 3);
    payload += F(",\"tolerance_g_us\":");
    payload += String(toleranceGUs, 3);
  }
  payload += '}';
  emitJson(payload);
}

void beginRecovery(const String &line) {
  String recoveryId = tokenAt(line, 1);
  if (!recoveryId.length()) {
    emitFault("invalid_recovery", "RECOVERY_BEGIN requires a recovery ID");
    return;
  }
  activeRecoveryId = recoveryId;
  recoveryMode = true;
  for (uint8_t column = 0; column < activeColumnCount(); column++) {
    resetPending(column);
  }
  emitRecovery("", "begun", "sensing_paused");
}

void restoreColumn(const String &line) {
  String requestId = tokenAt(line, 1);
  String requestedColumnId = tokenAt(line, 2);
  String codeList = tokenAt(line, 3);
  int16_t columnIndex = columnIndexForId(requestedColumnId);
  if (!recoveryMode || !requestId.length() || columnIndex < 0 || !codeList.length()) {
    emitFault(
      "invalid_restore",
      "RESTORE requires recovery mode, request ID, column ID, and code list or -"
    );
    return;
  }
  uint8_t column = (uint8_t)columnIndex;
  uint8_t proposedCodes[TRACKING_CAPACITY];
  uint8_t proposedCount = 0;
  bool validCodes = true;
  if (codeList != "-") {
    int start = 0;
    while (start <= codeList.length()) {
      int end = codeList.indexOf(',', start);
      if (end < 0) end = codeList.length();
      if (proposedCount >= TRACKING_CAPACITY) {
        validCodes = false;
        break;
      }
      int8_t codeIndex = electricalCodeIndex(codeList.substring(start, end));
      if (codeIndex < 0) {
        validCodes = false;
        break;
      }
      proposedCodes[proposedCount++] = codeIndex;
      if (end >= codeList.length()) break;
      start = end + 1;
    }
  }
  uint16_t adc = medianAdc(column);
  float observedGUs = adcToConductanceUs(adc);
  float expectedGUs = emptyBaselineGUs[column];
  for (uint8_t index = 0; index < proposedCount; index++) {
    expectedGUs += ELECTRICAL_CODES[proposedCodes[index]].targetGUs;
  }
  float expectedStackGUs = expectedGUs - emptyBaselineGUs[column];
  float toleranceGUs = max(12.0f, 8.0f + expectedStackGUs * 0.015f);
  float residualGUs = fabs(observedGUs - expectedGUs);
  if (!validCodes) {
    emitRecovery(
      requestId, "rejected", "invalid_or_oversized_stack", column,
      proposedCodes, proposedCount, observedGUs, expectedGUs, residualGUs,
      toleranceGUs
    );
    return;
  }
  if (residualGUs > toleranceGUs) {
    requireCorrection(
      column, "recovery_mismatch",
      "live aggregate does not match the saved ordered stack",
      adc, observedGUs, observedGUs - committedGUs[column]
    );
    emitRecovery(
      requestId, "rejected", "aggregate_mismatch", column,
      proposedCodes, proposedCount, observedGUs, expectedGUs, residualGUs,
      toleranceGUs
    );
    return;
  }
  if (correctionRequired[column]) {
    resolveColumnFault(
      column, "recovery_restore", "saved ordered stack validated",
      adc, observedGUs
    );
  }
  clearStackCodes(column);
  for (uint8_t index = 0; index < proposedCount; index++) {
    setStackCode(column, index, proposedCodes[index] + 1);
  }
  stackSize[column] = proposedCount;
  committedGUs[column] = observedGUs;
  resetPending(column);
  emitRecovery(
    requestId, "accepted", "aggregate_validated", column,
    proposedCodes, proposedCount, observedGUs, expectedGUs, residualGUs,
    toleranceGUs
  );
}

void endRecovery(const String &line) {
  String recoveryId = tokenAt(line, 1);
  if (!recoveryMode || !recoveryId.length() || recoveryId != activeRecoveryId) {
    emitFault("invalid_recovery_end", "RECOVERY_END does not match active recovery");
    return;
  }
  recoveryMode = false;
  emitRecovery("", "complete", "sensing_resumed");
  emitState();
}

void cancelRecovery(const String &line) {
  String recoveryId = tokenAt(line, 1);
  if (!recoveryMode || !recoveryId.length() || recoveryId != activeRecoveryId) {
    emitFault(
      "invalid_recovery_cancel",
      "RECOVERY_CANCEL does not match active recovery"
    );
    return;
  }
  recoveryMode = false;
  emitRecovery("", "cancelled", "operator_cancelled");
}

void emitBoardReset(
  const String &requestId,
  const String &status,
  const String &reason,
  const int8_t *proposedCodes,
  uint8_t issueCount
) {
  String payload = F("{\"protocol\":2,\"kind\":\"board_reset\",\"boot_id\":\"");
  payload += bootId;
  payload += F("\",\"request_id\":\"");
  payload += requestId;
  payload += F("\",\"reset_id\":\"");
  payload += bootId;
  payload += F(":reset:");
  payload += resetSeq;
  payload += F("\",\"status\":\"");
  payload += status;
  payload += F("\",\"reason\":\"");
  payload += reason;
  payload += F("\",\"issue_count\":");
  payload += issueCount;
  payload += F(",\"issue_columns\":[");
  bool first = true;
  for (uint8_t column = 0; column < activeColumnCount(); column++) {
    if (proposedCodes[column] >= -1) continue;
    if (!first) payload += ',';
    first = false;
    payload += '"';
    payload += columnId(column);
    payload += '"';
  }
  payload += F("],\"device_us\":");
  payload += micros();
  payload += '}';
  emitJson(payload);
}

void resetBoardFromCurrentReadings(const String &line) {
  String requestId = tokenAt(line, 1);
  if (!requestId.length()) {
    emitFault("invalid_reset_board", "RESET_BOARD requires a request ID");
    return;
  }

  int8_t proposedCodes[MAX_COLUMN_COUNT];  // -1 empty, -2 ambiguous
  uint8_t issueCount = 0;
  for (uint8_t column = 0; column < activeColumnCount(); column++) {
    uint16_t observedAdc = medianAdc(column);
    float observedGUs = adcToConductanceUs(observedAdc);
    float stackGUs = observedGUs - emptyBaselineGUs[column];
    if (fabs(stackGUs) < CHANGE_THRESHOLD_US) {
      proposedCodes[column] = -1;
      continue;
    }
    float classErrorUs;
    int8_t codeIndex = stackGUs > 0 ? classifyDelta(stackGUs, classErrorUs) : -1;
    if (codeIndex < 0) {
      proposedCodes[column] = -2;
      issueCount++;
    } else {
      proposedCodes[column] = codeIndex;
    }
  }

  resetSeq++;
  for (uint8_t column = 0; column < activeColumnCount(); column++) {
    uint16_t observedAdc = medianAdc(column);
    float observedGUs = adcToConductanceUs(observedAdc);
    if (correctionRequired[column]) {
      resolveColumnFault(
        column, "board_reset", "board reset replaced the trusted state",
        observedAdc, observedGUs
      );
    }
    clearStackCodes(column);
    if (proposedCodes[column] >= 0) {
      setStackCode(column, 0, proposedCodes[column] + 1);
      stackSize[column] = 1;
      committedGUs[column] = observedGUs;
    } else if (proposedCodes[column] == -1) {
      stackSize[column] = 0;
      committedGUs[column] = observedGUs;
    } else {
      stackSize[column] = 0;
      committedGUs[column] = emptyBaselineGUs[column];
    }
    resetPending(column);
  }
  emitBoardReset(
    requestId,
    F("accepted"),
    issueCount
      ? F("best_effort_rebuild_with_issues")
      : F("static_single_layer_rebuild"),
    proposedCodes,
    issueCount
  );
  for (uint8_t column = 0; column < activeColumnCount(); column++) {
    if (proposedCodes[column] != -2) continue;
    uint16_t observedAdc = medianAdc(column);
    float observedGUs = adcToConductanceUs(observedAdc);
    requireCorrection(
      column,
      F("reset_ambiguous_stack"),
      F("reset could not infer this stack; enter its ordered nodes"),
      observedAdc,
      observedGUs,
      observedGUs - committedGUs[column]
    );
  }
  emitState();
}

bool supportedModuleCount(int modules) {
  return modules == 1 || modules == 2 || modules == 4 || modules == 6 || modules == 8;
}

void configureTopology(int modules, int rows, int cols) {
  if (SINGLE_MODULE_DEBUG) {
    modules = 1;
    rows = ROWS_PER_MODULE_LAYER;
    cols = LAYER_COLS;
  }
  if (
    !supportedModuleCount(modules)
    || rows != modules * ROWS_PER_MODULE_LAYER
    || cols != LAYER_COLS
  ) {
    emitFault(
      "unsupported_topology",
      "sensing firmware supports CONFIG N (N*2) 4 for N=1,2,4,6,8"
    );
    return;
  }

  bool changed = moduleCount != modules || layerRows != rows;
  moduleCount = modules;
  layerRows = rows;
  topologyId = bootId + ":m" + String(moduleCount) + ":" + String(layerRows) + "x4";
  if (changed) {
    recoveryMode = true;
    activeRecoveryId = "";
    initializeFromElectricalEmpty();
    emitHello();
  }
  emitTopology();
  if (changed) emitState();
}

void handleCommand(String line) {
  line.trim();
  String command = tokenAt(line, 0);
  command.toUpperCase();
  if (command == "HELLO") {
    emitHello();
  } else if (command == "TOPOLOGY") {
    emitTopology();
  } else if (command == "STATE") {
    emitState();
  } else if (command == "SCAN") {
    emitScan();
  } else if (command == "CALIBRATE") {
    calibrateEmptyBoard();
  } else if (command == "RECONCILE") {
    reconcileColumn(line);
  } else if (command == "RECOVERY_BEGIN") {
    beginRecovery(line);
  } else if (command == "RESTORE") {
    restoreColumn(line);
  } else if (command == "RECOVERY_END") {
    endRecovery(line);
  } else if (command == "RECOVERY_CANCEL") {
    cancelRecovery(line);
  } else if (command == "RESET_BOARD") {
    resetBoardFromCurrentReadings(line);
  } else if (command == "CONFIG") {
    configureTopology(
      tokenAt(line, 1).toInt(),
      tokenAt(line, 2).toInt(),
      tokenAt(line, 3).toInt()
    );
  } else if (command.length()) {
    emitFault("unknown_command", "supported: HELLO TOPOLOGY STATE SCAN CALIBRATE RECONCILE RECOVERY_BEGIN RESTORE RECOVERY_END RECOVERY_CANCEL RESET_BOARD CONFIG");
  }
}

void setup() {
  digitalWrite(BUZZER_PIN, HIGH);
  pinMode(BUZZER_PIN, OUTPUT);
  Serial.begin(SERIAL_BAUD);
  Serial.setTimeout(25);
  for (uint8_t bit = 0; bit < 4; bit++) pinMode(MUX_SELECT_PINS[bit], OUTPUT);
  for (uint8_t module = 0; module < MAX_MODULE_COUNT; module++) {
    pinMode(MUX_SIG_PINS[module], INPUT);
  }
  initializeBootIdentity();
  topologyId = bootId + ":m1:2x4";
  delay(300);
  initializeFromElectricalEmpty();
  emitHello();
  emitTopology();
}

void loop() {
  updateBuzzer();
  if (Serial.available()) handleCommand(Serial.readStringUntil('\n'));
  if (!recoveryMode) {
    for (uint8_t column = 0; column < activeColumnCount(); column++) scanColumn(column);
  }
}
