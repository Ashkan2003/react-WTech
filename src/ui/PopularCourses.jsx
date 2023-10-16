/* eslint-disable no-unused-vars */
import { useCourses } from "../features/courses/useCourses";
import Button from "./Button";
import Course from "./Course";
import Spinner from "./Spinner";

function PopularCourses() {
  const { isLoading, courses } = useCourses(7); //in this component we want to show 8 course to the uses  // this is a costom hook

  return (
    <div className="mx-8 space-y-8 sm:mx-10">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">Our Popular Courses</h1>
        <p className="text-xl text-stone-500 dark:text-gray-400 sm:text-2xl">
          Choose from hundreds of courses from specialist organizations
        </p>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-7 px-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
            {courses.map((course) => (
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
          <div className="text-center">
            <Button to="/allCourses" type="secondary">
              View all
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default PopularCourses;
