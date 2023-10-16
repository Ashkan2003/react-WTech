/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import FooterLogo from "./FooterLogo";
import FooterItem from "./FooterItem";
import ButtonIcon from "./ButtonIcon";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiGlobe } from "react-icons/bi";
const footerDataBase = [
  {
    footerTitle: "Company",
    footerItems: [
      "About us",
      "Contact us",
      "News and Blogs",
      "Library",
      "Career",
    ],
  },
  {
    footerTitle: "Community",
    footerItems: ["Documentation", "Faq", "Sitemap", "Career"],
  },
  {
    footerTitle: "Teaching",
    footerItems: ["Become a teacher", "How to guide", "Terms & Conditions"],
  },
];

function Footer() {
  return (
    <footer className="bg-white dark:bg-gradient-to-tr from-indigo-950 to-gray-900">
      <div className=" p-4 py-6 lg:py-8">
        <div className="grid grid-cols-2 gap-10 px-4 py-6 lg:grid-cols-4 lg:gap-20 lg:py-8">
          <div className="w-65">
            <FooterLogo />
            <p className="mt-6 text-gray-500 dark:text-gray-400">
              WTech theme, built specifically for the education centers which is
              dedicated to teaching and involve learners.
            </p>
            <ul className="mt-10 flex">
              <ButtonIcon>
                <BiLogoFacebook className="text-blue-700" />
              </ButtonIcon>
              <ButtonIcon>
                <BiLogoInstagram className="text-red-600" />
              </ButtonIcon>
              <ButtonIcon>
                <BiLogoTwitter className="text-blue-700" />
              </ButtonIcon>
              <ButtonIcon>
                <BiLogoLinkedin className="text-blue-700" />
              </ButtonIcon>
            </ul>
          </div>

          <div className="col-span-2">
            <FooterItem footerDataBase={footerDataBase} />
          </div>

          <div className="space-y-5">
            <h5 className="mb-6 text-xl font-bold dark:text-white">Contact</h5>
            <p className="dark:text-gray-400">
              Toll free : <span className="h6 font-light">+1234 568 963</span>
            </p>
            <p className="dark:text-gray-400">
              Email : <span className="h6 font-light">example@gmail.com</span>
            </p>
            <div className="flex-col space-y-4   pt-5">
              <div className="">
                <a href="#">
                  <img
                    className="rounded-md"
                    src="/google.jpg"
                    width="150"
                    alt=""
                  />
                </a>
              </div>
              <div className="">
                <a href="#">
                  {" "}
                  <img
                    className="rounded-md"
                    src="/apple.png"
                    width="150"
                    alt="app-store"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className=" border-gray-200 dark:border-gray-700 sm:mx-8 lg:mx-16 lg:my-8 " />

        <div className="mx-16 mt-7 justify-center space-y-5 text-center  text-gray-400  lg:flex lg:items-center lg:justify-between  lg:space-y-0">
          <p>
            Copyrights
            <span className="cursor-pointer hover:text-blue-600">
              ©2023 by WTech
            </span>
            . All rights reserved.
          </p>
          <div className="flex justify-center  space-x-5 ">
            <p className="flex items-center space-x-1">
              <BiGlobe />
              <span>Language</span>
            </p>
            <p>Terms of use</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
