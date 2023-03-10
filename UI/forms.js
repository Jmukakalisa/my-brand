// sign up form variables
const name1 = document.getElementById("name1");
const password = document.getElementById("password");
const form = document.getElementById("form");
const email = document.getElementById("email");
const password2 = document.getElementById("password2");

// Login form variables
// const name2 = document.getElementById('name2');
// const email1 = document.getElementById('email1');
// const password1 = document.getElementById('password1');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const signupColumn = element.parentElement;
  const errorDisplay = signupColumn.querySelector(".error");

  errorDisplay.innerText = message;
  signupColumn.classList.add("error");
  signupColumn.classList.remove("success");
};

const setSuccess = (element) => {
  const signupColumn = element.parentElement;
  const errorDisplay = signupColumn.querySelector(".error");

  errorDisplay.innerText = "";
  signupColumn.classList.add("success");
  signupColumn.classList.remove("error");
};

const isValidEmail = (email) => {
  const resp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return resp.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const nameValue = name1.value.trim();
  const passwordValue = password.value.trim();
  const emailValue = email.value.trim();
  const password2Value = password2.value.trim();

  // Login form inputs

  if (nameValue === "") {
    setError(name1, "Please fill out this field");
  } else {
    setSuccess(name1);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
  register({
    username: name1.value,
    email: email.value,
    password: password.value,
  });
};

async function register(registerCredentials) {
  try {
    let form = await fetch("https://jmukakalisa.onrender.com/api/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerCredentials),
    });
    if (form.status == 400 || form.status == 401) {
      submitMessage.innerHTML = `<div id="errors" style="width: 100%; height: 40px; padding: 0px 0; margin: 0px 0; font-size: 14px; color: hsla(0, 0%, 100%, 0.7); display: flex; justify-content: center; align-items: center; background-color: hsla(10, 71%, 41%, 10%); border-radius: 3px; border: 1px solid #b1361e; >
        <p style="width: 100%; margin:0; padding: 0; text-align: center;"> Problem creating your account </p> </div>`;

      return;
    }
    if (form.status == 201) {
      alert("Account created successfully");
      // window.location.href = "login.html";
    }
  } catch (error) {
    console.log(error);
    submitMessage.innerHTML =
      '<div id="errors" style="width: 100%; height: 40px; padding: 0px 0; margin: 0px 0; font-size: 14px; color: hsla(0, 0%, 100%, 0.7); display: flex; justify-content: center; align-items: center; background-color: hsla(130, 71%, 41%, 10%); border-radius: 3px; border: 1px solid #b1361e; >' +
      '<p style="width: 100%; margin:0; padding: 0; text-align: center;"> Problem performing your request </p> </div>';
  }
}
