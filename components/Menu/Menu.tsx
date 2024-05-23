"use client";

import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { FaChevronDown } from "react-icons/fa6";

const DropDown = (props: any) => {
  const { children, items } = props;
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="md:px-4">
      <button
        className="w-full flex items-center justify-between text-gray-600 p-4 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
        onClick={() => setIsOpened(!isOpened)}
      >
        <div className="flex items-center gap-x-2 font-semibold">
          {children}
        </div>
        <FaChevronDown
          className={`w-4 h-4 duration-200 ${isOpened ? "rotate-180" : ""}`}
        />
      </button>
      {isOpened ? (
        <div className="px-2 border-l">
          <Sidebar />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const Menu = () => {
  return (
    <div className="lg:hidden border-b">
      <DropDown items={<Sidebar />}>Menu</DropDown>
    </div>
  );
};

export default Menu;
