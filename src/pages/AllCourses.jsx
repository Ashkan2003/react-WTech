/* eslint-disable no-unused-vars */
import Course from "../ui/Course";
import Spinner from "../ui/Spinner";
import CoursesSearchBar from "../ui/CoursesSearchBar";
import CoursesFilter from "../features/courses/CoursesFilter";
import useFilteredCourses from "../features/courses/useFilteredCourses";
import CoursesSortBy from "../features/courses/CoursesSortBy";
import { useState } from "react";
import Button from "../ui/Button";

function AllCourses() {
  // filteredCourses : the courses that have been filtere or sorted by the uses
  // searchedCourses : the courses that have been searched from the searchbar by the uses
  // showedCourses : if the inputQuery is "" that means that user dont want to search so we put filteredCourses to showToUseses but if the inputQuery was nut "" so the user want to search a course so we put the searchedCourses to the showToUsesCourses

  const { isLoading, filteredCourses } = useFilteredCourses();
  const [inputQuery, setInputQuery] = useState("");

  // our search mecanism work only with the course full name writed by the users
  const searchedCourses = filteredCourses?.filter(
    (course) => course.courseName.toLowerCase() === inputQuery.toLowerCase(),
  ); //we loop thriog the courses-arrray and equel the courses-name with the inputQuery and return a array

  const showToUsersCourses =
    inputQuery === "" ? filteredCourses : searchedCourses;

  return (
    <div className="relative space-y-3 bg-gray-100 from-indigo-950 to-gray-900 py-28 dark:bg-gradient-to-tr dark:text-white">
      <div className="absolute top-8 left-11">
        <Button type="secondary" to="/main">
          &larr; Go back
        </Button>
      </div>
      <div className="mx-8 space-y-8 sm:mx-10">
        {/* Allcourse title */}
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold sm:text-5xl">All Courses</h1>
          <p className="text-xl text-stone-500 dark:text-gray-400 sm:text-2xl">
            Choose from hundreds of courses from specialist organizations
          </p>
        </div>
        {/* Allcourses */}
        <div className="sm:mt-25 mt-9 grid grid-rows-1 items-start gap-3.5 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {/* sidebar */}
          <aside className="top-5 space-y-5 lg:sticky">
            {/* search bar */}
            <CoursesSearchBar
              inputQuery={inputQuery}
              setInputQuery={setInputQuery}
            />
            {/* sort bar */}
            <CoursesSortBy />
          </aside>
          {/* main content */}
          <div className="order-1 col-span-1 lg:order-2 lg:col-span-2 xl:col-span-3">
            {/* course filter  */}
            <CoursesFilter />
            {/* courses list */}
            {isLoading ? (
              <Spinner />
            ) : (
              <div className="mt-5 grid grid-cols-1 gap-7 sm:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3  ">
                {showToUsersCourses.map((course) => (
                  <Course
                    id={course.id}
                    courseRating={course.courseRating}
                    courseTitle={course.courseTitle}
                    courseDes={course.courseDes}
                    courseImg={course.courseImg}
                    courseHour={course.courseHour}
                    courseLecture={course.courseLecture}
                    isLiked={course.isLiked}
                    courseLevel={course.courseLevel}
                    coursePrice={course.price}
                    key={course.courseName}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCourses;
