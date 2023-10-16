import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

function ShopIcon() {
  return (
    <Link
      to="/shoppingCart"
      className=" relative  h-10 w-10 rounded-lg bg-gray-100 p-2 shadow-sm shadow-stone-300 transition-all hover:bg-stone-300 dark:bg-gray-700 dark:text-gray-400 dark:shadow-none dark:transition-all hover:dark:text-gray-200 hover:dark:outline hover:dark:outline-1 "
    >
      <div className="absolute bottom-8 right-0 translate-x-1/2">
        <span className="a relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
        </span>
      </div>
      <TiShoppingCart className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl" />
    </Link>
  );
}

export default ShopIcon;
