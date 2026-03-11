import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root.jsx";
// import Home from "./components/Home.jsx";
import Mobiles from "./components/Mobiles.jsx";
import Laptop from "./components/Laptop.jsx";
import Users from "./components/Users.jsx";
// import Posts from "./components/Posts.jsx";
import UserDetails from "./components/UserDetails.jsx";
import Posts from "./components/recap/Posts.jsx";
import Home from "./components/recap/Home.jsx";
import PostDetails from "./components/recap/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Posts,
      },
      {
        path: "posts/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.postId}`),
        Component: PostDetails,
      },
    ],
  },

  {
    path: "*",
    element: <h1>Not Found: 404.. manger nati ja vag</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
