const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  bodyRef: document.querySelector("body"),
};

refs.startBtn.addEventListener("click", startBtnHandler);
refs.stopBtn.addEventListener("click", stopBtnHandler);

let timerId = null;

function startBtnHandler() {
  timerId = setInterval(changeColor, 1000);
  refs.startBtn.disabled = true;
}

function stopBtnHandler() {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
}

function changeColor() {
  const randomColor = randomIntegerFromInterval(0, colors.length - 1);
  refs.bodyRef.style.backgroundColor = colors[randomColor];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
