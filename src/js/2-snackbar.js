import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = document.querySelector('.delay-input');

const createPromise = (delay, state) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        console.log(`✅ Fulfilled promise in ${delay}ms`);
        iziToast.success({
          message: `Fulfilled promise in ${delay} ms`,
          position: 'topRight',
        });
        resolve(); 
      } else {
        console.log(`❌ Rejected promise in ${delay}ms`);
        iziToast.error({
          message: `Rejected promise in ${delay} ms`,
          position: 'topRight',
        });
        reject(); 
      }
    }, delay);
  });
};

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const delayValue = Number(formData.get('delay')); 
  const stateValue = formData.get('state');

  createPromise(delayValue, stateValue)
    .then(() => {
      console.log('Promise was fulfilled!');
    })
    .catch(() => {
      console.log('Promise was rejected!');
    });

  form.reset();
}, false);
