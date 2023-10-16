/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

function UserIcon() {
  return (
    <Link to="/userDashboard/userDashboard/Home">
    <button  className=" relative h-10 w-10 rounded-lg bg-gray-100 p-2 shadow-sm shadow-stone-300 transition-all hover:bg-stone-300 dark:bg-gray-700 dark:text-gray-400 dark:shadow-none dark:transition-all hover:dark:text-gray-200 hover:dark:outline hover:dark:outline-1 ">
      <BsPersonCircle className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl" />
    </button>
    </Link>
  );
}

export default UserIcon;
