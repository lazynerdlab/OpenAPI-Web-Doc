import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const CustomersCategory = () => {
  const categories = [
    {
      href: "/customers/get-all-customers",
      endpoint: "Get all customers",
    },
    {
      href: "/customers/create-customer",
      endpoint: "Create customer",
    },
    {
      href: "/customers/get-a-customer",
      endpoint: "Get a customer",
    },
    {
      href: "/customers/delete-customer",
      endpoint: "Delete customer",
    },
    {
      href: "/customers/update-customer",
      endpoint: "Update customer",
    },
    {
      href: "/customers/activate-customer",
      endpoint: "Activate customer",
    },
    {
      href: "/customers/deactivate-customer",
      endpoint: "Deactivate Customer",
    },
    {
      href: "/customers/get-customers-transactions",
      endpoint: "Get customers transactions",
    },
    {
      href: "/customers/create-reserved-account",
      endpoint: "Create reserved account",
    },
    {
      href: "/customers/create-one-time-account",
      endpoint: "Create one-time account",
    },
    {
      href: "/customers/get-fee-charges",
      endpoint: "Get fee charges",
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
            Customers
          </Link>
        </span>
        <span className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Customers</h2>
          <p>
          The Customer Collection API offers comprehensive tools for managing customer data within your application.
           This documentation provides detailed guidance on creating, retrieving, updating, and deleting customer records,
            ensuring efficient data handling and integration.
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

export default CustomersCategory;
