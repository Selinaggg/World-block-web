import { connectWorldBlocks } from "../client/worldblocks-client.mjs";

// Import this module from your own browser application, not directly in Node.
const connection = connectWorldBlocks({
  baseUrl: "http://127.0.0.1:8790", // Change to 8787 on the hardware computer.
  source: "mock",                 // Change to hardware for a real connection.
  onState(state) {
    // Replace the previous state. Map C0–C5 to your own application meanings.
    console.log(state.status, state.columns.filter(column => column.stack.length));
  },
  onConnection(status) { console.log("Data connection:", status); },
  onError(error) { console.error(error.message); }
});
// In a framework, call connection.close() when the owning component unmounts.
window.addEventListener("pagehide", () => connection.close(), { once: true });
