"use client";

import CodeBlockWithCopyButton from "@/components/CodeBlockWithCopyButton/CodeBlockWithCopyButton";
import Link from "next/link";
import React, { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

const CreateCustomer = () => {
  const request = `
  curl --location 'https://oapi.pursfinance.com/api/v1/live-central/customers' 
--header 'x-api-key: test_eyJuYW1lIjoiYXV0aGVudGljIiwiaXNfYWN0aXZlIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2MzUiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2NTIiLCJzZXJ2aWNlX2lkIjoxLCJ1c2VyX2lkIjoxLCJzZXJ2aWNlX25hbWUiOiJsb2FuX3NlcnZpY2UifQ' 
--data-raw '{
  "firstName": "Stephen",
  "lastName": "Balogun",
  "email": "stephenbalogun@gmail.com",
  "phone": "0808080808",
  "dob": "1999-04-19",
  "userType": "individual",
  "city": "Lagos",
  "street": "Broad Street",
  "postalCode": "100210",
  "state": "Lagos",
  "bvn": "222222222222",
  "kycType": "NIN"
}'
  `;

  const response = `
  {
    "message": "success",
    "data": {
      "firstName": "Stephen",
      "lastName": "Balogun",
      "dob": "1999-04-19",
      "userType": "individual",
      "city": "Lagos",
      "street": "Broad Street",
      "postalCode": "100210",
      "state": "Lagos",
      "bvn": "222222222222",
      "kycType": "NIN",
      "email": "stephenbalogun@gmail.com",
      "phone": "0808080808",
      "businessId": "1",
      "status": "active",
      "accounts": [],
      "transactions": [],
      "_id": "663b58f06f873545cfd44fe9",
      "createdAt": "2024-05-08T10:50:24.363Z",
      "updatedAt": "2024-05-08T10:50:24.363Z",
      "__v": 0
    },
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
            Create customer
          </Link>
        </span>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold flex gap-4 items-center">
            <span className="text-gray-400 text-base">POST</span>
            Create customer
          </h2>

          <CopyBlock
            text={`https://oapi.pursfinance.com/api/v1/live-central/customers`}
            language="text"
            showLineNumbers={false}
            // wrapLines
            theme={monoBlue}
          />
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

export default CreateCustomer;
