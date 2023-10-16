/* eslint-disable no-unused-vars */
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import Spinner from "../../ui/Spinner";
import Article from "./Article";
import { useArticles } from "./useArticles";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
function ArticleSlider() {
  const { isLoading, articles } = useArticles();
  if (isLoading) return <Spinner />;

  // for more setting check tiny slider in the net
  const settings = {
    nav: false,
    loop: true,
    autoplayButtonOutput: false, // dont show the aouto play text
    lazyload: true, // lazy load the imgs
    prevButton: "#prev", // style the prev btn of slider by id // this id is the same id as the blow btns
    nextButton: "#next", // style the next btn of slider by id // this id is the same id as the blow btns
    mouseDrag: true, //if true the slider can be draged whit mouse
    items: 3, // the total items to show in single page
    autoplay: true, // auto paly
    slideBy: 1, // the num of slides
    speed: 1000,
    autoplayTimeout: 2000, // the time of the auto paly
    gutter: 20, // the space bettven each item

    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        edgePadding: 20,
        gutter: 30,
      },
      800: {
        edgePadding: 40,
        gutter: 40,
        items: 2,
      },
      1000: {
        items: 2,
        edgePadding: 20,
        gutter: 30,
      },
      1150: {
        items: 3,
        edgePadding: 10,
        gutter: 30,
      },
    },
  };
  return (
    <div className="relative xl:mx-10">
      <TinySlider settings={settings}>
        {articles.map((article, index) => (
          <div key={index} style={{ position: "relative" }}>
            <Article
              articleImg={article.articleImg}
              articleTitle={article.articleTitle}
              articleStack={article.articleStack}
              articleRating={article.articleRating}
              articleRatingNum={article.articleRatingNum}
              articleReadTime={article.articleReadTime}
              articleReaders={article.articleReaders}
              articleWriter={article.articleWriter}
              articleLevel={article.articleLevel}
              articleLecture={article.articleLecture}
              articleWriterImg={article.articleWriterImg}
            />
          </div>
        ))}
      </TinySlider>
      <button
        className="absolute left-0 top-1/2  rounded-full bg-slate-700  opacity-80 hover:opacity-100"
        id="prev"
      >
        <GoChevronLeft className="z-10 text-5xl text-white" />
      </button>
      <button
        className="absolute right-0 top-1/2  rounded-full bg-slate-700  opacity-80 hover:opacity-100"
        id="next"
      >
        <GoChevronRight className="z-10 text-5xl text-white" />
      </button>
    </div>
  );
}

export default ArticleSlider;
