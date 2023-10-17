const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const dateInput = document.querySelector('#date');
const msg = document.querySelector('.msgbx');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    }else{
        msg.classList.add('sub');
        msg.innerHTML = 'Complete Successfully'

    }
}