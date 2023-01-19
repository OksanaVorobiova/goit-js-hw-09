import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.getElementById('datetime-picker'),
    timer: document.querySelector('.timer'),
    startBtn: document.querySelector('button[data-start]'),
    daysValue: document.querySelector('span[data-days]'),
    hoursValue: document.querySelector('span[data-hours]'),
    minutesValue: document.querySelector('span[data-minutes]'),
    secondsValue: document.querySelector('span[data-seconds]'),

}

const { input, timer, startBtn, daysValue, hoursValue, minutesValue, secondsValue } = refs;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function(selectedDates) {
      console.log(selectedDates[0]);  
      console.log(selectedDays[0].getTime());

      if(selectedDates[0].getTime() < Date.now()) {
        window.alert("Please choose a date in the future");
      }

     
      startBtn.disabled = false;

      let ms = selectedDates[0] - Date.now();
      return ms;
  },
};

const calendar = flatpickr(input, options);



startBtn.addEventListener('click', onStartBtn);



function onStartBtn (e) {
    if (input.value === "") {
        alert('Please choose a date in the future');
    }

    convertMs(ms);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}