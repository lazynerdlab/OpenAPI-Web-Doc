"use client";

import CodeBlockWithCopyButton from "@/components/CodeBlockWithCopyButton/CodeBlockWithCopyButton";
import Link from "next/link";
import React, { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

const GetCustomerLoans = () => {
  const request = `
  curl --location 'https://oapi.pursfinance.com/api/v1/live-central/loans/customer/1234' 
--header 'x-api-key: test_eyJuYW1lIjoiYXV0aGVudGljIiwiaXNfYWN0aXZlIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2MzUiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2NTIiLCJzZXJ2aWNlX2lkIjoxLCJ1c2VyX2lkIjoxLCJzZXJ2aWNlX25hbWUiOiJsb2FuX3NlcnZpY2UifQ'
  `;

  const response = `
  {
    "message": "Successful",
    "data": [
      {
        "account_id": 1,
        "amount": 10000,
        "business_id": "1",
        "charge": 0,
        "count": 1,
        "created_at": "2024-05-05T21:10:45.777265Z",
        "customer_email": "",
        "customer_firstname": "Peter",
        "customer_id": "1234",
        "customer_lastname": "Edoka",
        "customer_phone": "",
        "due_date": "2024-05-05",
        "interest": 0,
        "loan_tenor": 1,
        "penalty": 0,
        "purpose": null,
        "reference": "0307dd219df34dd9ae703dc873851f95",
        "repayment_complete": false,
        "status": "inprogress",
        "updated_at": "2024-05-05T21:10:45.777421Z"
      },
      {
        "account_id": 2,
        "amount": 500,
        "business_id": "1",
        "charge": 0,
        "count": 1,
        "created_at": "2024-05-05T21:49:40.260468Z",
        "customer_email": "",
        "customer_firstname": "string",
        "customer_id": "1234",
        "customer_lastname": "string",
        "customer_phone": "",
        "due_date": "2024-05-05",
        "interest": 0,
        "loan_tenor": 1,
        "penalty": 0,
        "purpose": "string",
        "reference": "15a166cc9821406f94878d2b00235cc2",
        "repayment_complete": false,
        "status": "string",
        "updated_at": "2024-05-05T21:49:40.260611Z"
      }
    ],
    "status": 200
  }
  `;

  return (
    <main className="flex max-h-screen max-w-[800px] overflow-y-scroll flex-col justify-between p-4 md:p-8">
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium">
          <Link href="/category/loans" className="text-gray-400">
            Loans
          </Link>{" "}
          / {""}
          <Link href="" className="text-[#3D5FE3]">
            Get Customer loans
          </Link>
        </span>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold flex gap-4 items-center">
            <span className="text-gray-400 text-base">GET</span>
            Get Customer loans
          </h2>

          {/* <CodeBlockWithCopyButton code={link} language="text" /> */}

          <div className="overflow-hidden">
            <CopyBlock
              text={`https://oapi.pursfinance.com/api/v1/live-central/loans/customer/:customer_id`}
              language="text"
              showLineNumbers={false}
              // wrapLongLines
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

export default GetCustomerLoans;
