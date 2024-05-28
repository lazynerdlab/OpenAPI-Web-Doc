import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const LoansCategory = () => {
  const categories = [
    {
      endpoint: "Get all Loans",
      href: "/loans/get-all-loans",
    },
    {
      endpoint: "Get Loan Account",
      href: "/loans/get-loan-account",
    },
    {
      endpoint: "Get Loan balance",
      href: "/loans/get-loan-balance",
    },
    {
      endpoint: "Get Customer loans",
      href: "/loans/get-customer-loans",
    },
    {
      endpoint: "Disburse Loan",
      href: "/loans/disburse-loan",
    },
    { endpoint: "Create Loan", href: "/loans/create-loan" },
    {
      endpoint: "Get loan transactions",
      href: "/loans/get-loan-transactions",
    },
    {
      endpoint: "Get transaction status",
      href: "/loans/get-transaction-status",
    },
    {
      endpoint: "Get loan fee charge",
      href: "/loans/get-loan-fee-charge",
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
            Loans
          </Link>
        </span>
        <span className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Loans</h2>
          <p>
          The Loan Account Collection and Disbursement API facilitates the efficient management of loan accounts, 
          including the retrieval of loan information, creation of new loans, disbursement of funds,
           and collection of repayments. This documentation provides comprehensive details on how to use the API to manage loan-related activities within your application.
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

export default LoansCategory;
