import React from "react";
import { navData } from "../constants";

const Navbar = () => {
  return (
    <header className="bg-slate-100 border border-gray-300 w-full">
      <nav className="max-w-285 mx-auto py-1 px-4">
        <ul className="flex items-center gap-x-8">
          {navData.map((item) => (
            <li key={item.id}>
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
