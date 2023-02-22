// Get all value

let submit = document.getElementById('submit');
let form = document.getElementById('form');

// form Refresh state

form.addEventListener('submit', async (e) => {
    e.preventDefault();
});

// start submit button

submit.addEventListener('click', async (e) => {
    let name3 = document.getElementById('name3');
    let email = document.getElementById('email');
    let froala = document.getElementById('froala');

    // name3 = name3.value;
    // localStorage.setItem('name', name3);
    // localStorage.getItem('name')

    // email = email.value;
    // localStorage.setItem('email', email);
    // localStorage.getItem('email')

    // froala = froala.value;
    // localStorage.setItem('message', froala);
    // localStorage.getItem('message');

    let data = new FormData();
    data.append("name", name3.value);
    data.append("email", email.value);
    data.append("message", froala.value);

    const addedMessage = await fetch("https://jmukakalisa.onrender.com/api/queries", {
      method: "POST",
      body: data,
    //   headers: {
    //     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWY0Zjc3YTA2Y2YwOTQ4OWVjZWE5ZCIsInVzZXJuYW1lIjoiSmVhbm5lIE1hcnkiLCJpc0FkbWluIjp0cnVlLCJlbWFpbCI6ImplYW5uZW1hcnlAZ21haWwuY29tIiwiaWF0IjoxNjc2ODgyODIyLCJleHAiOjE2NzY5NjkyMjJ9.WmWrhhg0bi_aECl4z7Crrr2cvHmBny2QVT3T45sX1tk"
    //   }
    })

    console.log(addedMessage)
    name3.value = "";
    email.value = "";
    froala.value = "";
});