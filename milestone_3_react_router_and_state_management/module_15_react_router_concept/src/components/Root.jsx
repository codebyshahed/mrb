import Footer from "./Footer";
// import Header from "./Header";
import { NavLink, Outlet, useNavigation } from "react-router";
import Sidebar from "./Sidebar";
// import "./Root.css";
import Header from "./recap/Header";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div>
      <Header />
      {isNavigating && <span>Loading...</span>}
      <Outlet />
    </div>
  );
};

export default Root;
