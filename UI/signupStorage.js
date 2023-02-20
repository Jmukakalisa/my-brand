// Get all value

let submit = document.getElementById('submit');
let signup = document.getElementById('form');

// form Refresh state

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

// start submit button

submit.addEventListener('click', (e) => {
    let name1 = document.getElementById('name1');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let password2 = document.getElementById('password2');

    name1 = name1.value;
    localStorage.setItem('name', name1);
    localStorage.getItem('name')

    email = email.value;
    localStorage.setItem('email', email);
    localStorage.getItem('email')

    password = password.value;
    localStorage.setItem('password', password);
    localStorage.getItem('password');

    password2 = password2.value;
    localStorage.setItem('password2', password2);
    localStorage.getItem('password2');
});