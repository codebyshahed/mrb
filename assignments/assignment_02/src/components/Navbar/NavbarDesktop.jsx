import { navItems } from "../../constants";
import { Plus } from "lucide-react";
import NavbarMobile from "./NavbarMobile";

const NavbarDesktop = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="max-w-360 mx-auto p-4 md:px-4 md:py-6.5 flex items-center justify-between">
        <div className="">
          <a
            className="text-slate-900 text-base sm:text-2xl font-normal sm:font-bold"
            href="/"
          >
            CS - Ticket System
          </a>
        </div>

        <div className="flex items-center gap-x-8">
          <ul className="hidden lg:flex items-center gap-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  className="text-black/90 text-base font-normal"
                  href={item.href}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* new button */}
          <div className="flex items-center gap-x-2">
            <button className="flex items-center gap-x-2.5 text-white text-base font-semibold py-2 sm:py-3 px-2.5 sm:px-4 bg-linear-to-br from-violet-700 to-purple-500 rounded">
              <Plus size={16} />
              <span className="hidden sm:inline-flex">New Ticket</span>
            </button>

            <NavbarMobile />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarDesktop;
