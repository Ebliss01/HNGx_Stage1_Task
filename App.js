const date = document.querySelector(".currentUTCTime");
const time = document.querySelector(".time");
const currentDayOfTheWeek = document.querySelector(".currentDayOfTheWeek");
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
let week = weekday[d.getDay()];
const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = `${now.getHours()}`.padStart(2, 0);
const min = `${now.getMinutes()}`.padStart(2, 0);

date.textContent = Date.now();
currentDayOfTheWeek.textContent = weekday[d.getDay()];

// const now = new Date();
console.log(now);
console.log(Date.now());