import { Link, NavLink } from "react-router";
import { navigation_items } from "../constants";

const Header = () => {
  return (
    <header className="w-full bg-white border border-gray-100">
      <nav className="max-w-360 mx-auto px-4 py-6 flex items-center justify-between">
        <Link className="text-neutral-900 text-3xl font-bold" to={"/"}>
          Book Vibe
        </Link>

        <ul className="flex items-center gap-x-8">
          {navigation_items.map((item) => (
            <li key={item.id}>
              <NavLink
                className={`text-neutral-900 text-lg font-normal`}
                to={item.path}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-x-4">
          <button className="px-7 py-4.5 text-white text-lg font-semibold bg-green-600 rounded-lg hover:bg-green-700">
            Sign In
          </button>
          <button className="px-7 py-4.5 text-white text-lg font-semibold bg-teal-300 hover:bg-teal-400 rounded-lg">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
