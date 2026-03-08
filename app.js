// Initialization and Tab Switching
const modes = {
    search: document.getElementById('searchMode'),
    troubleshoot: document.getElementById('troubleshootMode'),
    live: document.getElementById('liveMode')
};

// Global State
let lastAlertTimestamp = null;
let notificationsEnabled = false;

window.switchMode = (mode) => {
    Object.keys(modes).forEach(k => {
        if (modes[k]) modes[k].style.display = 'none';
    });
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    
    if (modes[mode]) {
        modes[mode].style.display = 'block';
        const btn = document.querySelector(`button[onclick="switchMode('${mode}')"]`);
        if (btn) btn.classList.add('active');
        localStorage.setItem('semiBrain_lastMode', mode);
    }
    
    if (mode === 'live') {
        startPolling();
    } else {
        stopPolling();
    }
};

// Restore state on load
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('semiBrain_lastMode') || 'search';
    window.switchMode(savedMode);
});

/* ------------------------------------------------------------
   AUDIO ENGINE (Web Audio API)
   ------------------------------------------------------------ */
function playAlarm() {
    if (!notificationsEnabled) return;

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create a warning chime (Sequence of three notes)
    const playNote = (freq, start, duration) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);
        
        gain.gain.setValueAtTime(0.2, start);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start(start);
        osc.stop(start + duration);
    };

    const now = audioCtx.currentTime;
    playNote(880, now, 0.4);       // A5
    playNote(1108.73, now + 0.2, 0.4); // C#6
    playNote(1318.51, now + 0.4, 0.6); // E6
}

window.toggleNotifications = () => {
    const btn = document.getElementById('notifyToggle');
    notificationsEnabled = !notificationsEnabled;
    
    if (notificationsEnabled) {
        btn.innerHTML = "🔊 Notifications: ON";
        btn.classList.add('active');
        // Initial test beep so user knows it's working
        playAlarm(); 
    } else {
        btn.innerHTML = "🔔 Notifications: OFF";
        btn.classList.remove('active');
    }
};

/* ------------------------------------------------------------
   LIVE MONITOR POLLING
   ------------------------------------------------------------ */
let pollInterval = null;

function startPolling() {
    if (pollInterval) return;
    updateLiveFeed(); 
    pollInterval = setInterval(updateLiveFeed, 3000);
}

function stopPolling() {
    clearInterval(pollInterval);
    pollInterval = null;
}

async function updateLiveFeed() {
    const liveFeed = document.getElementById('liveFeed');
    try {
        console.log("Polling for updates...");
        const response = await fetch('live_status.json?t=' + Date.now());
        if (!response.ok) throw new Error("File not found or server error");
        
        const data = await response.json();
        
        if (!data || data.length === 0) {
            console.log("No data received from live_status.json");
            return;
        }

        // Check for new alerts
        const latestLog = data[0];
        if (latestLog.status === 'FAIL' && latestLog.timestamp !== lastAlertTimestamp) {
            lastAlertTimestamp = latestLog.timestamp;
            playAlarm();
        }

        liveFeed.innerHTML = data.map(log => `
            <div class="log-row ${log.status.toLowerCase()}">
                <span class="log-time">${log.timestamp}</span>
                <span class="log-machine"><strong>${log.machine}</strong></span>
                <div class="log-data">
                    ${Object.entries(log.data).map(([k,v]) => `${k}: ${v}`).join(' | ')}
                    <div class="log-alerts">${log.alerts.join(' ')}</div>
                </div>
                <div class="log-status">
                    <span class="badge ${log.status.toLowerCase()}">${log.status}</span>
                </div>
            </div>
        `).join('');
    } catch (e) {
        console.error("Live Feed Error:", e);
        if (liveFeed.innerHTML.includes('Waiting')) {
             liveFeed.innerHTML = `<div class="empty-state"><p>⚠️ Error: ${e.message}</p><p>Ensure you are running a local server and the python script is active.</p></div>`;
        }
    }
}

/* ------------------------------------------------------------
   KNOWLEDGE & WIZARD LOGIC (RE-ADDED)
   ------------------------------------------------------------ */
// Search
const searchInput = document.getElementById('searchInput');
const resultsArea = document.getElementById('resultsArea');
searchInput.addEventListener('input', (e) => {
    const key = e.target.value.toLowerCase();
    if (!key) { resultsArea.innerHTML = ''; return; }
    const matches = Object.values(knowledgeBase.roles).filter(r => 
        r.title.toLowerCase().includes(key) || r.description.toLowerCase().includes(key) ||
        r.tools.some(t => t.toLowerCase().includes(key))
    );
    resultsArea.innerHTML = matches.map(role => `
        <div class="result-card"><h2>${role.title}</h2><p>${role.description}</p>
        <div class="chips">${role.tools.map(t => `<span class="chip">${t}</span>`).join('')}</div></div>
    `).join('');
});

// Wizard
const wizardContent = document.getElementById('wizardContent');
function initWizard() { renderStep('start'); }
function renderStep(stepId) {
    const step = knowledgeBase.troubleshooting_tree[stepId];
    let html = `<h2>${step.question}</h2><div class="options-grid">`;
    step.options.forEach(opt => {
        if (opt.solution) { html += `<button class="option-btn" onclick="showSolution('${opt.solution}')">${opt.label}</button>`; }
        else { html += `<button class="option-btn" onclick="renderStep('${opt.next}')">${opt.label}</button>`; }
    });
    html += `</div>`;
    wizardContent.innerHTML = html;
}
window.showSolution = (sol) => {
    wizardContent.innerHTML = `<h2>Solution Found</h2><div class="result-card">${sol}</div><button onclick="initWizard()" class="mode-btn">Restart</button>`;
};
initWizard();
