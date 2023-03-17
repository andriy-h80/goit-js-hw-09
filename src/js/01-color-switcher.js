let startColor = null;
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
};

refs.stopBtn.disabled = true;
refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
    refs.stopBtn.disabled = false;
    refs.startBtn.disabled = true;

    startColor = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
};

function onStopClick() {
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;

    clearInterval(startColor);
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};