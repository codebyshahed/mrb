import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import "./Root.css";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="root_flex">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
