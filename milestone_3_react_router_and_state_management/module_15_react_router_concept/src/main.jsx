import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import Mobiles from "./components/Mobiles.jsx";
import Laptop from "./components/Laptop.jsx";

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
