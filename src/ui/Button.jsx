/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick, className }) {
  const base = "disabled:cursor-not-allowed ";

  const styles = {
    primary:
      base +
      " rounded-md border-2 border-blue-600  bg-blue-600 px-5 py-2 font-semibold text-white transition-all  hover:bg-indigo-600 ",
    secondary:
      base +
      "rounded-md border-2 border-gray-400 bg-transparent px-4 py-2 font-semibold text-gray-400 transition-all hover:border-transparent hover:bg-gray-500 hover:text-white ",
    tertiary:
      base +
      "rounded-md border-2 border-green-600  bg-green-600   sm:px-6 px-2 py-3 font-semibold text-white transition-all  hover:bg-green-800 disabled:hover:bg-green-600",
  };

  

  if (to) {
    // if the user give the "to" proprty a value(to esists) then return a Link inisted of a button becuse we want to navigat with Link by "to"
    return (
      <Link to={to} className={`${styles[type]} ${className}`}  disabled={disabled}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button disabled={disabled} className={`${styles[type]} ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={`${styles[type]} ${className}`} >
      {children}
    </button>
  );
}

export default Button;
