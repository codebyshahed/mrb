import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import Mobiles from "./components/Mobiles.jsx";
import Laptop from "./components/Laptop.jsx";
import Users from "./components/Users.jsx";
import Posts from "./components/Posts.jsx";
import UserDetails from "./components/UserDetails.jsx";

const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json(),
);

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
        path: "/mobiles",
        Component: Mobiles,
      },
      {
        path: "laptops",
        Component: Laptop,
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "posts/all",
        element: (
          <Suspense fallback={<span>Loading...</span>}>
            <Posts postsPromise={postsPromise} />
          </Suspense>
        ),
      },
      {
        path: "users/users/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/1`),
        Component: UserDetails,
      },
    ],
  },
  {
    path: "about",
    element: (
      <div className="">
        <h1>About me</h1>
      </div>
    ),
  },
  {
    path: "blogs",
    element: (
      <div className="">
        <h1>Amr Blog</h1>
      </div>
    ),
  },
  {
    path: "app",
    Component: App,
  },
  {
    path: "/app2",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
