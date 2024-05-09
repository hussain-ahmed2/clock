const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const digital = document.getElementById('digital');
const day = document.getElementById('day');
const dayArr = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]


const calculateTime = () => {
  const date = new Date();

  const currentSecond = date.getSeconds();
  const secondPosition = currentSecond * 6 - 90;
  sec.style.transform = `rotate(${secondPosition}deg)`;

  const currentMinute = date.getMinutes();
  const minutePosition = currentMinute * 6 - 90;
  min.style.transform = `rotate(${minutePosition}deg)`;

  const currentHour = date.getHours();
  const hourPosition = currentHour * 30 - 90 + (30/60 * currentMinute);
  hour.style.transform = `rotate(${hourPosition}deg)`;

  const digitalTime = `${currentHour/10 < 1? '0'+currentHour:currentHour} : ${currentMinute/10 < 1? '0'+currentMinute:currentMinute} : ${currentSecond/10 < 1? '0'+currentSecond:currentSecond}`;
  digital.innerText = digitalTime;

  day.innerText = dayArr[date.getDay()]
}

setInterval(calculateTime, 1000);
