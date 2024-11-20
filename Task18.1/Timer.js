function formatTime(seconds) {

    const date = new Date(seconds * 1000);

    const minutes = date.getUTCMinutes();
    const secs = date.getUTCSeconds();

    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

function countdown(startTime) {
    return new Promise((resolve) => {
        let timeLeft = startTime;
        const timerElement = document.getElementById('timer');

            function updateTimer() {
                timerElement.textContent = formatTime(timeLeft);

                if (timeLeft <= 0) {
                    resolve();
                    return;
                }

                timeLeft -= 1;
                setTimeout(updateTimer,1000);

            }

            updateTimer();

    });
}

document.getElementById('startTimer').addEventListener('click', async () => {
    const startTime = 85;
    await countdown(startTime);
    alert('GAME OVER');
});