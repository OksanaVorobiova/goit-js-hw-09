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

      if(selectedDates[0].getTime() < this.defaultDate.getTime()) {
        window.alert("Please choose a date in the future");
      }

     
      startBtn.disabled = false;
  },
};

const calendar = flatpickr(input, options);



startBtn.addEventListener('click', onStartBtn);



function onStartBtn (e) {
    if (input.value === "") {
        alert('Please choose a date in the future');
    }
}