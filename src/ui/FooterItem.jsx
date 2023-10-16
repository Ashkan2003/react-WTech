/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function FooterItem({ footerDataBase }) {
  return (
    <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
      {footerDataBase.map((item) => (
        <FooterUl key={item.footerTitle} item={item} />
      ))}
    </ul>
  );
}
export default FooterItem;

function FooterUl({ item }) {
  return (
    <li className="">
      <h2 className="mb-6 text-xl font-bold  text-gray-900 dark:text-white">
        {item.footerTitle}
      </h2>
      <ul className="space-y-5 text-gray-500 dark:text-gray-400 ">
        {item.footerItems.map((li) => (
          <FooterLi key={li} li={li} />
        ))}
      </ul>
    </li>
  );
}

function FooterLi({ li }) {
  return (
    <li>
      <Link to="" className="hover:text-blue-600 font-normal">
        {li}
      </Link>
    </li>
  );
}
