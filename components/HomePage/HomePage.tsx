import React from "react";
import Link from "next/link";

import { MdHome } from "react-icons/md";
import { BiSolidCarousel } from "react-icons/bi";
import { FaBookReader } from "react-icons/fa";
import { HiMiniSquaresPlus } from "react-icons/hi2";

const HomePage = () => {
  const categories = [
    {
      href: "/category/dev-guide",
      icon: <MdHome className="w-7 h-7 text-black" />,
      title: "Dev Guide",
      description: "Fusce sit amet viverra ligula. Cras ut quam libero.",
    },
    {
      href: "/category/collections",
      icon: <BiSolidCarousel className="w-7 h-7 text-black" />,
      title: "Collections",
      description: "Fusce sit amet viverra ligula. Cras ut quam libero.",
    },
    {
      href: "/category/customers",
      icon: <FaBookReader className="w-7 h-7 text-black" />,
      title: "Customers",
      description: "Fusce sit amet viverra ligula. Cras ut quam libero.",
    },
    {
      href: "/category/loans",
      icon: <HiMiniSquaresPlus className="w-7 h-7 text-black" />,
      title: "Loans",
      description: "Fusce sit amet viverra ligula. Cras ut quam libero.",
    },
    {
      href: "/category/payout",
      icon: <BiSolidCarousel className="w-7 h-7 text-black" />,
      title: "Payout",
      description: "Fusce sit amet viverra ligula. Cras ut quam libero.",
    },
  ];

  return (
    <main className="flex lg:max-h-screen max-w-[800px] overflow-y-scroll flex-col justify-between p-4 md:p-8">
      <section className="flex flex-col gap-">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Pursfi OpenAPI Business</h2>
          <p className="text-gray-500">
            The is the Open API documentation. It contains the endpoints needed
            to the implement the Open API dashboard.
          </p>
        </div>

        <div className="border my-10" />

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Start here</h2>
          <p className="text-gray-500">
             Explore Payaza's range of services that make it possible for you to send and receive money in minutes. 
          </p>
        </div>

        <div className="border my-10" />

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Categories</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="flex flex-col gap-10 border hover:bg-gray-100 rounded-md p-4"
              >
                {category.icon}
                <span className="space-y-2">
                  <p className="text-xl font-semibold">{category.title}</p>
                  <p className="font-medium text-gray-600">
                    {category.description}
                  </p>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
