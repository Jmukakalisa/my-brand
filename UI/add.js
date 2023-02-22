const form = document.getElementById("form");
const myFile = document.getElementById("myFile");
const titlee = document.getElementById("titlee");
const froala = document.getElementById("froala");
const submitBtn = document.getElementById("submit");
const errorMessage = document.querySelectorAll(".error");

form.addEventListener("submit", async (e) => {
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

    let data = new FormData();
    data.append("title", titlee.value);
    data.append("content", froala.value);
    data.append("image", myFile.files[0]);

    const addedBlog = await fetch("https://jmukakalisa.onrender.com/api/blogs", {
      method: "POST",
      body: data,
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWY0Zjc3YTA2Y2YwOTQ4OWVjZWE5ZCIsInVzZXJuYW1lIjoiSmVhbm5lIE1hcnkiLCJpc0FkbWluIjp0cnVlLCJlbWFpbCI6ImplYW5uZW1hcnlAZ21haWwuY29tIiwiaWF0IjoxNjc2ODgyODIyLCJleHAiOjE2NzY5NjkyMjJ9.WmWrhhg0bi_aECl4z7Crrr2cvHmBny2QVT3T45sX1tk"
      }
    })

    console.log(addedBlog)


    // let storedData = localStorage.getItem("formData");
    // if (storedData === null) {
    //   localStorage.setItem("formData", JSON.stringify(formData));
    // } else {
    //   storedData = JSON.parse(storedData);
    //   storedData.push(...formData);
    //   localStorage.setItem("formData", JSON.stringify(storedData));
    // }

    titlee.value = "";
    froala.value = "";
    myFile.value = "";
    alert.innerHTML ="Data saved successfully!";
  }
});
