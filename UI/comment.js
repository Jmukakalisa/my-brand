
const froala = document.getElementById('froala');
// const blodes = document.getElementById('blodes');
// const mess = document.getElementById('mess')

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
  
//   const isValidEmail = email => {
//     const resp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return resp.test(String(email).toLowerCase());
//   }
  
  const validateInputs = () => {
    const froalaValue = froala.value.trim();
    // const blodesValue = blodes.value.trim();
    // const messValue = mess.value.trim();

    if (froalaValue === '') {
      setError(froala, 'Please fill out this field')
    } else {
      setSuccess(froala);
    }

    if(froalaValue === '') {
        setError(froala, 'Please fill this field');
    } else if (froalaValue.length < 20 ) {
    setError(froala, 'Comment must be at least 20 characters');
    } else {
    setSuccess(froala);
    }


  }

//   let allMessages = [];
// const retrieving = async () => {
//     allMessages = await JSON.parse(localStorage.getItem("form"));
//     console.log(allMessages) 
//     allMessages.map((form) => {
//     // let splittedArr = message[message].split(" ");
//     // splittedArr.splice(12);
//     const container = document.getElementById("froala");
//     container.innerHTML += `<div class="message-content"> <h4>${form.fullName}</h4> <p>${form.email}</p> <p class="short-description"> ${message.message} </p> </div>`
//   });
// };

// window.onload = () => {retrieving();}