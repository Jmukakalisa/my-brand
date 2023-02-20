const key = document.getElementById('titlee')
const value = document.getElementById('froala')
// const myFile = document.getElementById('myFile')
const submit = document.getElementById('submit')


submit.onclick = function () {
    const key = titlee.value;
    const value = froala.value;
    // const myFile = myFile.value;

    if (key && value){
        localStorage.setItem(key, value);
        location.reload();
    }
    
};

for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    // submit.innerHTML += `${key}: ${value}<br />`;

}



