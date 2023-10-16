/* eslint-disable no-unused-vars */
import {
  FaCalendarWeek,
  FaChartLine,
  FaRegClock,
  FaStar,
  FaTable,
  FaUserGraduate,
} from "react-icons/fa";
import { useCourse } from "../features/courses/useCourse";
import { useProfile } from "../features/profiles/useProfile";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import { formatCurrency } from "../utils/helpers";
import CourseDetailsBox from "../ui/CourseDetailsBox";
import { HiShieldCheck } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function CourseDetails() {
  const { isLoadingProfile, userProfile } = useProfile();
  const { isLoading, course } = useCourse();
  const navigate = useNavigate(); // we use useNavigate to navigate bettven pages

  if (isLoading || isLoadingProfile) return <Spinner />;

  const value = localStorage.getItem("coursesInCart"); // get the value by its key(coursesInCart)
  const coursesIdInCart = value ? JSON.parse(value) : []; // if the value exixst then parse it and save it but if value dont exixts save an empty array []

  const userSupabaseCoursesId =
    userProfile.userSupabaseCourses === null
      ? []
      : userProfile.userSupabaseCourses; // if the userProfile.userSupabaseCourses was null(it means that the user did not bought any courses yet) then set it to empty

  const isCourseBought = userSupabaseCoursesId.includes(course.id); //we want to know if the user bought this course previosly so disable the buyCourse-btn// for example [1,3,5,11].includes(5) => true

  function handleClick() {
    // when the user clickes on this btn, then add this courseId to the coursesIdInCart in LoacalSorage ,then navigate to shopping cart
    localStorage.setItem(
      "coursesInCart",
      JSON.stringify([...coursesIdInCart, course.id]),
    );
    navigate(`/shoppingCart`);
  }

  return (
    <div className="bg-gray-100 from-indigo-950 to-gray-900 py-28 dark:bg-gradient-to-tr dark:text-white ">
      <div className="mx-8  sm:mx-20  ">
        <section className="grid grid-cols-1 items-center gap-5 space-y-8 text-center lg:grid-cols-2 lg:text-left">
          <div className="flex max-h-96  justify-center">
            <img
              src={course.courseImg}
              className="rounded-2xl border-4 border-indigo-700 shadow-xl"
            />
          </div>
          <div className="grid justify-between gap-6">
            <h1 className="text-4xl font-bold">{course.courseTitle}</h1>
            <p className="text-lg dark:text-gray-400 sm:text-2xl ">
              {course.courseDes}
              {course.courseFullDes}
            </p>

            <div className="flex items-center justify-between">
              <p className="text-4xl text-green-600">
                {formatCurrency(course.price)}
              </p>
              <Button
                onClick={handleClick}
                type="tertiary"
                disabled={isCourseBought}
              >
                {!isCourseBought ? "Buy course" : "Course already bought"}
              </Button>
            </div>
          </div>
        </section>
        <hr className="my-5 dark:border-indigo-600" />
        <section className="flex flex-wrap items-start gap-5 xl:flex-nowrap">
          <div className="order-1 w-full space-y-6">
            <div className="grid grid-cols-1 grid-rows-2 gap-2.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {/*course ditals box */}
              <CourseDetailsBox
                lableIcon={<FaRegClock />}
                lableIconColor="text-indigo-600"
                lableIconSize="text-5xl"
                lableTitle="Course time"
                lableDes={`${course.courseHour}h 00m`}
                lableColor="bg-white"
                lableDarkColor="dark:bg-gray-800"
              />
              <CourseDetailsBox
                lableIcon={<FaTable />}
                lableIconColor="text-green-600"
                lableIconSize="text-5xl"
                lableTitle="Course lecture"
                lableDes={`${course.courseLecture} lecture`}
                lableColor="bg-white"
                lableDarkColor="dark:bg-gray-800"
              />
              <CourseDetailsBox
                lableIcon={<HiShieldCheck />}
                lableIconColor="text-yellow-500"
                lableIconSize="text-6xl"
                lableTitle="Course support"
                lableDes={course.courseSupport}
                lableColor="bg-white"
                lableDarkColor="dark:bg-gray-800"
              />
              <CourseDetailsBox
                lableIcon={<FaCalendarWeek />}
                lableIconColor="text-blue-800"
                lableIconSize="text-5xl"
                lableTitle="Last update"
                lableDes={course.lastUpdate}
                lableColor="bg-white"
                lableDarkColor="dark:bg-gray-800"
              />
              <CourseDetailsBox
                lableIcon={<FaChartLine />}
                lableIconColor="text-stone-500"
                lableIconSize="text-5xl"
                lableTitle="Course state"
                lableDes={course.courseState}
                lableColor="bg-white"
                lableDarkColor="dark:bg-gray-800"
              />
            </div>
            <div className="rounded-lg bg-white p-8 dark:bg-gray-800">
              <p className="text-2xl leading-10 dark:text-gray-300">
                {course.megaDes}
              </p>
            </div>
          </div>
          <aside className=" top-5 w-full shrink-0 space-y-5 xl:sticky  xl:w-96">
            <div className="space-y-5 rounded-lg bg-white p-6 dark:bg-gray-800">
              <div className="flex flex-wrap justify-evenly">
                <CourseDetailsBox
                  lableIcon={<FaStar />}
                  lableIconColor="text-yellow-400"
                  lableIconSize="text-5xl"
                  lableTitle="Rating"
                  lableDes={`${course.courseRating}.0`}
                  lableColor="bg-white"
                  lableDarkColor="dark:bg-gray-800"
                />
                <CourseDetailsBox
                  lableIcon={<FaUserGraduate />}
                  lableIconColor="text-indigo-600"
                  lableIconSize="text-5xl"
                  lableTitle="Students"
                  lableDes={course.courseStudents}
                  lableColor="bg-white"
                  lableDarkColor="dark:bg-gray-800"
                />
              </div>
              {/* progress bar */}
              <div>
                <div className="mb-1 flex justify-between">
                  <span className="text-base font-medium text-blue-700 dark:text-white">
                    Course progress state :
                  </span>
                  <span className="text-sm font-medium text-blue-700 dark:text-white">
                    {(course.courseState === "not-started" && "10") ||
                      (course.courseState === "in-progress" && "50") ||
                      (course.courseState === "finished" && "100")}
                    %
                  </span>
                </div>
                <div className="mb-5 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-600">
                  <div
                    className="h-4 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                    style={{
                      width: `${
                        (course.courseState === "not-started" && "10%") ||
                        (course.courseState === "in-progress" && "50%") ||
                        (course.courseState === "finished" && "100%")
                      }`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            {/* course teacher info */}
            <div className="grid grid-cols-1 space-y-3 rounded-lg bg-white p-6 text-center dark:bg-gray-800 ">
              <div className="flex justify-center">
                <img
                  src={course.courseTeacherImg}
                  className="h-24 w-24 rounded-full "
                  alt=""
                />
              </div>
              <div className="px-4 ">
                <p className="text-2xl">{course.teacherName}</p>
                <p className="text-xl dark:text-gray-300">
                  {course.teacherRezome}
                </p>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default CourseDetails;
