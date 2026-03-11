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

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
