// Dead Timer logic for timing how long robots are dead (milliseconds)
let deadTimerInterval = null;
let deadTimerMs = 0;

function toggleDeadTimer() {
    const checked = document.getElementById('diedCheckbox').checked;
    document.getElementById('deadTimerContainer').style.display = checked ? 'block' : 'none';
    if (!checked) {
        resetDeadTimer();
    }
}

function startDeadTimer() {
    document.getElementById('deadTimerStart').disabled = true;
    document.getElementById('deadTimerStop').disabled = false;
    document.getElementById('deadTimerReset').disabled = false;
    if (!deadTimerInterval) {
        deadTimerInterval = setInterval(() => {
            deadTimerMs += 10;
            updateDeadTimerDisplay();
        }, 10);
    }
}

function stopDeadTimer() {
    document.getElementById('deadTimerStart').disabled = false;
    document.getElementById('deadTimerStop').disabled = true;
    if (deadTimerInterval) {
        clearInterval(deadTimerInterval);
        deadTimerInterval = null;
    }
}

function resetDeadTimer() {
    stopDeadTimer();
    deadTimerMs = 0;
    updateDeadTimerDisplay();
    document.getElementById('deadTimerReset').disabled = true;
}

function updateDeadTimerDisplay() {
    const min = String(Math.floor(deadTimerMs / 60000)).padStart(2, '0');
    const sec = String(Math.floor((deadTimerMs % 60000) / 1000)).padStart(2, '0');
    const ms = String(Math.floor((deadTimerMs % 1000) / 10)).padStart(2, '0');
    document.getElementById('deadTimerDisplay').textContent = `${min}:${sec}:${ms}`;
}

window.addEventListener('DOMContentLoaded', () => {
    updateDeadTimerDisplay();
});
