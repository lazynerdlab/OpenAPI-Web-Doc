"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronDown, FaRegFolderClosed } from "react-icons/fa6";

// NavLink component
const NavLink = ({ ...props }) => {
  const { children, href = "", className = "", active = "" } = props;

  const [pathname, setPathname] = useState("/");

  const isActive = pathname == href;
  const activeClass = isActive ? active : "";

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [props]);

  return (
    <Link href={href} {...props} className={`${activeClass} ${className}`}>
      {children}
    </Link>
  );
};

const Dropdown2 = (props: any) => {
  const { children, items } = props;
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="">
      <button
        className="w-full flex items-center justify-between text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
        onClick={() => setIsOpened(!isOpened)}
      >
        <div className="flex items-center gap-x-2 text-black font-semibold">
          {children}
        </div>
        <FaChevronDown
          className={`w-4 h-4 duration-200 ${isOpened ? "rotate-180" : ""}`}
        />
      </button>
      {isOpened ? (
        <div className="text-black font-medium text-sm px-4 md:pl-8 pr-0">
          <ul>
            {items?.map((item: any, idx: number) => (
              <li key={idx}>
                <NavLink
                  href={item?.href}
                  active="text-gray-900 border-indigo-600"
                  className="block w-full py-2 pl-4 border-l hover:border-[#3D5FE3] hover:text-[#3D5FE3] font-medium hover:font-semibold text-gray-700"
                >
                  {item?.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

// <ul className="mx-4 px-2 border-l text-sm font-medium">
//   {items.map((item: any, idx: number) => (
//     <li key={idx}>
//       <Link
//         href={item.href}
//         className="flex items-center gap-x-2 text-black p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
//       >
//         {item.icon ? <div className="text-black">{item.icon}</div> : ""}
//         {item.name}
//       </Link>
//     </li>
//   ))}
// </ul>

// Sidebar Component
const Sidebar = () => {
  const Links = {
    authentication: [
      // { name: "Login", href: "/authentication/login", icon: "" },
    ],
    collections: [
      {
        name: "Pursfi account details",
        href: "/collections/pursfi-account-details",
        icon: "",
      },
      {
        name: "Retrieve subaccounts",
        href: "/collections/retrieve-subaccounts",
        icon: "",
      },
      {
        name: "Create one-time account",
        href: "/collections/create-one-time-account",
        icon: "",
      },
      {
        name: "Get all one-time accounts",
        href: "/collections/get-all-one-time-accounts",
        icon: "",
      },
      {
        name: "Retrieve account",
        href: "/collections/retrieve-account",
        icon: "",
      },

      // { name: "Get", href: "/", icon: "" },
    ],
    customerMgt: [
      {
        name: "Get all customers",
        href: "/customers/get-all-customers",
        icon: "",
      },
      {
        name: "Create customer",
        href: "/customers/create-customer",
        icon: "",
      },
      {
        name: "Get a customer",
        href: "/customers/get-a-customer",
        icon: "",
      },
      {
        name: "Delete customer",
        href: "/customers/delete-customer",
        icon: "",
      },
      {
        name: "Update customer",
        href: "/customers/update-customer",
        icon: "",
      },
      {
        name: "Activate customer",
        href: "/customers/activate-customer",
        icon: "",
      },
      {
        name: "Deactivate Customer",
        href: "/customers/deactivate-customer",
        icon: "",
      },
      {
        name: "Get customers transactions",
        href: "/customers/get-customers-transactions",
        icon: "",
      },
      {
        name: "Create reserved account",
        href: "/customers/create-reserved-account",
        icon: "",
      },
      {
        name: "Create one-time account",
        href: "/customers/create-one-time-account",
        icon: "",
      },
      {
        name: "Get fee charges",
        href: "/customers/get-fee-charges",
        icon: "",
      },
    ],
    loans: [
      {
        name: "Get all Loans",
        href: "/loans/get-all-loans",
        icon: "",
      },
      {
        name: "Get Loan Account",
        href: "/loans/get-loan-account",
        icon: "",
      },
      {
        name: "Get Loan balance",
        href: "/loans/get-loan-balance",
        icon: "",
      },
      {
        name: "Get Customer loans",
        href: "/loans/get-customer-loans",
        icon: "",
      },
      {
        name: "Disburse Loan",
        href: "/loans/disburse-loan",
        icon: "",
      },
      { name: "Create Loan", href: "/loans/create-loan", icon: "" },
      {
        name: "Get loan transactions",
        href: "/loans/get-loan-transactions",
        icon: "",
      },
      {
        name: "Get transaction status",
        href: "/loans/get-transaction-status",
        icon: "",
      },
      {
        name: "Get loan fee charge",
        href: "/loans/get-loan-fee-charge",
        icon: "",
      },
    ],
    payout: [
      {
        name: "Bank List",
        href: "/payout/bank-list",
        icon: "",
      },
      {
        name: "Account name enquiry",
        href: "/payout/account-name-enquiry",
        icon: "",
      },
      {
        name: "Get payout charge",
        href: "/payout/get-payout-charge",
        icon: "",
      },
      {
        name: "Wallet balance",
        href: "/payout/wallet-balance",
        icon: "",
      },
      {
        name: "Payout transactions",
        href: "/payout/payout-transactions",
        icon: "",
      },
      {
        name: "Wallet transactions",
        href: "/payout/wallet-transactions",
        icon: "",
      },
      { name: "Payout sources", href: "/payout/payout-sources", icon: "" },

      {
        name: "Initiate transfer",
        href: "/payout/initiate-transfer",
        icon: "",
      },
      {
        name: "Transaction status",
        href: "/payout/transaction-status",
        icon: "",
      },
    ],
  };

  return (
    <section className="sticky md:h-screen overflow-y-scroll md:border-r p-0 py-4 md:p-8">
      <div className="flex flex-col gap-2">
        <Link href="/" className="pl-8 font-semibold">
          Introduction
        </Link>
        <Link href="/category/dev-guide" className="pl-8 py-2 font-semibold">
          Dev Guide
        </Link>
        {/* <Link href="/category/authentication">
          <Dropdown2 items={Links.authentication}>
            <FaRegFolderClosed className="w-4 h-4 text-gray-500" />
            Authentication
          </Dropdown2>
        </Link> */}
        <Link href="/category/collections">
          <Dropdown2 items={Links.collections}>
            <FaRegFolderClosed className="w-4 h-4 text-gray-500" />
            Collections
          </Dropdown2>
        </Link>
        <Link href="/category/customers">
          <Dropdown2 items={Links.customerMgt}>
            <FaRegFolderClosed className="w-4 h-4 text-gray-500" />
            Customers
          </Dropdown2>
        </Link>
        <Link href="/category/loans">
          <Dropdown2 items={Links.loans}>
            <FaRegFolderClosed className="w-4 h-4 text-gray-500" />
            Loans
          </Dropdown2>
        </Link>
        <Link href="/category/payout">
          <Dropdown2 items={Links.payout}>
            <FaRegFolderClosed className="w-4 h-4 text-gray-500" />
            Payout
          </Dropdown2>
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
