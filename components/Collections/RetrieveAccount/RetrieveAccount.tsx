"use client";

import CodeBlockWithCopyButton from "@/components/CodeBlockWithCopyButton/CodeBlockWithCopyButton";
import Link from "next/link";
import React, { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

const RetrieveAccount = () => {
  const request = `
  curl --location 'https://oapi.pursfinance.com/api/v1/live-central/accounts/13' 
--header 'x-api-key: test_eyJuYW1lIjoiYXV0aGVudGljIiwiaXNfYWN0aXZlIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2MzUiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2NTIiLCJzZXJ2aWNlX2lkIjoxLCJ1c2VyX2lkIjoxLCJzZXJ2aWNlX25hbWUiOiJsb2FuX3NlcnZpY2UifQ'
  `;

  const response = `
  {
    "status": "success",
    "status_code": 200,
    "message": "success",
    "data": {
      "business_id": 56,
      "bank_name": "PROVIDUS BANK",
      "account_type": "sub-account",
      "updated_at": "2024-05-09T09:53:11.954678",
      "transaction_reference": null,
      "account_number": "9622406404",
      "account_name": "PAYAZA (DPeter PLC)",
      "bank_code": "000023",
      "created_at": "2024-05-09T09:53:11.954661",
      "payable_amount": null,
      "id": 13
    }
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
            Retrieve account
          </Link>
        </span>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold flex gap-4 items-center">
            <span className="text-gray-400 text-base">GET</span>
            Retrieve account
          </h2>

          {/* <CodeBlockWithCopyButton code={link} language="text" /> */}

          <div className="overflow-hidden">
            <CopyBlock
              text={`https://oapi.pursfinance.com/api/v1/live-central/accounts/:accountId`}
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

export default RetrieveAccount;
