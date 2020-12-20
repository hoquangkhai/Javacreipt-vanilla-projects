const newYears = "1 Jan 2021";
const lunarNewYear = "12 Feb 2021";
const lunarBtnElement = document.querySelector(".lunar");
const newBtnElement = document.querySelector(".new-years");
const containerTitle = document.querySelector(".container-title");

let year = newYears;
let x = lunarBtnElement.innerHTML;
let y = newBtnElement.innerHTML;

function cuontdown(year) {
  const newYearsDate = new Date(year);
  const currentDate = new Date();

  const day = document.getElementById("day");
  const hour = document.getElementById("hour");
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");

  const totalSec = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSec / (24 * 60 * 60));
  const hours = Math.floor(totalSec / (60 * 60)) % 24;
  const mins = Math.floor(totalSec / 60) % 60;
  const secs = Math.floor(totalSec) % 60;

  day.innerHTML = formatTime(days);
  hour.innerHTML = formatTime(hours);
  min.innerHTML = formatTime(mins);
  sec.innerHTML = formatTime(secs);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(function () {
  lunarBtnElement.onclick = function () {
    newBtnElement.classList.remove("red");
    lunarBtnElement.classList.add("red");
    year = lunarNewYear;
    containerTitle.innerText = x;
  };

  newBtnElement.onclick = function () {
    lunarBtnElement.classList.remove("red");
    newBtnElement.classList.add("red");
    year = newYears;
    containerTitle.innerText = y;
  };
  cuontdown(year);
}, 1000);
