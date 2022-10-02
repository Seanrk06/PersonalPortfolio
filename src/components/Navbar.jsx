import React from "react";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar({ navigation }) {
  return (
    <div>
      <Popover
        as="header"
        className="md:justify-center lg:justify-center flex content-center relative top-6 "
      >
        <div className="pt-3 px-10 pb-3 lg:bg-darkCustomGrey md:bg-darkCustomGrey rounded-3xl flex align-center outline-outlineGray lg:outline md:outline sm:bg-none">
          <nav
            className="relative text-center flex items-center justify-between"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-between ">
                {/* <a href="/">
                    <span className="sr-only"></span>
                    <h1 className='font-Roboto text-white text-3xl'>kk</h1>
                  </a> */}
                <div className="-mr-2  items-center md:hidden">
                  <Popover.Button className="absolute left-0 focus-ring-inset inline-flex items-center justify-center rounded-md bg-zinc-800 p-2  text-zinc-800 shadow-lg shadow-zinc-800/5  focus:ring-2 focus:ring-inset focus:ring-cyan-600 backdrop-blur">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="text-white h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 font-semibold md:flex">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-small text-gray-300 hover:text-teal-400"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden lg:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <h1 className="font-bold text-2xl ">Sean Klein</h1>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default Navbar;
