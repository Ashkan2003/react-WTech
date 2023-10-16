/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useCourses } from "../features/courses/useCourses";
import EmptyShoppingCart from "../ui/EmptyShoppingCart";
import ShoppingCartItem from "../ui/ShoppingCartItem";
import Spinner from "../ui/Spinner";
import { formatCurrency } from "../utils/helpers";
import useUpdateProfileCourses from "../features/profiles/useUpdateProfileCourses";
import { useUser } from "../features/authentication/useUser";
import { useProfile } from "../features/profiles/useProfile";

function ShoppingCart() {
  const { user } = useUser();
  const userId = user.id;
  const currentDate = new Date().toJSON().slice(0, 10); // we get the current date
  const { isLoading, courses } = useCourses(12); // get the entire courses from the supabase
  const { isLoadingProfile, userProfile } = useProfile();
  const { isLoadingUpdatingProfileCourses, updateProfileCourse } =
    useUpdateProfileCourses();

  const coursesIdInLoacalStorage = JSON.parse(
    localStorage.getItem("coursesInCart"),
  ); // get the coursesId that the user wants  from localStorage

  const [coursesIdInCart, setCoursesIdInCart] = useState(
    coursesIdInLoacalStorage || [], // if the coursesIdInLocalStorage was null(fulsy value) then return a empty array[]
  ); //for re-rendering the ui when the course in deleted or fetched from the local storage we use the useState hook// coursesIdInCart is an array of ids of the courses which the user selected to buy and we stored it in the localStorage

  localStorage.setItem("coursesInCart", JSON.stringify(coursesIdInCart)); // for re-rendering riosins we stored the coursesIdInCart in the local storage

  if (isLoading || isLoadingProfile || isLoadingUpdatingProfileCourses)
    return <Spinner />;
  if (coursesIdInCart === null) return <EmptyShoppingCart />; // if the coursesIdInCart was null it means that the user does not added any courses in its shop cart

  const currentCoursesIdInSupabase =
    userProfile.userSupabaseCourses === null
      ? []
      : userProfile.userSupabaseCourses; // get the current coursesId-array from supabase

  const userShopCourses = courses.filter((course) =>
    coursesIdInCart.includes(course.id),
  ); //important // filter throg the all courses and select(return) only the courses which they id is in the coursesIdCart-array

  const totalCoursesPrice = userShopCourses.reduce(
    // we use the reduce-method to calc the total price of the userShopCourses
    (acc, cur) => acc + cur.price,
    0,
  );

  function selfDeleteCourse(courseId) {
    // this function is for self deleting the course by the user
    setCoursesIdInCart((coursesIdInCart) =>
      coursesIdInCart.filter((id) => id !== courseId),
    );
  }

  function handleClick() {
    updateProfileCourse({
      userId, //userId(the current user that it is in the site and logged in)
      currentCoursesIdInSupabase, // the coursesId that the user has boughted previosly and there are in his dashboard
      coursesIdInCart, //the new Courses-id that the user want to buy and they are in his shopping cart//coursesIdInCart(to send this array to the supabase)
    });
    localStorage.setItem("coursesInCart", JSON.stringify([])); // when the user click on this btn then set the coursesInCart to empty [].it means that the user bought these courses and there are in his userDashboard
    setCoursesIdInCart([]); // when the user click on this btn then set the setCoursesIdInCart to empty [].it means that the user bought these courses and there are in his userDashboard
  }

  return (
    <div className=" bg-gray-100 from-indigo-950 to-gray-900 py-10  dark:bg-gradient-to-tr dark:text-white">
      <div className="mx-8 grid grid-cols-1 gap-y-7 lg:grid-cols-3 lg:gap-10">
        {/* shopping table start */}
        <div className="col-span-2 space-y-5">
          <h1 className="text-center text-4xl lg:text-left">Shopping Cart</h1>
          <div className="relative overflow-x-auto rounded-lg shadow-md">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xl uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Course name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    teacher
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {userShopCourses.map((course) => (
                  <ShoppingCartItem
                    courseName={course.courseName}
                    coursePrice={course.price}
                    teacherName={course.teacherName}
                    courseId={course.id}
                    selfDeleteCourse={selfDeleteCourse}
                    key={course.id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* order summary start */}
        <div className="space-y-5 ">
          <h1 className="text-center text-4xl lg:text-left">Order Summary</h1>
          <div className="space-y-5 rounded-md bg-white p-5 shadow-lg dark:bg-gray-800">
            <p className="text-xl font-semibold">
              Order by : <span className="text-gray-400">Ashkan</span>{" "}
            </p>
            <p className="text-xl font-semibold">
              Order date : <span className="text-gray-400">{currentDate}</span>{" "}
            </p>
            <p className="text-xl font-semibold ">
              Items :{" "}
              <span className="text-gray-400">{userShopCourses.length}</span>
            </p>
            <p className="text-xl font-semibold ">
              Total Price :{" "}
              <span className="text-gray-400">
                {formatCurrency(totalCoursesPrice)}
              </span>
            </p>
            <hr className="border-indigo-600" />
            <div className="text-center">
              <button
                onClick={handleClick}
                className="w-full rounded-md border-2 border-blue-600 bg-blue-600  py-2 font-semibold text-white transition-all hover:bg-indigo-600 disabled:cursor-not-allowed  disabled:hover:bg-blue-600 "
                disabled={!userShopCourses.length}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
