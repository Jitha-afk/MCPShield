MCP Shield — Landing Page Demo

Overview
- Static landing page that demonstrates a fluid, modern design and an interactive client-side demo that simulates local inference detecting MCP-related threats (e.g., prompt injection).

Files
- `index.html` — Landing page
- `styles.css` — Styles for fluid, modern layout
- `demo.js` — Simple simulation of local inference and detections

Running locally (Windows)
1. Open `landing/index.html` in a browser (double-click or use `pwsh -c start .\landing\index.html`).
2. Click "Try Demo (Local)" to open the simulated demo modal.
3. Click "Run Simulation" to run the inline demo log.

Notes & Next Steps
- Replace the simulation with a real local inference integration for Windows (native helper or WebNN/WebGPU) when ready.
- Add build pipeline, asset optimization, and a proper download flow for installer binaries.
