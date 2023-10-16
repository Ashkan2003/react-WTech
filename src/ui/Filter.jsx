/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// this is a reuseble-component for creating filter-Buttons
import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  // the filterField is the URL-searchParam-key
  // the options is an array of obj that has a value for search and a lable like { value: "no-discount", label: "No discount" }
  const [searchParams, setSearchParams] = useSearchParams(); // useSearchParams in a hook for reading and writing search-parametrs(like value or data) in the url with out using global-states
  const currentFilter = searchParams.get(filterField) || options.at(0).value; //get the current-selected-btn// if the searchParams.get(filterField) was null then run the first option given by the user (options.at(0).value)

  function handleClick(value) {
    // we store the value in the URL by the name of filterField
    searchParams.set(filterField, value);

    setSearchParams(searchParams);
  }

  return (
    <div className="flex flex-wrap justify-between rounded-lg bg-white p-[18px] shadow-sm dark:bg-gray-800">
      {options.map(
        // loop trogh the options Array and create the FilterButton
        (option) => (
          <button
            className={`rounded-xl px-3 py-2 font-semibold  transition-colors   disabled:cursor-not-allowed hover:bg-blue-400 hover:dark:bg-indigo-800 ${
              option.value === currentFilter ? "border-2 border-blue-500 " : ""
            }`}
            key={option.value}
            onClick={() => {
              handleClick(option.value);
            }}
            disabled={option.value === currentFilter}
          >
            {option.label}
          </button>
        ),
      )}
    </div>
  );
}

export default Filter;
