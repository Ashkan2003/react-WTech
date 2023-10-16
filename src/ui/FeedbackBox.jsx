/* eslint-disable react/prop-types */
import { useDarkMode } from "../context/DarkModeContext";
import StarRating from "./StarRating";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
function FeedbackBox({
  feedbackImg,
  feedbackRating,
  feedbackWriter,
  feedbackDes,
}) {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="grid grid-cols-1 space-y-3 rounded-lg  bg-white px-6 py-4 text-center shadow-lg dark:bg-gray-900">
      <div className="flex justify-center">
        <img src={feedbackImg} className="h-20 w-20 rounded-full" alt="" />
      </div>

      <p>
        <RiDoubleQuotesL className="inline-block text-2xl" />
        <span className="dark:text-gray-300">{feedbackDes}</span>
        <RiDoubleQuotesR className="inline-block text-2xl" />
      </p>

      <div className="grid  justify-center">
        <StarRating
          readOnly="true"
          width="25"
          defaultState={feedbackRating}
          fillColor={isDarkMode ? "yellow" : "#c5e41a"}
          emptyColor={isDarkMode || "white"}
          stroke={isDarkMode ? "yellow" : "#c5e41a"}
        />
        <p>{feedbackWriter}</p>
      </div>
    </div>
  );
}

export default FeedbackBox;
