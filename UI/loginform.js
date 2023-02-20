// Login form variables
const name2 = document.getElementById('name2');
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
    const nameValue = name2.value.trim();
    const passwordValue = password1.value.trim();
    const emailValue = email.value.trim();
  
    if (nameValue === '') {
      setError(name2, 'Please fill out this field')
    } else {
      setSuccess(name2);
    }
  
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