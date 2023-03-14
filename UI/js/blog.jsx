
import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "redux";
import { Provider } from "react-redux";
import BlogContainer from "./blogContainer.js";

const initialState = {
  blogs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BLOGS":
      return {
        ...state,
        blogs: action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore(reducer);

const fetchBlogs = async () => {
  try {
    const response = await fetch("https://jmukakalisa.onrender.com/api/blogs", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const { data } = await response.json();
    store.dispatch({ type: "FETCH_BLOGS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("isloggedIn")) {
    const loginBtn = document.querySelector("#loginBtn");
    loginBtn.innerHTML = "Logout";
    loginBtn.href = "logout.html";
  }
  fetchBlogs();
});

ReactDOM.render(
  <Provider store={store}>
    <BlogContainer />
  </Provider>,
  document.getElementById("root")
);
