const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2022, 5, 3, 7, 39, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const min = futureDate.getMinutes();

let month = futureDate.getMonth();
let date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${months[month]} ${year} ${hours}:${min}am`;

// future time in milliseconds
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  // console.log(today);
  const dateDiff = futureTime - today;
  // console.log(dateDiff);

  // * 1s = 1000ms
  // * 1m = 60s
  // * 1hr = 60min
  // * 1d = 24hr

  //  values in milliseconds

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  // Calculating values
  let days = dateDiff / oneDay;
  days = Math.floor(days);
  // console.log(days);

  let hours = (dateDiff % oneDay) / oneHour;
  hours = Math.floor(hours);
  // console.log(hours);

  let minutes = (dateDiff % oneHour) / oneMinute;
  minutes = Math.floor(minutes);
  // console.log(minutes);

  let seconds = (dateDiff % oneMinute) / oneSecond;
  seconds = Math.floor(seconds);
  // console.log(seconds);

  // set value array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (dateDiff < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class = 'expired'>Sorry this giveaway has expired</h4>`;
  }
}

// count down
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
