import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const PayoutCategory = () => {
  const categories = [
    {
      endpoint: "Bank List",
      href: "/payout/bank-list",
    },
    {
      endpoint: "Account name enquiry",
      href: "/payout/account-name-enquiry",
    },
    {
      endpoint: "Get payout charge",
      href: "/payout/get-payout-charge",
    },
    {
      endpoint: "Wallet balance",
      href: "/payout/wallet-balance",
    },
    {
      endpoint: "Payout transactions",
      href: "/payout/payout-transactions",
    },
    {
      endpoint: "Wallet transactions",
      href: "/payout/wallet-transactions",
    },
    { endpoint: "Payout sources", href: "/payout/payout-sources", icon: "" },

    {
      endpoint: "Initiate transfer",
      href: "/payout/initiate-transfer",
    },
    {
      endpoint: "Transaction status",
      href: "/payout/transaction-status",
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
            Payout
          </Link>
        </span>
        <span className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Payout</h2>
          <p>
           Transfers are transactions made from your Pursfinance account to beneficiaries.
            Merchants can instantly transfer funds from their available balance. 
            For every transfer, you need to specify the amount and the beneficiary’s details.
            You become eligible to make transfers after you have been verified. 
            (you sign up, finish account activation and Compliance)
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

export default PayoutCategory;
