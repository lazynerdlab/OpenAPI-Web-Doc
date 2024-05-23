import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t p-4 md:p-8 max-w-screen-xl mx-auto w-full font-medium text-gray-700 md:text-sm">
      <p className="text-center md:text-start">
        © PursFi — {currentYear}. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
