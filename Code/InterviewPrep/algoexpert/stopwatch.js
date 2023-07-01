let timerID;
let lastTimerStartTime = 0;

const timer = document.getElementById('timer');
const start = document.getElementById('start-button');
const stop = document.getElementById('stop-button');
const reset = document.getElementById('reset-button');

start.addEventListener("click", startTime);
stop.addEventListener('click', stopTime);
reset.addEventListener('click', resetTime);

function startTime() {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = true;

  lastTimerStartTime = Date.now();
  timerID = requestAnimationFrame(updateTimer);
}

function stopTime() {
  start.disabled = false;
  reset.disabled = false;
  stop.disabled = true;
  cancelAnimtionFrame(timerID);
}

function resetTime() {
  reset.disabled = true;
  timer.textContent = '00:00:000'
}

function updateTimer() {
  const millisElapsed = Date.now() - lastTimerStartTime;
  const secondsElapsed = millisElapsed / 1000;
  const minutesElapsed = secondsElapsed / 60;

  
}







function esLetra(char) {
  return /^[A-Za-z]$/.test(char);
}


console.log(esLetra('a')); // true
console.log(esLetra('5')); // false
console.log(esLetra('A')); // true
console.log(esLetra('#')); // false