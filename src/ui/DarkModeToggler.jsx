/* eslint-disable no-unused-vars */
import { useDarkMode } from "../context/DarkModeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function DarkModeToggler() {
  const { isDarkMode, toogleDarkMode } = useDarkMode();

  return (
    <button onClick={toogleDarkMode} className=" relative  h-10 w-10 rounded-lg bg-gray-100 p-2 shadow-sm shadow-stone-300 transition-all hover:bg-stone-300 dark:bg-gray-700 dark:text-gray-400 dark:shadow-none hover:dark:outline hover:dark:outline-1 hover:dark:text-gray-200 dark:transition-all ">
      {isDarkMode ? (
        <HiOutlineSun className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl" />
      ) : (
        <HiOutlineMoon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl" />
      )}
    </button>
  );
}

export default DarkModeToggler;
