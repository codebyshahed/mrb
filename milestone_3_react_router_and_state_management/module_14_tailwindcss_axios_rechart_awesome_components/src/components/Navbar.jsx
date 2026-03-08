import { useState } from "react";
import { navData } from "../constants";
import { CircleX, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-100 border border-gray-300 w-full">
      <nav className="max-w-285 mx-auto py-1 px-4">
        <div className="lg:hidden">
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <CircleX /> : <Menu />}
          </button>

          <ul className="">
            {navData.map((item) => (
              <li key={item.id}>
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="hidden lg:flex items-center gap-x-8">
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
