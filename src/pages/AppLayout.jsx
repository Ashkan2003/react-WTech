import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import { IoMdArrowRoundUp } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

function AppLayout() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <button // this button if for scroll to top functionality of site with the help of the reavt-scroll(npm i)
        onClick={() => scroll.scrollToTop()}
        className="group fixed bottom-5 right-2 z-10  hidden h-14  w-11 items-center justify-center rounded-lg border-2 border-blue-700 bg-transparent transition-all duration-200 hover:bg-blue-700 sm:flex"
      >
        <IoMdArrowRoundUp className="text-3xl text-blue-700 group-hover:text-white" />
      </button>
    </div>
  );
}

export default AppLayout;
