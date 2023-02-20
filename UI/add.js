const form = document.getElementById("form");
const myFile = document.getElementById("myFile");
const titlee = document.getElementById("titlee");
const froala = document.getElementById("froala");
const submitBtn = document.getElementById("submit");
const errorMessage = document.querySelectorAll(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = [];
  let allowedTypes = ["image/jpeg", "image/png", "image/gif"];

  if (titlee.value === "") {
    errorMessage[0].textContent = "Title is required";
  } else if (froala.value === "") {
    errorMessage[1].textContent = "Blog Description is required";
  } else if (myFile.files.length === 0) {
    errorMessage[2].textContent = "Please select a file";
  } else if (!allowedTypes.includes(myFile.files[0].type)) {
    errorMessage[2].textContent = "File type not supported. Allowed: JPG, PNG, GIF";
  } else {
    errorMessage[0].textContent = "";
    errorMessage[1].textContent = "";
    errorMessage[2].textContent = "";
    formData.push({
      title: titlee.value,
      description: froala.value,
      file: myFile.files[0].name,
    });

    let storedData = localStorage.getItem("formData");
    if (storedData === null) {
      localStorage.setItem("formData", JSON.stringify(formData));
    } else {
      storedData = JSON.parse(storedData);
      storedData.push(...formData);
      localStorage.setItem("formData", JSON.stringify(storedData));
    }

    titlee.value = "";
    froala.value = "";
    myFile.value = "";
    alert.innerHTML ="Data saved successfully!";
  }
});
