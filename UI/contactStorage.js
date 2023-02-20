// Get all value

let submit = document.getElementById('submit');
let form = document.getElementById('form');

// form Refresh state

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

// start submit button

submit.addEventListener('click', (e) => {
    let name3 = document.getElementById('name3');
    let email = document.getElementById('email');
    let froala = document.getElementById('froala');

    name3 = name3.value;
    localStorage.setItem('name', name3);
    localStorage.getItem('name')

    email = email.value;
    localStorage.setItem('email', email);
    localStorage.getItem('email')

    froala = froala.value;
    localStorage.setItem('message', froala);
    localStorage.getItem('message');
});