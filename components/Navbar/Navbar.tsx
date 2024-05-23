"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/assets/svg/logo.svg";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [{ title: "Home", path: "/" }];

  return (
    <nav className="bg-white border-b w-full md:text-sm md:static sticky top-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image
              // src="https://assets-global.website-files.com/6563854da21d7a4b22874dbf/6563b89d134c5c08c081da98_logo__dyno--black-blue.svg"
              src={Logo}
              width={110}
              height={50}
              alt="Logo"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          // className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          className={`absolute md:relative top-14 md:pb-3 md:top-0 border-t md:border-none md:bg-white bg-[#F3F3F4] pt-4 px-4 pb-16  left-0 w-full z-20 transition-all duration-300 flex-1 md:block md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-700 font-medium hover:text-[#3D5FE3]"
                >
                  <Link href={item.path} className="block">
                    {item.title}
                  </Link>
                </li>
              );
            })}

            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <Link
                  href="https://merchant.pursfinance.com/"
                  target="_blank"
                  className="block py-3.5 px-6 h-full font-medium text-center text-white bg-[#3D5FE3] hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-md shadow md:inline"
                >
                  Sign in
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
