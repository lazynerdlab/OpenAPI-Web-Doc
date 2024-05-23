"use client";

import CodeBlockWithCopyButton from "@/components/CodeBlockWithCopyButton/CodeBlockWithCopyButton";
import Link from "next/link";
import React, { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

const GetAllOneTimeAccounts = () => {
  const request = `
  curl --location 'https://oapi.pursfinance.com/api/v1/live-central/dynamic-accounts'
  `;

  const response = `
  {
    "status": "success",
    "status_code": 200,
    "message": "success",
    "data": [
      {
        "business_id": 1,
        "bank_name": "PROVIDUS BANK",
        "account_type": "dynamic",
        "updated_at": "2024-05-13T14:40:21.480937",
        "transaction_reference": null,
        "account_number": "9626012773",
        "account_name": "PAYAZA (Chis Hemington)",
        "bank_code": "000023",
        "created_at": "2024-05-13T14:40:21.480926",
        "payable_amount": null,
        "id": 14,
        "current_balance": 0
      },
      {
        "business_id": 1,
        "bank_name": "PROVIDUS BANK",
        "account_type": "dynamic",
        "updated_at": "2024-05-13T14:42:15.417949",
        "transaction_reference": null,
        "account_number": "9623685148",
        "account_name": "PAYAZA (Chis Hemington)",
        "bank_code": "000023",
        "created_at": "2024-05-13T14:42:15.417939",
        "payable_amount": null,
        "id": 15,
        "current_balance": 0
      },
      {
        "business_id": 1,
        "bank_name": "PROVIDUS BANK",
        "account_type": "dynamic",
        "updated_at": "2024-05-13T14:45:37.555101",
        "transaction_reference": null,
        "account_number": "9623452150",
        "account_name": "PAYAZA (Chis Hemington)",
        "bank_code": "000023",
        "created_at": "2024-05-13T14:45:37.555090",
        "payable_amount": null,
        "id": 16,
        "current_balance": 0
      },
      {
        "business_id": 1,
        "bank_name": "PROVIDUS BANK",
        "account_type": "dynamic",
        "updated_at": "2024-05-13T14:53:08.798944",
        "transaction_reference": null,
        "account_number": "9626472447",
        "account_name": "PAYAZA (Chis Hemington)",
        "bank_code": "000023",
        "created_at": "2024-05-13T14:53:08.798933",
        "payable_amount": 23.89,
        "id": 17,
        "current_balance": 0
      },
      {
        "business_id": 1,
        "bank_name": "PROVIDUS BANK",
        "account_type": "dynamic",
        "updated_at": "2024-05-13T14:55:44.540952",
        "transaction_reference": "2eb2208b7d4d4f4abf07a2bb1b789d23",
        "account_number": "9624658781",
        "account_name": "PAYAZA (Chis Hemington)",
        "bank_code": "000023",
        "created_at": "2024-05-13T14:55:44.540934",
        "payable_amount": 23.89,
        "id": 18,
        "current_balance": 0
      },
      {
        "business_id": 1,
        "bank_name": "PROVIDUS BANK",
        "account_type": "dynamic",
        "updated_at": "2024-05-14T17:20:09.660670",
        "transaction_reference": "2f17f8b525764fc7965cdf13be9e6483",
        "account_number": "9625059531",
        "account_name": "PAYAZA (Rhines Fisher)",
        "bank_code": "000023",
        "created_at": "2024-05-14T17:20:09.660662",
        "payable_amount": 102,
        "id": 19,
        "current_balance": 0
      }
    ]
  }
  `;

  return (
    <main className="flex max-h-screen max-w-[800px] overflow-y-scroll flex-col justify-between p-4 md:p-8">
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium">
          <Link href="/category/collections" className="text-gray-400">
            Collections
          </Link>{" "}
          / {""}
          <Link href="" className="text-[#3D5FE3]">
            Get all one-time accounts
          </Link>
        </span>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold flex gap-4 items-center">
            <span className="text-gray-400 text-base">GET</span>
            Get all one-time accounts
          </h2>

          {/* <CodeBlockWithCopyButton code={link} language="text" /> */}

          <div className="overflow-hidden">
            <CopyBlock
              text={`https://oapi.pursfinance.com/api/v1/live-central/dynamic-accounts`}
              language="text"
              showLineNumbers={false}
              wrapLongLines
              theme={monoBlue}
            />
          </div>

          {/* <p>Refresh the expired access token.</p> */}

          {/* Example Request */}
          <p className="font-semibold pt-4">Example Request</p>
          <CodeBlockWithCopyButton code={request} language="jsx" />

          {/* Example Response */}
          <p className="font-semibold pt-4">Example Response</p>
          <CodeBlockWithCopyButton code={response} language="json" />
        </div>
      </div>
    </main>
  );
};

export default GetAllOneTimeAccounts;
