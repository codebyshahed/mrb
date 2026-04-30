import { SlidersHorizontal, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { navItems } from "../../constants";

const NavbarMobile = () => {
  let [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={handleToggleMenu}
        className="lg:hidden py-2 sm:py-3.5 px-2.5 sm:px-4 bg-gray-200 border border-gray-400/20 rounded-sm"
      >
        <SlidersHorizontal size={16} className="text-zinc-600" />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 lg:hidden"
      >
        <div className="fixed inset-0 w-screen flex items-center justify-center p-4 bg-black/85">
          <DialogPanel
            transition
            className="w-[94%] space-y-4 p-6 border border-gray-100/20 rounded-md absolute top-0 m-4 bg-black text-white duration-200 ease-out data-closed:transform-[scale(97%)] data-closed:opacity-0"
          >
            <div className="flex items-center justify-between gap-x-4">
              <h3 className="text-xl font-normal">Menus</h3>
              <button
                className="py-2 px-2.5 bg-red-700/10 rounded"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} className="text-red-500 font-bold" />
              </button>
            </div>

            <div className="">
              <ul className="flex flex-col gap-y-5 pt-5">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-white/60 text-base font-normal relative group flex items-center gap-x-2 hover:text-indigo-500"
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="size-2.5 border border-white/80 rounded-full inline-flex group-hover:border-indigo-500"></span>
                      {item.title}
                      <span className="w-full h-px absolute left-0 -bottom-1 bg-white/20"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default NavbarMobile;
