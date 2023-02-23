const name3 = document.getElementById("name3");
const email = document.getElementById("email");
const froala = document.getElementById("froala");

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("isloggedIn")) {
    let loginBtn = document.querySelector("#loginBtn");
    loginBtn.innerHTML = "Logout";
    loginBtn.href = "logout.html";
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // validateInputs();

  const nameValue = name3.value.trim();
  const emailValue = email.value.trim();
  const froalaValue = froala.value.trim();

  if (validateInputs(nameValue, emailValue, froalaValue)) {
    // Generate a unique ID for the user object
    var user = {
      name: nameValue,
      email: emailValue,
      message: froalaValue,
    };
    addMessage(user);
  }
});

const addMessage = async (user) => {
  try {
    let query = await fetch("https://jmukakalisa.onrender.com/api/queries", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (query.status == 200) {
      alert("Query submitted successfull");
      name3.value = "";
      email.value = "";
      froala.value = "";
    }
  } catch (error) {
    console.log("Problem sending your query  ");
  }
};

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
function validateInputs(nameValue, emailValue, froalaValue) {
  validateMessages = true;

  if (nameValue === "") {
    setError(name3, "Please fill out this field");
    validateMessages = false;
  } else {
    setSuccess(name3);
  }

  if (emailValue === "") {
    setError(email, "Please fill out this field");
    validateMessages = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
    validateMessages = false;
  } else {
    setSuccess(email);
  }

  if (froalaValue === "") {
    setError(froala, "Please fill this field");
    // froala.classList.add('setError');
    validateMessages = false;
  } else if (froalaValue.length < 20) {
    setError(froala, "Message must have at least 20 characters");
    // froala.classList.add('setError');
    validateMessages = false;
  } else {
    setSuccess(froala);
  }
  return validateMessages;
}
