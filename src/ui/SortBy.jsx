/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";

function SortBy({ filterField, options }) {
  // the filterField is the URL-searchParam-key
  // the options is an array of obj that has a value for search and a lable like { value: "no-discount", label: "No discount" }
  const [searchParams, setSearchParams] = useSearchParams(); // useSearchParams in a hook for reading and writing search-parametrs(like value or data) in the url with out using global-states

  function handleClick(value) {// we store the value in the URL by the name of filterField
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="bg-white shadow-sm rounded-lg p-5 dark:bg-gray-800">
      {options.map((options) => (
        <div key={options.value} className="flex items-center p-2 ">
          <input
            className="h-4 w-4  rounded-full border-none checked:bg-blue-800 checked:text-blue-400 "
            type="radio"
            id={options.label}
            name="default-radio"
            onClick={() => handleClick(options.value)}
          />
          <label
            htmlFor={options.label}
            className="text-md ml-2 font-medium text-gray-900 dark:text-gray-300"
          >
            {options.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default SortBy;
