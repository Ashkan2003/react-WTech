import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

function FooterLogo() {

  const { isDarkMode } = useDarkMode(); // this is a context Api

  return (
    <div className="flex">
      <Link
        to="/main"
        className="-m-1.5 flex items-center justify-center space-x-1 p-1.5 hover:last:text-blue-700 dark:text-white hover:dark:text-blue-700"
      >
        <img
          className="h-14 w-16 rounded-lg"
          src={isDarkMode ? "/brand-logo-darkMode.png" : "/brand-logo.png"}
          alt="brand-logo.png"
        />
        <span className="text-5xl font-bold">
          <span className="text-red-700 ">W</span>
          <span className="">Tech</span>
        </span>
      </Link>
    </div>
  );
}

export default FooterLogo;
