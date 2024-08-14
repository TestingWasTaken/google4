let timer;
let minutes = 25;
let seconds = 0;
let isPaused = true;

function startTimer() {
    if (isPaused) {
        isPaused = false;
        timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    alert('Focus session completed!');
                    resetTimer();
                    return;
                }
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateTimerDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isPaused = true;
}

function resetTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    isPaused = true;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function logDistraction() {
    const input = document.getElementById('distractionInput').value.trim();
    if (input) {
        const listItem = document.createElement('li');
        listItem.textContent = input;
        document.getElementById('distractionList').appendChild(listItem);
        document.getElementById('distractionInput').value = '';
    }
}
