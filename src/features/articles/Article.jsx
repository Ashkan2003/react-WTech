/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";
import { FaRegClock, FaTable } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import { GoBookmark } from "react-icons/go";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

function Article({
  articleTitle,
  articleStack,
  articleLevel,
  articleRating,
  articleRatingNum,
  articleReaders,
  articleReadTime,
  articleWriter,
  articleImg,
  articleLecture,
  articleWriterImg,
}) {
  const { isDarkMode } = useDarkMode();

  return (
    <div className=" rounded-lg bg-white shadow-lg dark:bg-[rgb(16,24,32)]">
      <img src={articleImg} className="rounded-t-lg" />
      <div className="grid h-[310px]  content-between  p-5 pt-1 ">
        <div className=" space-y-3 pt-3">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex space-x-2">
              <Badge type="quaternary">{articleStack}</Badge>

              {articleLevel === "medium" && (
                <Badge type="primary">Medium</Badge>
              )}
              {articleLevel === "beginner" && (
                <Badge type="secondary">Biginner</Badge>
              )}
              {articleLevel === "advanced" && (
                <Badge type="tertiary">Advanced</Badge>
              )}
            </div>
            <div>
              <GoBookmark className="text-xl" />
            </div>
          </div>

          <Link
            to="/courseDetails"
            className="text-xl font-semibold transition-all duration-200 hover:text-blue-700 dark:text-slate-100 hover:dark:text-blue-600 sm:text-2xl"
          >
            {articleTitle}
          </Link>

          <div className="flex items-center justify-between">
            <div className="flex items-center  space-x-1">
              <span className="text-xl font-semibold">{articleRating}.0</span>
              <AiTwotoneStar className="mb-1 text-2xl text-yellow-400" />
              <span>({articleRatingNum})</span>
            </div>
            <div className="pt-1">{articleReaders} (readers)</div>
          </div>

          <div className="flex space-x-4 ">
            <div className="flex items-center space-x-1">
              <FaRegClock className="mb-1 text-red-500" />
              <span>{articleReadTime}m 00s</span>
            </div>

            <div className="flex  items-center space-x-1">
              <FaTable className="mb-1 text-green-500" />
              <span>{articleLecture} lectures</span>
            </div>
          </div>
        </div>

        <hr className="my-2 border-gray-200 dark:border-gray-700 "></hr>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={articleWriterImg} className="h-14 w-14 rounded-lg" />
            <span className="text-xl">{articleWriter}</span>
          </div>
          <div>
            <Button type="secondary">read more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
