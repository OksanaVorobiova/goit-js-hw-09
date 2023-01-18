const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

const { startBtn, stopBtn } = refs;
let intervalId = null;
let isActive = false;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn(e) {
    if (!isActive) {
        isActive = true;
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
       // console.log('new color');
    }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStopBtn(e) {
    if (isActive) {
        clearInterval(intervalId);
        isActive = false;
    }
}