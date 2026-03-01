import { navItems } from "../constants";
import logo from "./../assets/logo.png";
import dollar from "./../assets/dollar.png";

const Navbar = () => {
  return (
    <div className="w-full max-w-[1140px] mx-auto">
      <div className="px-4 py-4 sm:py-12 flex items-center justify-between">
        <div className="">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <ul className="flex items-center gap-x-12">
          <div className="hidden md:flex items-center gap-x-12">
            {navItems?.map((item, index) => (
              <li>
                <a
                  className="text-neutral-900/70 text-base font-normal duration-300 hover:text-neutral-900"
                  href={item.href}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </div>

          <div className="flex items-center gap-x-2.5 px-5 py-4 outline outline-neutral-900/10 rounded-xl">
            <p>
              <span>0</span> Coin
            </p>
            <img src={dollar} alt="coin" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
