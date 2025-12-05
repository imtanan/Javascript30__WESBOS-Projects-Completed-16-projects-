const btns = document.querySelectorAll(".timer__button");
const timeLeft = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
let countdown;
function displayTimer(seconds) {
  let mins;
  let now = Date.now();
  let then = now + seconds * 1000;
  updateEndtime(then);

  clearInterval(countdown);
  let remaining = seconds;
  countdown = setInterval(() => {
    mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    let displayTime = `${String(mins).padStart(2, "0")} : ${String(
      secs
    ).padStart(2, "0")}`;
    timeLeft.textContent = displayTime;
    remaining--;

    if (remaining < 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

function updateEndtime(timestamp) {
  let now = new Date(timestamp);
  let hours = now.getHours();
  let ampm = hours >= 12 ? "PM" : "AM";
  let adjustedHours = hours > 12 ? hours - 12 : hours;
  let minutes = now.getMinutes();
  console.log(minutes);

  let displaycurrentTime = `Be Back At ${String(adjustedHours).padStart(
    2,
    "0"
  )} : ${String(minutes)}  ${ampm}`;
  console.log(displaycurrentTime);
  endTime.textContent = displaycurrentTime;

  // let displayEndtime =
}
function updateTimer(seconds) {
  displayTimer(seconds);
}
function clicked() {
  const seconds = parseInt(this.dataset.time);
  updateTimer(seconds);
}
btns.forEach((btn) => btn.addEventListener("click", clicked));

document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let mins = this.minutes.value;
  displayTimer(mins * 60);
  this.reset();
});
