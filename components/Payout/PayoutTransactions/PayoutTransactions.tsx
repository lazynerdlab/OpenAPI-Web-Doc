"use client";

import CodeBlockWithCopyButton from "@/components/CodeBlockWithCopyButton/CodeBlockWithCopyButton";
import Link from "next/link";
import React, { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

const PayoutTransactions = () => {
  const request = `
  curl --location 'https://oapi.pursfinance.com/api/v1/live-central/payouts/transactions' 
--header 'x-api-key: test_eyJuYW1lIjoiYXV0aGVudGljIiwiaXNfYWN0aXZlIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2MzUiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2NTIiLCJzZXJ2aWNlX2lkIjoxLCJ1c2VyX2lkIjoxLCJzZXJ2aWNlX25hbWUiOiJsb2FuX3NlcnZpY2UifQ'
  `;

  const response = `
  {
    "status": "success",
    "status_code": 200,
    "message": "success",
    "data": [
      {
        "account_number": "9629116925",
        "bank_code": "000014",
        "updated_at": "2024-05-10T17:05:09.429029",
        "category": "disbursement",
        "status": "successful",
        "customer_name": null,
        "wallet_id": 9,
        "business_id": 1,
        "currency": "NGN",
        "created_at": "2024-05-10T17:05:09.429018",
        "narration": "string",
        "amount": 1065,
        "charge": 65,
        "tx_type": "debit",
        "reference": "c59f013204b24af383739a7767a8cf0c"
      },
      {
        "account_number": "9629116925",
        "bank_code": "000014",
        "updated_at": "2024-05-10T17:12:05.560181",
        "category": "disbursement",
        "status": "successful",
        "customer_name": null,
        "wallet_id": 9,
        "business_id": 1,
        "currency": "NGN",
        "created_at": "2024-05-10T17:12:05.560168",
        "narration": "string",
        "amount": 1065,
        "charge": 65,
        "tx_type": "debit",
        "reference": "6750a7f71a8049ef8390841cee294508"
      },
      {
        "account_number": "9624452667",
        "bank_code": "string",
        "updated_at": "2024-05-14T05:53:23.855167",
        "category": "disbursement",
        "status": "successful",
        "customer_name": null,
        "wallet_id": 1,
        "business_id": 1,
        "currency": "NGN",
        "created_at": "2024-05-14T05:53:23.855156",
        "narration": "string",
        "amount": 165,
        "charge": 65,
        "tx_type": "debit",
        "reference": "57d33ccec79a4984848462daec03eb45"
      }
    ]
  }
  `;

  return (
    <main className="flex max-h-screen max-w-[800px] overflow-y-scroll flex-col justify-between p-4 md:p-8">
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium">
          <Link href="/category/payout" className="text-gray-400">
            Payout
          </Link>{" "}
          / {""}
          <Link href="" className="text-[#3D5FE3]">
            Payout transactions
          </Link>
        </span>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold flex gap-4 items-center">
            <span className="text-gray-400 text-base">GET</span>
            Payout transactions
          </h2>

          {/* <CodeBlockWithCopyButton code={link} language="text" /> */}

          <div className="overflow-hidden">
            <CopyBlock
              text={`https://oapi.pursfinance.com/api/v1/live-central/payouts/transactions`}
              language="text"
              showLineNumbers={false}
              //   wrapLongLines
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

export default PayoutTransactions;
