import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// all modules
import Notiflix from 'notiflix';

let selectedDate = null;
let timer = null;

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    input: document.querySelector('#datetime-picker'),
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]'),
};

// refs.input.disabled = false;
refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onStartTimerClick);
// мінімальне оформлення елементів інтерфейсу
refs.startBtn.style.backgroundColor = 'lightblue';
document.body.style.backgroundColor = 'lightyellow';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(selectedDates[0] < Date.now()) {
        Notiflix.Report.warning('Please choose a date in the future');
        refs.startBtn.disabled = true;
      } else {
        refs.startBtn.disabled = false;
        selectedDate = selectedDates[0];
      }
    },

//  можливість вводити дату безпосередньо в поле введення
    allowInput: true,
  };

flatpickr(refs.input, options);

function onStartTimerClick() {
    timer = setInterval(() => {
        const currentDate = Date.now();
        let deltaTime = selectedDate - currentDate;
        renderTimer(convertMs(deltaTime));
        refs.startBtn.disabled = true;
        refs.input.disabled = true;

        if(deltaTime < 1000) {
            clearInterval(timer);
            refs.input.disabled = false;
        };
    }, 1000);
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
};

function renderTimer({ days, hours, minutes, seconds }) {
  refs.dataDays.textContent = days;
  refs.dataHours.textContent = hours;
  refs.dataMinutes.textContent = minutes;
  refs.dataSeconds.textContent = seconds;
};