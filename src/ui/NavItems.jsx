/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link as ReactScrollLink } from "react-scroll";
function NavItems({ products }) {
  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
      <Popover className="relative transition-all duration-200 hover:text-blue-600">
        <Popover.Button className="text-gray-90 flex items-center gap-x-1 text-sm font-semibold leading-6">
          Features
          <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400 " />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className=" absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800 dark:text-white">
            <div className="p-4">
              {products.map((item) => (
                <Link
                  to={item.to}
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 hover:dark:bg-gray-900"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white  dark:bg-gray-400 ">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-700" />
                  </div>
                  <div className="flex-auto">
                    <p className="block font-semibold text-gray-900 dark:text-white">
                      {item.name}
                      <span className="absolute inset-0" />
                    </p>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <ReactScrollLink
        style={{ cursor: "pointer" }}
        smooth={true} // animation scroll to the target
        duration={1000} // the duration of scroll
        delay={100} // the wait time for scroll
        to="react-scroll-articles"
        className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
      >
        Articles
      </ReactScrollLink>
      <ReactScrollLink
        style={{ cursor: "pointer" }}
        smooth={true} // animation scroll to the target
        duration={1000} // the duration of scroll
        delay={100} // the wait time for scroll
        to="react-scroll-siteExplanation"
        className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
      >
        About us
      </ReactScrollLink>
    </Popover.Group>
  );
}

export default NavItems;
