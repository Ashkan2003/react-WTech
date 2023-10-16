/* eslint-disable react/prop-types */
import { Bars3Icon } from "@heroicons/react/24/outline";

function SidebarBtn({ setMobileMenuOpen }) {
  return (
    <div className="flex lg:hidden rounded-lg bg-gray-100 p-2 mx-2 shadow-sm shadow-stone-300 hover:bg-stone-300 transition-all ">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2 text-gray-700  dark:bg-gray-700 dark:text-gray-400 dark:shadow-none hover:dark:outline hover:dark:outline-1 hover:dark:text-gray-200 dark:transition-all "
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </div>
  );
}

export default SidebarBtn;
