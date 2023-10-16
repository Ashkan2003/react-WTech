import { HiMiniShieldCheck } from "react-icons/hi2";
import Badge from "./Badge";
import { Element } from "react-scroll";

function SiteExplanation() {
  return (
    <Element name="react-scroll-siteExplanation" className="mx-8 grid grid-cols-1 items-center  sm:mx-10  lg:grid-cols-2 xl:gap-20">{/*the Elemet-tag is a react-scroll tag that we set to the target tag of the scroll and the name is the target-id */}
      <div className="space-y-4 text-center lg:text-left">
        <h1 className="text-3xl font-semibold">
          Thousands of experts around the world ready to help you.
        </h1>
        <p className="text-xl dark:text-gray-400">
          See why people choose WTech Courses in their learning to become
          master.
        </p>
        <p className="text-2xl ">Learn more about:</p>
        <div className="space-y-1 ">
          <p className="flex items-center justify-center space-x-1 lg:justify-start ">
            <HiMiniShieldCheck className="text-xl text-yellow-500" />
            <span>Unlimited access to the top 3,500+ courses</span>
          </p>
          <p className="flex items-center justify-center space-x-1 lg:justify-start ">
            <HiMiniShieldCheck className="text-xl text-blue-500" />
            <span>
              Fresh content taught by 1,300+ experts - for any learning style
            </span>
          </p>
          <p className="flex items-center justify-center space-x-1 lg:justify-start ">
            <HiMiniShieldCheck className="text-xl text-red-500" />
            <span>Actionable learning insights </span>
            <Badge type="tertiary">Beta</Badge>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="/brand-logo.png" className="" />
      </div>
    </Element>
  );
}

export default SiteExplanation;
