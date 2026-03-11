import "./Header.css";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <h1>This is header</h1>

      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/mobiles"}>Phones</NavLink>
        <NavLink to={"/laptops"}>Laptops</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/posts/all"}>Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
