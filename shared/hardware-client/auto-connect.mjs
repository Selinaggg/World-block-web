/** Optional launcher bootstrap. Never generates media or resets hardware. */
export function applySavedInput(document, settings) {
  if (!settings?.confirmed) return false;
  const hardware = document.querySelector('[data-input="hardware"]');
  const connect = document.querySelector('#connect-input');
  const apply = document.querySelector('#apply-code-map');
  const selectors = [...document.querySelectorAll('[data-code]')];
  if (!hardware?.onclick || !connect?.onclick || !apply?.onclick || selectors.length !== 6) return false;
  // Wait for an existing job to finish instead of interrupting it.
  if (hardware.disabled || connect.disabled || apply.disabled) return false;
  hardware.click();
  for (const select of selectors) select.value = settings.code_map[select.dataset.code];
  apply.click();
  document.querySelector('#connection-url').value = 'http://127.0.0.1:8787';
  connect.click();
  document.querySelector('#close-settings')?.click();
  return true;
}

if (typeof window !== 'undefined') {
  let stopped = false, userSelected = false, timer;
  // A user's explicit Manual/Mock choice always wins over late bootstrap.
  document.addEventListener('click', event => {
    if (event.isTrusted && event.target.closest('[data-input]')) userSelected = true;
  }, true);
  async function tryConnect() {
    if (stopped || userSelected) return;
    try {
      const response = await fetch('/__hub/settings');
      if (response.ok && applySavedInput(document, (await response.json()).settings)) return;
    } catch { /* Keep the existing manual experience usable without the hub. */ }
    if (!stopped) timer = setTimeout(tryConnect, 2000);
  }
  tryConnect();
  window.addEventListener('pagehide', () => { stopped = true; clearTimeout(timer); }, {once:true});
}
