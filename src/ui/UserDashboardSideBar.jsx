/* eslint-disable no-unused-vars */
import { HiOutlineCog6Tooth, HiOutlineHome, } from "react-icons/hi2";
import { FaUserCog, FaUserShield } from "react-icons/fa";
import {  RiShieldKeyholeFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useProfile } from "../features/profiles/useProfile";

// the difference betveen Link and NavLink
// Link provides only navigation
// but NavLink provides navigation and also add the "active"-class so we can style it by for ezample "[&.active]:bg-gray-900"

function UserDashboardSideBar() {
  const { isLoadingProfile, userProfile } = useProfile();
  if(isLoadingProfile) return null
  const userProfileImg = userProfile.userAvatar ? userProfile.userAvatar : "/userDefualtImg.png" // if the userProfile.userAvatar was falsy-value the set a defualt img to user-img 


  const userDashbordDataBase = [
    { title: "Home", to: "userDashboard/Home", icon: HiOutlineHome },
    {
      title: "Account info",
      to: "userDashboard/AccountInfo",
      icon: FaUserCog,
    },
    {
      title: "User password",
      to: "userDashboard/UserAccountPassWord",
      icon: RiShieldKeyholeFill,
    },
  ];

  return (
    <aside className="hidden md:block h-[100vh] w-[44vh] space-y-7 bg-gray-50 px-4 py-5 dark:bg-[#18212f]">
      {/* user logo and name */}
      <div className="">
        <div className="flex justify-center">
          <img
            src={userProfileImg}
            alt="user avatar"
            className="h-20 w-20 rounded-full border-2 border-gray-500"
          />
        </div>
        <p className="text-center font-normal dark:text-gray-300 ">
          {!isLoadingProfile && userProfile.userFullName}
        </p>
      </div>
      {/* dashboard menu */}
      <div>
        <ul role="list" className=" flex flex-col gap-1">
          {userDashbordDataBase.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.to}
                className="group flex items-center space-x-2 rounded-lg px-5 py-2 transition-all duration-300 hover:dark:bg-gray-900 hover:bg-gray-200  [&.active]:dark:bg-gray-900 [&.active]:bg-gray-100  [&.active_span]:dark:!text-white [&.active_span]:!text-black  [&.active_svg]:!text-indigo-600"
              >
                <item.icon className="text-2xl  group-hover:text-indigo-600 text-gray-500 group-focus:text-indigo-600 dark:text-gray-500 " />
                <span className="text-lg group-hover:dark:text-white group-focus:text-white  dark:text-gray-300">
                  {item.title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default UserDashboardSideBar;
