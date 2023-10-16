import Articles from "../ui/Articles";
import Feedback from "../ui/Feedback";
import Landing from "../ui/Landing";
import PopularCourses from "../ui/PopularCourses";
import SiteExplanation from "../ui/SiteExplanation";

function Main() {
  return (
    <div className="space-y-32 bg-gray-100 from-indigo-950 to-gray-900 dark:bg-gradient-to-tr dark:text-white">
      <Landing />
      <PopularCourses />
      <SiteExplanation />
      <Articles />
      <Feedback />
    </div>
  );
}

export default Main;
