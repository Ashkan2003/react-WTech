import { Element } from "react-scroll";
import ArticleSlider from "../features/articles/ArticleSlider";

function Articles() {
  return (
    <Element name="react-scroll-articles" className="space-y-4"> {/*the Elemet-tag is a react-scroll tag that we set to the target tag of the scroll and the name is the target-id */}
      <div className="space-y-3 text-center">
        <p className="text-3xl font-bold sm:text-5xl">our latest articles</p>
        <p className="text-xl text-stone-500 dark:text-gray-400 sm:text-2xl">Check out our latest articles in the tech world</p>
      </div>
      <ArticleSlider/>
    </Element>
  );
}

export default Articles;
