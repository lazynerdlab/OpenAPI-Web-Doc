"use client";

import CodeBlockWithCopyButton from "@/components/CodeBlockWithCopyButton/CodeBlockWithCopyButton";
import Link from "next/link";
import React, { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

const GetFeeCharges = () => {
  const request = `
  curl --location 'https://oapi.pursfinance.com/api/v1/live-central/customers/663b58f06f873545cfd44fe9/transactions' 
  --header 'x-api-key: test_eyJuYW1lIjoiYXV0aGVudGljIiwiaXNfYWN0aXZlIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2MzUiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2NTIiLCJzZXJ2aWNlX2lkIjoxLCJ1c2VyX2lkIjoxLCJzZXJ2aWNlX25hbWUiOiJsb2FuX3NlcnZpY2UifQ' 
  --data ''
  `;

  const response = `
  {
    "message": "success",
    "data": [],
    "status": 200
  }
  `;

  return (
    <main className="flex max-h-screen max-w-[800px] overflow-y-scroll flex-col justify-between p-4 md:p-8">
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium">
          <Link href="/category/customers" className="text-gray-400">
            Customers
          </Link>{" "}
          / {""}
          <Link href="" className="text-[#3D5FE3]">
            Get customers transactions
          </Link>
        </span>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold flex gap-4 items-center">
            <span className="text-gray-400 text-base">GET</span>
            Get customers transactions
          </h2>

          <div className="overflow-hidden">
            <CopyBlock
              text={`https://oapi.pursfinance.com/api/v1/live-central/customers/:customer_id/transactions`}
              language="text"
              showLineNumbers={false}
              // wrapLines
              theme={monoBlue}
            />
          </div>
          {/* <p className="text-sm">
            To make sure the user is accessing the dashboard from a trusted
            device, the ip address of the user&apos;s device is passed with the
            login details.
          </p> */}

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

export default GetFeeCharges;
