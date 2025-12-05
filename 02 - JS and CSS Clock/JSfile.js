/*let hourDeg = 0;
let minDeg = 0;
let secondDeg = 0;
function rotateHourHand() {
  hourDeg += 0.5;
  document.querySelector(
    ".hour-hand"
  ).style.transform = `rotate(${hourDeg}deg)`;
}
function rotateMinHand() {
  minDeg += 6;
  document.querySelector(".min-hand").style.transform = `rotate(${minDeg}deg)`;
}
function rotateSecondHand() {
  secondDeg += 6;
  document.querySelector(
    ".second-hand"
  ).style.transform = `rotate(${secondDeg}deg)`;
}
setInterval(rotateSecondHand, 1000);
setInterval(rotateMinHand, 60000);
setInterval(rotateHourHand, 60000);*/

function updateClock() {
  let dateNow = new Date();
  let seconds = dateNow.getSeconds();
  let minutes = dateNow.getMinutes();
  let hours = dateNow.getHours();

  const secondDeg = seconds * 6; // 360/60
  const minDeg = minutes * 6 + seconds * 0.1; // minute moves slightly per second
  const hourDeg = (hours % 12) * 30 + minutes * 0.5; // hour moves slightly per minute

  document.querySelector(
    ".hour-hand"
  ).style.transform = `rotate(${hourDeg}deg)`;
  document.querySelector(".min-hand").style.transform = `rotate(${minDeg}deg)`;
  document.querySelector(
    ".second-hand"
  ).style.transform = `rotate(${secondDeg}deg)`;
}
setInterval(updateClock, 1000);
updateClock();
