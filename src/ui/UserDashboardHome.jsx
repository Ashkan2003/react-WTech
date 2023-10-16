/* eslint-disable no-unused-vars */
import { HiOutlineBanknotes, HiOutlineBriefcase, HiTv } from "react-icons/hi2";
import UserDashboardBox from "./UserDashboardBox";
import { FaChartLine } from "react-icons/fa";
import LogOut from "../features/authentication/LogOut";
import { useProfile } from "../features/profiles/useProfile";
import { Spinner } from "react-spinners-css";
import { useCourses } from "../features/courses/useCourses";
import Badge from "./Badge";
import UserDashboardPieChart from "./UserDashboardPieChart";
import UserDashboardRadarChart from "./UserDashboardRadarChart";
import UserDashboardAreaChart from "./UserDashboardAreaChart";

function UserDashboardHome() {
  const { isLoading, courses } = useCourses(12); // get the entire courses from the supabase
  const { isLoadingProfile, userProfile } = useProfile();
  if (isLoadingProfile || isLoading) {
    return (
      <div className="relative w-full">
        <Spinner className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform" />
      </div>
    );
  }
  console.log(userProfile.userSupabaseCourses === null,"dd")

  const userSupabaseCoursesId =
    userProfile.userSupabaseCourses === null
      ? []
      : userProfile.userSupabaseCourses; // if the userProfile.userSupabaseCourses was null(it means that the user did not bought any courses yet) then set it to empty

  const userDashboardCourses = courses.filter((course) =>
    userSupabaseCoursesId.includes(course.id),
  ); //important // filter throg the all courses and select(return) only the courses which they id is in the userSupabaseCoursesId-array

  const userProfileCoursesLenght = userSupabaseCoursesId.length;

  return (
    <div className="w-full space-y-5 overflow-y-scroll bg-gray-100 p-4 dark:bg-gray-900 dark:text-white sm:p-8">
      {/* title and logout-btn */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold dark:text-white sm:text-3xl">
          User Dashboard
        </h1>
        <LogOut />
      </div>
      {/* user dashboard lables */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <UserDashboardBox
          lableIcon={<HiOutlineBanknotes />}
          lableIconColor="text-white"
          lableIconSize="text-4xl"
          lableTitle="user salary"
          lableCountPrefix="$"
          lableCount="20.00"
          lableCountDecimals={2}
          lableColor="bg-white"
          lableIconBgColor="bg-green-600"
          lableDarkColor="dark:bg-gray-800"
        />
        <UserDashboardBox
          lableIcon={<HiOutlineBriefcase />}
          lableIconColor="text-white"
          lableIconSize="text-4xl"
          lableTitle="user courses"
          lableCount={userProfileCoursesLenght}
          lableColor="bg-white"
          lableIconBgColor="bg-yellow-600"
          lableDarkColor="dark:bg-gray-800"
        />
        <UserDashboardBox
          lableIcon={<HiTv />}
          lableIconColor="text-white"
          lableIconSize="text-4xl"
          lableTitle="watched time"
          lableCount="54"
          lableCountSuffix="h 00m"
          lableColor="bg-white"
          lableIconBgColor="bg-yellow-600"
          lableDarkColor="dark:bg-gray-800"
        />
        <UserDashboardBox
          lableIcon={<FaChartLine />}
          lableIconColor="text-white"
          lableIconSize="text-4xl"
          lableTitle="user progress"
          lableCount="76"
          lableCountSuffix="%"
          lableColor="bg-white"
          lableIconBgColor="bg-blue-700"
          lableDarkColor="dark:bg-gray-800"
        />
      </div>
      {/* user dashboard table */}
      <div className="col-span-2 space-y-5">
        <h1 className="text-center text-3xl font-semibold dark:text-white lg:text-left">
          User Courses
        </h1>
        <div className="relative overflow-x-auto rounded-lg shadow-md">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-lg uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Course
                </th>
                <th scope="col" className="px-6 py-3">
                  teacher
                </th>
                <th scope="col" className="px-6 py-3">
                  time
                </th>
                <th scope="col" className="px-6 py-3">
                  state
                </th>
                <th scope="col" className="px-6 py-3">
                  support
                </th>
              </tr>
            </thead>
            <tbody>
              {userDashboardCourses.map((course) => (
                <tr
                  key={course.id}
                  className="border-b bg-gray-50 text-xl dark:border-gray-700 dark:bg-gray-800"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {course.courseName}
                  </td>
                  <td className="px-6 py-4">{course.teacherName}</td>
                  <td className="px-6 py-4">{course.courseHour}h 00m</td>
                  <td className="px-6 py-4">{course.courseState}</td>
                  <td className="px-6 py-4">
                    {course.courseSupport === "offline" && (
                      <Badge type="primary">{course.courseSupport}</Badge>
                    )}
                    {course.courseSupport === "online" && (
                      <Badge type="secondary">{course.courseSupport}</Badge>
                    )}
                    {course.courseSupport === "tel + online" && (
                      <Badge type="tertiary">{course.courseSupport}</Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* user dashboard Pie-chart and radar-chart */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <UserDashboardPieChart userDashboardCourses={userDashboardCourses} />
        <UserDashboardRadarChart />
      </div>
      {/* user dashboard area-chart */}
      <UserDashboardAreaChart/>
    </div>
  );
}

export default UserDashboardHome;
