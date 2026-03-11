import Footer from "./Footer";
// import Header from "./Header";
import { NavLink, Outlet } from "react-router";
import Sidebar from "./Sidebar";
// import "./Root.css";
import Header from "./recap/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
