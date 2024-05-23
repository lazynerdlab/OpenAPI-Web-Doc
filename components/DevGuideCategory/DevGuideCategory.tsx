"use client";

import React from "react";
import Link from "next/link";

import { CopyBlock, monoBlue } from "react-code-blocks";
import { MdArrowOutward } from "react-icons/md";

const DevGuideCategory = () => {
  const categories = [
    {
      href: "/authentication/login",
      endpoint: "Login",
    },
  ];

  return (
    <main className="flex max-h-screen max-w-[800px] overflow-y-scroll flex-col justify-between p-4 md:p-8">
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium">
          <Link href="/" className="text-gray-400">
            Home
          </Link>{" "}
          / {""}
          <Link href="" className="text-[#3D5FE3]">
            Dev Guide
          </Link>
        </span>
        <span className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Dev Guide</h2>
          <h2 className="text-3xl font-semibold">Authentication</h2>
          <p>
            Pursfi OpenAPI authenticates your API requests using your
            account&apos;s API keys. Add your API key in the request header with
            the key &apos;X-API-KEY&apos;.
          </p>

          <CopyBlock
            text={`X-API-KEY: live_UFo4748S0xJVkUtSJDS5RThDQzEtQjAzMS00RUNBLTgwOTctRUVCMjA5NzJENTY0`}
            language="text"
            showLineNumbers={false}
            // wrapLines
            theme={monoBlue}
          />
          <p>
            If you do not include your key when making an API request or use one
            that is incorrect, we will return this error:
          </p>
          <CopyBlock
            text={`
            {
              "detail": "Not authenticated"
            }
            `}
            language="json"
            showLineNumbers={false}
            // wrapLines
            theme={monoBlue}
          />
          <p>or</p>
          <CopyBlock
            text={`
            {
              "detail": "Invalid or missing API key"
            }
            `}
            language="json"
            showLineNumbers={false}
            // wrapLines
            theme={monoBlue}
          />
          <p>You can manage your API keys from your OpenAPI dashboard.</p>
          <p>
            API requests exist in either test or live mode, one mode’s data
            cannot affect the other.
          </p>
          <p>
            We have provided a toggle button to help you switch easily between
            both modes and an indicator to help identify what mode you are in.
          </p>
        </span>
        <p>
          Only use the test API Key for test development purposes. Payments in
          test mode are not processed or settled.
        </p>

        {/* endpoints */}
        {/* <div className="grid gap-3">
          {categories.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="border hover:bg-gray-100 rounded-md p-3"
            >
              <span className="flex items-center gap-8 justify-between">
                <p className="text-lg font-semibold">{item.endpoint}</p>
                <MdArrowOutward className="w-5 h-5 text-black" />
              </span>
            </Link>
          ))}
        </div> */}

        <span className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Webhooks</h2>
          <p>
            Webhooks receive messages based on events triggered in the system,
            they are an important part of your payment integration. Webhooks are
            responsible for notifying you about events that happen on your
            accounts, such as pending, successful, or failed transactions.
          </p>
          <p>
            You can use Webhooks to configure and receive notifications when a
            specific event occurs. When one of these events is triggered, we
            send a POST payload in JSON which contains the details about the
            event, to the webhook&apos;s configured URL. Setting up a webhook
            allows us to notify you when these payments are completed.
          </p>
          <p>Purfi sends webhooks for</p>
          <ul className="list-inside list-disc pl-4">
            <li>Collection</li>
            <li>Transfers/Disbursement</li>
          </ul>
        </span>
      </div>
    </main>
  );
};

export default DevGuideCategory;
