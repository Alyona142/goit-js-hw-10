import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    const delay = Number(this.delay.value);
    const state = this.state.value;

    console.log('Delay:', delay); 
    console.log('State:', state);   

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                console.log('Resolving...'); 
                resolve(delay);
            } else {
                console.log('Rejecting...'); 
                reject(delay);
            }
        }, delay);
    });

    promise
        .then(delay => {
            console.log('Promise fulfilled'); 
            iziToast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: 'topRight'
            });
        })
        .catch(delay => {
            console.log('Promise rejected'); 
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
                position: 'topRight'
            });
        });
});