import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const CollectionsCategory = () => {
  const categories = [
    {
      href: "/collections/pursfi-account-details",
      endpoint: "Pursfi account details",
    },
    {
      href: "/collections/retrieve-subaccounts",
      endpoint: "Retrieve subaccounts",
    },
    {
      href: "/collections/create-one-time-account",
      endpoint: "Create one-time account",
    },
    {
      href: "/collections/get-all-one-time-accounts",
      endpoint: "Get all one-time accounts",
    },
    {
      href: "/collections/retrieve-account",
      endpoint: "Retrieve account",
    },
  ];

  return (
    <main className="flex max-h-screen max-w-[800px] overflow-y-scroll flex-col justify-between p-4 md:p-8">
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium">
          <Link href="/" className="text-gray-400">
            Home
          </Link>{" "}
          / {""}
          <Link href="" className="text-[#3D5FE3]">
            Collections
          </Link>
        </span>
        <span className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Collections</h2>
          <p>
          The Collection API allows you to efficiently manage customer and account data within your application.
           This documentation provides detailed information on how to retrieve sub-accounts, create one-time accounts,
            get all one-time accounts, and retrieve account details.
          </p>
        </span>

        <div className="grid gap-3">
          {categories.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="border hover:bg-gray-100 rounded-md p-3"
            >
              <span className="flex items-center gap-8 justify-between">
                <p className="text-lg font-semibold">{item.endpoint}</p>
                <MdArrowOutward className="w-5 h-5 text-black" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CollectionsCategory;
