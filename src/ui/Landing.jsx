import { HiCheckBadge } from "react-icons/hi2";
import Button from "./Button";
import Lable from "./Lable";
import { HiOutlineTv } from "react-icons/hi2";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import { Link as ReactScrollLink } from "react-scroll";
import { useUser } from "../features/authentication/useUser";

function Landing() {
  const { isAuthenticated, isLoadingUser } = useUser();

  return (
    <div className="mx-8 space-y-20 pt-[20vh] sm:mx-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 ">
        {/* landing title and btns */}
        <div className="space-y-10  pt-10 text-center xl:text-left">
          <h1 className="text-4xl font-bold sm:text-6xl">
            Learn and Teach in <span className="text-red-700">W</span>
            <span className="text-blue-700">Tech</span>
          </h1>
          <h2 className="text-2xl font-light dark:text-gray-300 ">
            Online learning and teaching marketplace with 5K+ courses & 10M
            students. Taught by experts to help you acquire new skills.
          </h2>
          <div className="">
            <ul className="flex flex-wrap  justify-center space-x-3 dark:text-gray-400 xl:justify-start">
              <li className="flex items-center">
                <HiCheckBadge className="me-1 text-xl"></HiCheckBadge>
                <span className="text-lg">Learn with experts</span>
              </li>
              <li className="flex items-center">
                <HiCheckBadge className="me-1 text-xl"></HiCheckBadge>
                <span className="text-lg  ">Get certificate</span>
              </li>
              <li className="flex items-center">
                <HiCheckBadge className="me-1 text-xl"></HiCheckBadge>
                <span className="text-lg">Get membership</span>
              </li>
            </ul>
          </div>
          <div className="space-x-4">
            {isAuthenticated || isLoadingUser ? (
              <Button type="primary" to="/allCourses">
                All Courses
              </Button>
            ) : (
              <Button to="/signUp" type="primary">
                Sign up
              </Button>
            )}
            <Button type="secondary">
              <ReactScrollLink
                style={{ cursor: "pointer" }}
                smooth={true} // animation scroll to the target
                duration={1000} // the duration of scroll
                delay={100} // the wait time for scroll
                to="react-scroll-siteExplanation"
              >
                Read More
              </ReactScrollLink>
            </Button>
            {/* lllll */}
          </div>
        </div>
        {/* landing imgs */}
        <div className="relative flex items-center justify-center">
          <img className="h-auto max-w-full" src="/t.png" alt="landing-img" />
          <figure className="absolute left-0 top-1/2 translate-x-1/2  rounded-xl bg-white p-2 shadow-xl dark:bg-gray-300">
            <img src="/reactMiniLogo.svg" className="w-10" alt="icon" />
          </figure>
          <figure className="absolute right-7 top-0 -translate-x-1/2  rounded-xl bg-white p-2 shadow-xl dark:bg-gray-300">
            <img src="/jsMiniLogo.svg" className="w-10" alt="icon" />
          </figure>
          <figure className="absolute bottom-0 right-0 -translate-x-1/2 rounded-xl bg-white p-2 shadow-xl dark:bg-gray-300">
            <img src="/angularMiniLogo.svg" className="w-10" alt="icon" />
          </figure>
        </div>
      </div>
      {/* landing lables */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <Lable
          lableIcon={<HiOutlineTv />}
          lableIconColor="text-yellow-400"
          lableIconSize="text-6xl"
          lableTitle="Online Courses"
          lableCount="10"
          lableCountSuffix="K"
          lableColor="bg-yellow-100"
          lableDarkColor="dark:bg-yellow-800"
        />
        <Lable
          lableIcon={<FaUserGraduate />}
          lableIconColor="text-green-500"
          lableIconSize="text-5xl"
          lableTitle="Online Students"
          lableCount="60"
          lableCountSuffix="+"
          lableColor="bg-green-300"
          lableDarkColor="dark:bg-green-800"
        />
        <Lable
          lableIcon={<FaUserTie />}
          lableIconColor="text-gray-400"
          lableIconSize="text-5xl"
          lableTitle="Expert Tutors"
          lableCount="200"
          lableCountSuffix="+"
          lableColor="bg-gray-300"
          lableDarkColor="dark:bg-gray-700"
        />
        <Lable
          lableIcon={<HiCheckBadge />}
          lableIconColor="text-blue-400"
          lableIconSize="text-6xl"
          lableTitle="certification"
          lableCount="12"
          lableCountSuffix="+"
          lableColor="bg-blue-200"
          lableDarkColor="dark:bg-blue-800"
        />
      </div>
    </div>
  );
}

export default Landing;
