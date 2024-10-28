import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = document.querySelector('.delay-input');

const createPromise = (delay, state) => {
  if (state === 'fulfilled') {
    setTimeout(() => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);
      iziToast.success(
        {
          message: `Fulfilled promise in ${delay} ms`,
          position: 'topRight',
        },
      );
    }, delay);
  } else {
    setTimeout(() => {
      console.log(`❌ Rejected promise in ${delay}ms`);
      iziToast.error(
        {
          message: `Rejected promise in ${delay} ms`,
          position: 'topRight',

        },
      );
    }, delay);
  }
};

form.addEventListener(
  'submit',
  function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const delayValue = formData.get('delay');
    const stateValue = formData.get('state');

    createPromise(delayValue, stateValue);
    form.reset();
  },
  false,
);