function updateCountdown() {
    const endDate = new Date('december 1, 2024 12:00:00');
    const now = new Date();
    const timeLeft = endDate - now;

    if (timeLeft >= 0) {
        const timeParts = calculateTimeParts(timeLeft);
        updateDOM(timeParts);
    } else {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerText = 'Giveaway Ended';
    }
}

function calculateTimeParts(timeLeft) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
}

function updateDOM({ days, hours, minutes, seconds }) {
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();