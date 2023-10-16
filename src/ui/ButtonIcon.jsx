/* eslint-disable react/prop-types */
// import { TiShoppingCart } from "react-icons/ti";

function ButtonIcon({ children }) {
  return (
    <button className="relative mx-2 h-9 w-9 rounded-md bg-white p-2 shadow-lg shadow-stone-200 transition-all duration-200 hover:bg-slate-100 dark:bg-slate-300 dark:shadow-none hover:dark:bg-violet-400 ">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl">
        {children}
      </div>
    </button>
  );
}

export default ButtonIcon;
