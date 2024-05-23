"use client";

import CodeBlockWithCopyButton from "@/components/CodeBlockWithCopyButton/CodeBlockWithCopyButton";
import Link from "next/link";
import React, { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

const CreateOneTimeAccount = () => {
  const request = `
  curl --location 'https://oapi.pursfinance.com/api/v1/live-central/dynamic-accounts/new' 
--header 'x-api-key: test_eyJuYW1lIjoiYXV0aGVudGljIiwiaXNfYWN0aXZlIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2MzUiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2NTIiLCJzZXJ2aWNlX2lkIjoxLCJ1c2VyX2lkIjoxLCJzZXJ2aWNlX25hbWUiOiJsb2FuX3NlcnZpY2UifQ' 
--data-raw '{
    "customer_first_name": "Rhines",
    "customer_last_name": "Fisher",
    "customer_email": "LinesFisher@gmail.com",
    "customer_phone": "09012345673",
    "payable_amount": 102
}'
  `;

  const response = `
  {
    "status": "success",
    "status_code": 200,
    "message": "success",
    "data": {
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
      "id": 19
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
            Create one-time account
          </Link>
        </span>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold flex gap-4 items-center">
            <span className="text-gray-400 text-base">POST</span>
            Create one-time account
          </h2>

          {/* <CodeBlockWithCopyButton code={link} language="text" /> */}

          <div className="overflow-hidden">
            <CopyBlock
              text={`https://oapi.pursfinance.com/api/v1/live-central/dynamic-accounts/new`}
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

export default CreateOneTimeAccount;
