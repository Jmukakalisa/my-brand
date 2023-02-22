// Login form variables
// const name2 = document.getElementById('name2');
const form = document.getElementById('form')
const email = document.getElementById('email');
const password1 = document.getElementById('password1');

form.addEventListener('submit', e => {
    e.preventDefault();
  
    validateInputs();
  });
  
  const setError = (element, message) => {
    const signupColumn = element.parentElement;
    const errorDisplay = signupColumn.querySelector('.error');
  
    errorDisplay.innerText = message;
    signupColumn.classList.add('error');
    signupColumn.classList.remove('success');
  };
  
  const setSuccess = element => {
    const signupColumn = element.parentElement;
    const errorDisplay = signupColumn.querySelector('.error');
  
    errorDisplay.innerText = '';
    signupColumn.classList.add('success');
    signupColumn.classList.remove('error');
  }
  
  const isValidEmail = email => {
    const resp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return resp.test(String(email).toLowerCase());
  }
  
  const validateInputs = () => {
    // const nameValue = name2.value.trim();
    const passwordValue = password1.value.trim();
    const emailValue = email.value.trim();
  
    // if (nameValue === '') {
    //   setError(name2, 'Please fill out this field')
    // } else {
    //   setSuccess(name2);
    // }
  
    if(emailValue === '') {
      setError(email, 'Please fill out this field');
    } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
    } else {
      setSuccess(email);
    }
  
    if(passwordValue === '') {
      setError(password1, 'Password is required');
    } else if (passwordValue.length < 8 ) {
      setError(password1, 'Password must be at least 8 characters');
    } else {
      setSuccess(password1);
    }
    
  };

//  form = await fetch(
//         "https://jmukakalisa.onrender.com/api/login",
//         {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(loginCredentials),
//         }
//       );

//       const isLoggedInJSON = await form.json();
//       console.log(isLoggedInJSON);

//       if (isLoggedInJSON.token) {
//         localStorageisLoggedInJSON.setItem(
//           "isloggedIn",
//           JSON.stringify({
//             token: isLoggedInJSON.token,
//             role: isLoggedInJSON.role,
//           })
//         );

//         console.log(localStorage.getItem("isloggedIn"));
//         submitMessage.innerHTML =
//           '<div id="errors" style="width: 100%; height: 40px; padding: 0px 0; margin: 0px 0; font-size: 14px; color: hsla(0, 0%, 100%, 0.7); display: flex; justify-content: center; align-items: center; background-color: hsla(130, 71%, 41%, 10%); border-radius: 3px; border: 1px solid #1eb136; >' +
//           '<p style="width: 100%; margin:0; padding: 0; text-align: center;"> User logged in </p> </div>';

//         if (form.role === "admin") {
//           window.location.href = "admin.html";
//         } else {
//           console.log(window);
//           if (window.history.go(-1) == "blog.html") {
//             window.history.go(-1);
//           } else {
//             window.location.href = "index.html";
//           }
//         }
//       } else if (isLoggedInJSON.error) {
//         console.log(form.error);
//       } else if (isLoggedInJSON.message && !isLoggedInJSON.token) {
//         submitMessage.innerHTML = `<div id="errors" style="width: 100%; height: 40px; padding: 0px 0; margin: 0px 0; font-size: 14px; color: hsla(0, 0%, 100%, 0.7); display: flex; justify-content: center; align-items: center; background-color: hsla(10, 71%, 41%, 10%); border-radius: 3px; border: 1px solid #b1361e; >
//           <p style="width: 100%; margin:0; padding: 0; text-align: center;"> ${isLoggedInJSON.message} </p> </div>`;
//       }

//       clearForm();

// // a function to clear the form
// function clearForm() {
//   //resets the form fields
//   document.getElementById("email").value = "";
//   document.getElementById("password").value = "";
// }

// document.getElementById("show-password").addEventListener("click", (e) => {
//   var passwordInput = document.getElementById("password");
//   if (passwordInput.type === "password") {
//     passwordInput.type = "text";
//     document.getElementById("hide-password").style.display = "inline";
//     document.getElementById("show-password").style.display = "none";
//   }
// });

// document.getElementById("hide-password").addEventListener("click", (e) => {
//   var passwordInput = document.getElementById("password");
//   if (passwordInput.type === "text") {
//     passwordInput.type = "password";
//     document.getElementById("show-password").style.display = "inline";
//     document.getElementById("hide-password").style.display = "none";
//   }
// });