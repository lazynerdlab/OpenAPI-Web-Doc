"use client";

import CodeBlockWithCopyButton from "@/components/CodeBlockWithCopyButton/CodeBlockWithCopyButton";
import Link from "next/link";
import React, { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

const GetPayoutCharge = () => {
  const request = `
  curl --location 'https://oapi.pursfinance.com/api/v1/live-central/payouts/fee-charge?amount=10000' 
  --header 'x-api-key: test_eyJuYW1lIjoiYXV0aGVudGljIiwiaXNfYWN0aXZlIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2MzUiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2NTIiLCJzZXJ2aWNlX2lkIjoxLCJ1c2VyX2lkIjoxLCJzZXJ2aWNlX25hbWUiOiJsb2FuX3NlcnZpY2UifQ'
  `;

  const response = `
  {
    "status": "success",
    "status_code": 200,
    "message": "success",
    "data": {
      "amount": 10000,
      "charge": 65,
      "currency": "NGN"
    }
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
            Get payout charge
          </Link>
        </span>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold flex gap-4 items-center">
            <span className="text-gray-400 text-base">GET</span>
            Get payout charge
          </h2>

          {/* <CodeBlockWithCopyButton code={link} language="text" /> */}

          <div className="overflow-hidden">
            <CopyBlock
              text={`https://oapi.pursfinance.com/api/v1/live-central/payouts/fee-charge?amount=10000`}
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

export default GetPayoutCharge;
