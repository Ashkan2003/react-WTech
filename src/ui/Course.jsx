/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import StarRating from "./StarRating";
import { FaHeart, FaRegClock, FaRegHeart, FaTable } from "react-icons/fa";
import Badge from "./Badge";
import { formatCurrency } from "../utils/helpers";

function Course({
  id:courseId,
  courseTitle,
  courseDes,
  courseImg,
  courseRating,
  courseHour,
  courseLecture,
  isLiked,
  courseLevel,
  coursePrice,
}) {
  const { isDarkMode } = useDarkMode();

  return (
    <div className=" rounded-lg bg-white shadow-lg dark:bg-[#101820]">
      <img src={courseImg} className="rounded-t-lg" />
      <div className="grid h-[310px]  content-between  p-5 pt-1 ">
        <div className=" space-y-3 pt-3">
          <div className="mb-2 flex items-center justify-between">
            {courseLevel === "All level" && (
              <Badge type="primary">All level</Badge>
            )}
            {courseLevel === "Beginner" && (
              <Badge type="secondary">Biginner</Badge>
            )}
            {courseLevel === "Advanced" && (
              <Badge type="tertiary">Advanced</Badge>
            )}
            <div>
              {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
            </div>
          </div>

          <Link
            to={`/courseDetails/${courseId}`}
            className="text-2xl font-semibold transition-all duration-200 hover:text-blue-700 dark:text-slate-100 hover:dark:text-blue-600"
          >
            {courseTitle}
          </Link>

          <p className="font-semibold dark:text-gray-400">{courseDes}</p>

          <StarRating
            defaultState={courseRating}
            height={23}
            width={23}
            fillColor={isDarkMode ? "yellow" : "#c5e41a"}
            emptyColor={isDarkMode || "white"}
            stroke={isDarkMode ? "yellow" : "#c5e41a"}
            readOnly="true"
          />
        </div>

        <div className="   justify-between pt-1 align-bottom font-semibold">
          <p className="text-2xl sm:text-3xl sm:py-1 text-green-500">
            {formatCurrency(coursePrice)}
          </p>

          <hr className=" border-gray-200 dark:border-gray-700 "></hr>

          <div className="flex justify-between pt-2">
            <div className="flex items-center space-x-1">
              <FaRegClock className="text-red-500" />
              <span>{courseHour}h 00m</span>
            </div>
            <div className="flex  items-center space-x-1">
              <FaTable className="text-green-500" />
              <span>{courseLecture} lectures</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
