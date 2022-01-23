const mainClock = document.querySelector("#main-clock");
const secondsClock = document.querySelector("#seconds-clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  mainClock.innerText = `${hours}:${minutes}`;
  secondsClock.innerText = `${seconds}`;
}

getClock();
setInterval(getClock, 1000);
