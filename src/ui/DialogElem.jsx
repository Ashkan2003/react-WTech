/* eslint-disable react/prop-types */
import { Dialog, Disclosure } from "@headlessui/react";
import Logo from "./Logo";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// this is a external library that i downloaded
function DialogElem({ mobileMenuOpen, setMobileMenuOpen, products }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 dark:bg-gray-900 sm:max-w-sm sm:ring-1  sm:ring-gray-900/10 ">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-10 w-10 rounded-md  dark:bg-gray-700 dark:text-gray-400 dark:shadow-none hover:dark:outline hover:dark:outline-1 hover:dark:text-gray-200 dark:transition-all " />
          </button>
        </div>
        <div className="mt-6 flow-root ">
          <div className="-my-6 divide-y divide-gray-500/10 ">
            <div className="space-y-2 py-6 ">
              <Disclosure as="div" className="-mx-3 ">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50  dark:text-white hover:dark:bg-gray-800">
                      Product
                      <ChevronDownIcon
                        className={classNames(
                          open ? "rotate-180" : "",
                          "h-5 w-5 flex-none",
                        )}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2  dark:text-white  dark:bg-gray-800 ">
                      {[...products].map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white  hover:dark:bg-gray-900"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50  dark:text-white  hover:dark:bg-gray-800"
              >
                Features
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50  dark:text-white  hover:dark:bg-gray-800"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50  dark:text-white  hover:dark:bg-gray-800"
              >
                Company
              </a>
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50  dark:text-white  hover:dark:bg-gray-800"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default DialogElem;
