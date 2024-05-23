"use client";

import CodeBlockWithCopyButton from "@/components/CodeBlockWithCopyButton/CodeBlockWithCopyButton";
import Link from "next/link";
import React, { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

const CreateLoan = () => {
  const request = `
  curl --location 'https://oapi.pursfinance.com/api/v1/live-central/loans/new' 
--header 'x-api-key: test_eyJuYW1lIjoiYXV0aGVudGljIiwiaXNfYWN0aXZlIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2MzUiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2NTIiLCJzZXJ2aWNlX2lkIjoxLCJ1c2VyX2lkIjoxLCJzZXJ2aWNlX25hbWUiOiJsb2FuX3NlcnZpY2UifQ' 
--data-raw '{
  "amount": 10000,
  "charge": 0,
  "customer_email": "peter@edoka.com",
  "customer_firstname": "Miracle",
  "customer_id": "6ev32k5sd2",
  "customer_lastname": "Ezeh",
  "customer_phone": "08120183102",
  "loan_tenor": 1,
  "purpose": "Business",
  "due_date": "2024-12-30",
  "interest": 0
}'
  `;

  const response = `
  {
    "message": "Sucesss",
    "data": {
      "loan": {
        "reference": "f7055eb821044a0e81dcd644a106c902",
        "amount": 10000,
        "due": "2024-12-30T00:00:00"
      },
      "repayment_account": {
        "account_number": 9267612731,
        "account_name": "Payaza (Miracle Ezeh)",
        "bank_code": "000023",
        "bank_name": "Providus"
      }
    },
    "status": 201
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
            Create Loan
          </Link>
        </span>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold flex gap-4 items-center">
            <span className="text-gray-400 text-base">POST</span>
            Create Loan
          </h2>

          {/* <CodeBlockWithCopyButton code={link} language="text" /> */}

          <div className="overflow-hidden">
            <CopyBlock
              text={`https://oapi.pursfinance.com/api/v1/live-central/loans/new`}
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

export default CreateLoan;
