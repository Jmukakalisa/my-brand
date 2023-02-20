
const name3 = document.getElementById('name3');
const email = document.getElementById('email');
const froala = document.getElementById('froala')

form.addEventListener('submit', e => {
    e.preventDefault();
  
    // validateInputs();
  
    const nameValue = name3.value.trim();
    const emailValue = email.value.trim();
    const froalaValue = froala.value.trim();

    // if (validateInputs(name3, email, froala)){
    //   var uniqueId = Date.now().toString();
    //   var user = {
    //     userName: nameValue,
    //     userEmail: emailValue,
    //     userMessage: froalaValue,
    //     id: uniqueId,
    //   }
    //   if (localStorage.getItem('Messages')== null){
    //     localStorage.setItem('Messages', '[]');
    //   }
      
    //   let oldKey = JSON.parse(localStorage.getItem('Messages'));
    //   oldKey.push(user);
    //   localStorage.setItem('Messages', JSON.stringify(oldKey));
    //   location.reload();
    // }

    if (validateInputs(nameValue, emailValue, froalaValue)) {
  // Generate a unique ID for the user object
      var uniqueId = Date.now().toString();
      var user = {
        userName: nameValue,
        userEmail: emailValue,
        userMessage: froalaValue,
        id: uniqueId,
      };

      // Check if the "Messages" key already exists in local storage
      let messages = localStorage.getItem("Messages");
      if (!messages) {
        // If the key does not exist, create it with an empty array
        messages = "[]";
        localStorage.setItem("Messages", messages);
      }
      try {
        // Parse the "Messages" value from local storage as JSON
        messages = JSON.parse(messages);
        // Push the new user object to the array
        messages.push(user);
        // Stringify the updated array and set it as the new value for the "Messages" key in local storage
        localStorage.setItem("Messages", JSON.stringify(messages));
      } catch (error) {
        console.log("Error while parsing data from local storage: ", error);
      }
    }
  })  


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
  function validateInputs (nameValue, emailValue, froalaValue){  
    validateMessages = true;

    if (nameValue === '') {
      setError(name3, 'Please fill out this field');
      validateMessages = false;
    } else {
      setSuccess(name3)
    }
  
    if(emailValue === '') {
      setError(email, 'Please fill out this field');
      validateMessages = false;
    } else if (!isValidEmail(emailValue)) {
      setError (email, 'Provide a valid email address');
      validateMessages = false;
    } else {
      setSuccess(email);
    }

    if(froalaValue === '') {
      setError(froala, 'Please fill this field');
      // froala.classList.add('setError');
      validateMessages = false;
    } else if (froalaValue.length < 20 ) {
      setError(froala, 'Message must have at least 20 characters');
      // froala.classList.add('setError');
      validateMessages = false;
    } else {
    setSuccess(froala);
    }
    return validateMessages
  };