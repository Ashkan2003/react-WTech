/* eslint-disable no-unused-vars */
// npm i @headlessui/react
// npm i react-icons
// npm i @heroicons/react

import { useState } from "react";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

import Logo from "./Logo";
import Button from "./Button";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import DialogElem from "./DialogElem";
import SidebarBtn from "./SidebarBtn";
import ShopIcon from "./ShopIcon";
import DarkModeToggler from "./DarkModeToggler";
import SearchBar from "./SearchBar";
import { useUser } from "../features/authentication/useUser";
import UserIcon from "./userIcon";

const products = [
  {
    name: "Courses",
    to: "/allCourses",
    description: "See our amazing online courses ",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    to:"",
    description: "Speak directly to your customers",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    icon: ArrowPathIcon,
  },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated,isLoadingUser } = useUser();

  return (
    <header className="bg-white from-indigo-950 to-gray-900 dark:bg-gradient-to-tr dark:text-white ">
      <nav className="mx-2 flex  items-center justify-between p-6 lg:px-5">
        <Logo />

        <NavItems products={products} />

        <div className="hidden items-center space-x-3 sm:flex ">
          <SearchBar />
          <ShopIcon />
          <DarkModeToggler />
          <div className=" items-center space-x-2 lg:flex  lg:justify-end">
            {isAuthenticated || isLoadingUser ? (
              <UserIcon  />
            ) : (
              <div className="hidden lg:space-x-2  xl:flex">
                <Button to="/login" type="secondary">
                  Login
                </Button>
                <Button to="/signUp" type="primary">
                  Sign up
                </Button>
              </div>
            )}
          </div>
        </div>

        <SidebarBtn setMobileMenuOpen={setMobileMenuOpen} />
      </nav>

      <DialogElem
        products={products}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}

export default Header;
