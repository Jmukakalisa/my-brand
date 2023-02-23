document.addEventListener("DOMContentLoaded", function () {
  retrieving();
  getMessages();
});

document
  .querySelector("#blog-list")
  .addEventListener("click", function ({ target }) {
    let { id, value } = target;
    if (id == "deleteBlogBtn") {
      removeBlog(value);
    }
  });

// document
//   .querySelector("#message-list")
//   .addEventListener("click", function ({ target }) {
//     let { id, value } = target;
//     if (id == "deleteMessageBtn") {
//       removeMessage(value);
//     }
//   });
let allBlogs = [];
let allMessages = [];

const retrieving = async () => {
  allBlogs = await fetch("https://jmukakalisa.onrender.com/api/blogs", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector("#blogNumber").innerHTML = data.data.length;
      let d = data.data.splice(0, 6);
      d.map((blog) => {
        let date = new Date(blog.createdAt);
        const datePublished = `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}`;
        let shortDescription;
        if (blog.content.split(" ").length > 100) {
          shortDescription =
            blog.content.split(" ").slice(0, 100).join(" ") + " ...";
        } else {
          shortDescription = blog.content;
        }

        const container = document.querySelector("#blog-list");
        container.innerHTML += `
    <tr class="blog-summ-box">
        <th class="blog-link" href="admin.html"><h4>${blog.title}</h4></th>
        <th>${datePublished}</th>
        <th class="short-description">
       ${shortDescription}
        </th>
        <th><a href='editBlog.html?id=${blog._id}' id='editBtn' class="btn btn-success">Edit</a></th>
        <th><button value=${blog._id} id='deleteBlogBtn' class="btn">Delete</a></th>
    </tr>`;
      });

      const selectedBlog = document.querySelectorAll(".blog-link");
      const retrievedBlogs = data.data;
      console.log("retrievedBlogs", retrievedBlogs);
      for (let i = 0; i < selectedBlog.length; i++) {
        let title = selectedBlog[i].querySelector("h4").innerHTML;
        console.log("title", title);
        selectedBlog[i].addEventListener("click", (e) => {
          e.preventDefault();
          for (let j = 0; j < retrievedBlogs.length; j++) {
            if (i == j) {
              let blogId = retrievedBlogs[j]._id;
              console.log(blogId);
              localStorage.setItem("selectedBlog", JSON.stringify(blogId));
              window.location.href = "admin.html";
            }
          }
        });
      }
    });
};

const token = JSON.parse(localStorage.getItem("isloggedIn")).token;
const getMessages = async () => {
  allBlogs = await fetch("https://jmukakalisa.onrender.com/api/queries", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let d = data.length > 1 && data.splice(0, 3);
      d.map((message) => {
        const container = document.querySelector("#message-list");
        container.innerHTML += `
    <tr class="blog-summ-box">
        <th ><h4>${message.name}</h4></th>
        <th>${message.email}</th>
        <th class="short-description">
       ${message.message}
        </th>
        // <th><button value=${message._id} id='deleteMessageBtn' class="btn">Delete</a></th>
    </tr>`;
      });
    });
};

const removeBlog = async (id) => {
  allBlogs = await fetch(`https://jmukakalisa.onrender.com/api/blogs/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert(data.message);
      window.location = "";
    })
    .catch((error) => {
      alert("Problem deleting the blog");
      console.log(error);
    });
};

const removeMessage = async (id) => {
  allBlogs = await fetch(`https://jmukakalisa.onrender.com/api/queries/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert(data.message);
      window.location = "";
    })
    .catch((error) => {
      alert("Problem deleting the Query");
      console.log(error);
    });
};
