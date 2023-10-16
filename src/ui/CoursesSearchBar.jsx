/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

function CoursesSearchBar({inputQuery,setInputQuery}) {

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputQuery) return;
    setInputQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative   flex h-20 items-center overflow-hidden rounded-xl bg-white shadow-sm focus-within:border focus-within:shadow-md dark:transition-all  hover:dark:outline hover:dark:outline-1  ">
        <div className="grid h-full w-12 place-items-center text-lg text-gray-500 dark:border-4 dark:border-gray-800 dark:bg-gray-800">
          <HiMagnifyingGlass className="font-bold " />
        </div>
        <input
          className="h-full w-full pr-2 text-sm text-gray-700 outline-none  placeholder:text-lg dark:border-4 dark:border-gray-800 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          type="text"
          placeholder="what do you want to learn..."
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        />
      </div>
    </form>
  );
}

export default CoursesSearchBar;
