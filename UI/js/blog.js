let blogContainer = document.querySelector(".blog-container");

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("isloggedIn")) {
    let loginBtn = document.querySelector("#loginBtn");
    loginBtn.innerHTML = "Logout";
    loginBtn.href = "logout.html";
  }
  fetchBlogs();
});

const parseHtml = (html, id) => {
  let parser = new DOMParser();
  let doc = parser.parseFromString(html, "text/html").querySelector(`${id}`);
  return doc.innerHTML;
};
const fetchBlogs = async () => {
  try {
    const blogs = await fetch("https://jmukakalisa.onrender.com/api/blogs", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let blogsData = await blogs.json();
    blogsData.data.forEach((blog) => {
      let { image, title, content, createdAt, _id } = blog;
      console.log(blog);
      let blogHtml = `<div class="blog-box">
		<div class="blog-img">
		  <img src= '${image}'/>
		</div>

		<div class="blog-text">
		  <span>${createdAt}</span>
		  <a href="" class="blog-title"
			>${title}</a
		  >
		  <p>
			${content}
		  </p>
		  <!-- <a href="#"><i class="fa-solid fa-heart"></i></a> -->
		  <a href="blog-summary.html"><i class="fa-solid fa-comments"></i></a>
		  <!-- <a href="#"><i class="fa-solid fa-pen-to-square"></i></a> -->
		  <!-- <p>Delete Comment</p> -->
		  <a href="blog-summary.html?id=${_id}">Read More</a>
		</div>
	  </div>`;
      let parser = new DOMParser();
      let doc = parser
        .parseFromString(blogHtml, "text/html")
        .querySelector(`.blog-box`);
      blogContainer.appendChild(doc);
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchSingleBlog = async () => {
  console.log(window.location?.search.slice(1));
  try {
    const blogs = await fetch("https://jmukakalisa.onrender.com/api/blogs", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let blogsData = await blogs.json();
    blogsData.data.forEach((blog) => {
      let { image, title, content, createdAt } = blog;
      console.log(blog);
      let blogHtml = `<div class="blog-summ-box">
	  <div class="blog-summ-img">
		<img src=${image} />
	  </div>

	  <div class="blog-summ-text">
		<span>June 18, 2022/ Nano Technology</span>
		<a href="" class="blog-title"
		  >${title}
		>
		<p>
           ${content}
		</p>
		<!-- <a href="#"><i class="fa-solid fa-heart"></i></a> -->
		<a href="#"><i class="fa-solid fa-comments"></i></a>
	  </div>
	</div>`;
      let parser = new DOMParser();
      let doc = parser
        .parseFromString(blogHtml, "text/html")
        .querySelector(`.blog-summ-box`);
      document.querySelector(".blog-summ-container").appendChild(doc);
    });
  } catch (error) {
    console.log(error);
  }
};
