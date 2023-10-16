import { HiMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  return (
    <div className="shadow-sm shadow-slate-300 dark:shadow-none relative  hidden h-10 items-center overflow-hidden rounded-lg bg-gray-100 focus-within:shadow-md md:flex dark-gray-700 hover:dark:outline hover:dark:outline-1  dark:transition-all ">
      <div className="grid h-full w-12 place-items-center text-gray-500 dark:bg-gray-700 dark:border-4 dark:border-gray-700 ">
        <HiMagnifyingGlass className="font-bold " />
      </div>

      <input
        className="peer bg-gray-100 h-full w-full pr-2 text-sm text-gray-700 outline-none  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-4 dark:border-gray-700 "
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
