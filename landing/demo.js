(() => {
  const tryDemo = document.getElementById('tryDemo');
  const demoOutput = document.getElementById('demoOutput');
  const runSim = document.getElementById('runSim');
  const demoLog = document.getElementById('demoLog');
  const modal = document.getElementById('demoModal');
  const modalStatus = document.getElementById('modalStatus');
  const modalLog = document.getElementById('modalLog');
  const closeModal = document.getElementById('closeModal');

  function appendLog(el, text){
    const p = document.createElement('div');
    p.textContent = `[${new Date().toLocaleTimeString()}] ${text}`;
    el.appendChild(p);
    el.scrollTop = el.scrollHeight;
  }

  function simulateDetection(targetEl, logEl){
    appendLog(logEl, 'Initializing local inference runtime... (simulated)');
    setTimeout(()=> appendLog(logEl,'Scanning MCP calls for anomalies...'), 800);
    setTimeout(()=> appendLog(logEl,'Detected suspicious injection pattern in request 0x4a1f'), 1600);
    setTimeout(()=> appendLog(logEl,'Correlation: related context exfil attempt flagged'), 2600);
    setTimeout(()=> appendLog(logEl,'Threat severity: Medium — recommended action: isolate request and notify user'), 3600);
    setTimeout(()=> appendLog(logEl,'Demo complete. No data persisted.'), 4600);
    targetEl.textContent = 'Simulation complete — 3 events flagged. See log for details.';
  }

  tryDemo?.addEventListener('click', ()=>{
    modal.setAttribute('aria-hidden','false');
    modalStatus.textContent = 'Running simulated local demo';
    modalLog.textContent = '';
    simulateDetection(demoOutput, modalLog);
  });

  runSim?.addEventListener('click', ()=>{
    demoLog.textContent = '';
    simulateDetection(demoOutput, demoLog);
  });

  closeModal?.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));

  // On load, detect capabilities (very lightweight simulation)
  window.addEventListener('load', ()=>{
    const hasNPU = false; // placeholder: in real demo detect via native helper
    const simBadge = document.getElementById('simBadge');
    if(!hasNPU){
      simBadge.textContent = 'Simulation Mode';
    } else {
      simBadge.textContent = 'Local Inference Available';
    }
    appendLog(demoLog,'Ready. Click "Run Simulation" to begin.');
  });
})();
