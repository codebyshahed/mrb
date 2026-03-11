import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="w-full bg-white border border-gray-200">
      <nav className="max-w-285 mx-auto px-4 py-5">
        <ul className="flex items-center gap-x-8">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/posts"}>Posts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
