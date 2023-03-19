import Notiflix from 'notiflix';

const refs = {
  startCreatePromisesBtn: document.querySelector('.form'),
  firstDelay: document.querySelector('[name="delay"]'),
  delayStep: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};

refs.startCreatePromisesBtn.addEventListener('submit', onCreatePromisesBtnStart);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

function onCreatePromisesBtnStart(event) {
  event.preventDefault();

  let firstDelayValue = Number(refs.firstDelay.value);
  let delayStepValue = Number(refs.delayStep.value);
  let amountValue = Number(refs.amount.value);

  for (let i = 1; i <= amountValue; i += 1) {
    
    createPromise(i, firstDelayValue)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    
    firstDelayValue += delayStepValue;
  } 
};
