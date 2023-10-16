import Button from "./Button";
import FeedbackBox from "./FeedbackBox";

const feedbackDataBase = [
  {
    feedbackImg: "./avatar-1.jpg",
    feedbackRating: 4,
    feedbackWriter: "Martin kanony",
    feedbackDes:
      " A very amazing site.talented teachers with there awesome Courses ",
  },
  {
    feedbackImg: "./avatar-2.jpg",
    feedbackRating: 5,
    feedbackWriter: "Mak Tendy",
    feedbackDes:
      " A very amazing site.talented teachers with there awesome Courses ",
  },
  {
    feedbackImg: "./avatar-3.jpg",
    feedbackRating: 3,
    feedbackWriter: "hamed Ortiz",
    feedbackDes:
      " A very amazing site.talented teachers with there awesome Courses ",
  },
  {
    feedbackImg: "./avatar-4.jpg",
    feedbackRating: 4,
    feedbackWriter: "Sam Jordan",
    feedbackDes:
      " A very amazing site.talented teachers with there awesome Courses ",
  },
];

function Feedback() {
  return (
    <div className="grid grid-cols-1 items-center gap-7 bg-gray-300 p-11  dark:bg-gradient-to-tr dark:text-white xl:grid-cols-2">
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 order-1 xl:order-none">
        {feedbackDataBase.map((feedback, index) => (
          <FeedbackBox
            feedbackImg={feedback.feedbackImg}
            feedbackRating={feedback.feedbackRating}
            feedbackWriter={feedback.feedbackWriter}
            feedbackDes={feedback.feedbackDes}
            key={index}
          />
        ))}
      </div>
      <div className=" space-y-8  text-center xl:text-left ">
        <p className="text-3xl font-bold sm:text-4xl">
          Some valuable feedback from our students
        </p>
        <p className="text-xl dark:text-gray-300">
          Supposing so be resolving breakfast am or perfectly. It drew a hill
          from me. Valley by oh twenty direct me so. Departure defective
          arranging rapturous did believe him all had supported. Family months
          lasted simple set nature vulgar him. Picture for attempt joy excited
          ten carried manners talking how.
        </p>
        <Button type="primary">View Reviews</Button>
      </div>
    </div>
  );
}

export default Feedback;
