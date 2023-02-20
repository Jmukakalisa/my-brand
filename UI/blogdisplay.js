// const form = document.querySelector("#form");
// form.addEventListener("submit", function(event){
//   event.preventDefault();

//   var titlee = document.querySelector("#titlee").value;
//   var froala = document.querySelector("#froala").value;
//   var myFile = document.querySelector("#myFile").files[0];
//   var error = document.querySelectorAll(".error");

//   // Validate the form
//   if(titlee === "" || froala === ""){
//     error[0].innerHTML = "Title and Description are required fields";
//     error[1].innerHTML = "Title and Description are required fields";
//   }else if(myFile && !(myFile.type === "image/jpeg" || myFile.type === "image/png" || myFile.type === "image/gif")){
//     error[2].innerHTML = "Invalid file format. Only JPG, PNG and GIF are allowed.";
//   }else{
//     error[0].innerHTML = "";
//     error[1].innerHTML = "";
//     error[2].innerHTML = "";
//   }

//     // Store the blog data in local storage
//     var blogData = [];
//     if(localStorage.getItem("blogData")){
//       blogData = JSON.parse(localStorage.getItem("blogData"));
//     }

//     var blog = {
//       title: titlee,
//       description: froala,
//       comments: [],
//       likes: 0,
//       timestamp: new Date().toLocaleString()
//     };

//     blogData.push(blog);
//     localStorage.setItem("blogData", JSON.stringify(blogData));

//     // Clear the form
//     document.querySelector("#form").reset();

// });

// // Render the blog in the admin panel
// var blogsArray = JSON.parse(localStorage.getItem("blogData"))??[]
// var blogContainer = document.querySelector("#blogContainer");
// blogsArray.array.forEach(element => {
//     blogContainer.insertAdjacentHTML("afterbegin",`
//     <h2>${element.title}</h2>
//     <p>${element.description}</p>
//     <p>${element.timestamp}</p>
//     <button class="btn-add-comment">Add Comment</button>
//     <button class="btn-like">Like (${element.likes})</button>
//     <button class="btn-edit">Edit</button>
//     <button class="btn-delete">Delete</button>
//     `)   
// });
// // var blogTemplate = `
// //   <div class="blog">
// //     <h2>${blog.title}</h2>
// //     <p>${blog.description}</p>
// //     <p>${blog.timestamp}</p>
// //     <button class="btn-add-comment">Add Comment</button>
// //     <button class="btn-like">Like (${blog.likes})</button>
// //     <button class="btn-edit">Edit</button>
// //     <button class="btn-delete">Delete</button>
// //   </div>
// // `;

// if (blogContainer) {
//     blogContainer.innerHTML += blogTemplate;
//   };

// // Add comment functionality
// var btnAddComment = document.querySelectorAll(".btn-add-comment");
// if (btnAddComment && btnAddComment.length) {
//     btnAddComment[btnAddComment.length - 1].addEventListener("click", function(){
//     var comment = prompt("Enter your comment:");
//     if(comment){
//         blog.comments.push(comment);
//         localStorage.setItem("blogData", JSON.stringify(blogData));
//         alert("Comment added successfully.");
//     }
//     });
// }

// // Like functionality
// var btnLike = document.querySelectorAll(".btn-like");
// if (btnLike && btnLike.length){
//     btnLike[btnLike.length - 1].addEventListener("click", function(){
//     blog.likes++;
//     localStorage.setItem("blogData", JSON.stringify(blogData));
//     this.innerHTML = "Like (" + blog.likes + ")";
//     });
// }

// // Edit functionality
// var btnEdit = document.querySelectorAll(".btn-edit");
// if (btnEdit && btnEdit.length){
//     btnEdit[btnEdit.length - 1].addEventListener("click", function(){
//     var title = prompt("Enter new title:", blog.title);
//     var description = prompt("Enter new description:", blog.description);
//     if(title){
//         blog.title = title;
//         blog.description = description;
//         localStorage.setItem("blogData", JSON.stringify(blogData));
//         location.reload();
//     }
//     });
// }

// // Delete functionality
// var btnDelete = document.querySelectorAll(".btn-delete");
// if (btnDelete && btnDelete.length){
//     btnDelete[btnDelete.length - 1].addEventListener("click", function(){
//     if(confirm("Are you sure you want to delete this blog?")){
//         var index = blogData.indexOf(blog);
//         blogData.splice(index, 1);
//         localStorage.setItem("blogData", JSON.stringify(blogData));
//         location.reload();
//     }
//     });
// }


const addBlogForm = document.querySelector("#add-blog-form");
const blogsList = document.querySelector("#blogs-list");

// Check if there are any saved blogs
if (localStorage.getItem("blogs")) {
  const savedBlogs = JSON.parse(localStorage.getItem("blogs"));
  for (const blog of savedBlogs) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${blog.title}</strong>: ${blog.description}`;
    blogsList.appendChild(listItem);
  }
}

// Add a blog
addBlogForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;

  const blog = { title, description };

  // Check if there are any saved blogs
  if (localStorage.getItem("blogs")) {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs"));
    savedBlogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(savedBlogs));
  } else {
    localStorage.setItem("blogs", JSON.stringify([blog]));
  }

  const listItem = document.createElement("li");
  listItem.innerHTML = `<strong>${blog.title}</strong>: ${blog.description}`;
  blogsList.appendChild(listItem);

  addBlogForm.reset();
});
