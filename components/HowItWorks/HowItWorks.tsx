import Link from "next/link";
import React from "react";

const HowItWorks = () => {
  return (
    <main className="flex max-h-screen max-w-[800px] overflow-y-scroll flex-col justify-between p-4 md:p-8">
      <div className="flex flex-col gap-8">
        <span className="text-sm font-medium">
          <Link href="/category/getting-started" className="text-gray-400">
            Getting Started
          </Link>{" "}
          / {""}
          <Link href="" className="text-[#3D5FE3]">
            How It Works
          </Link>
        </span>
        <div>
          <h2 className="text-3xl font-semibold">How It Works</h2>
        </div>
      </div>
    </main>
  );
};

export default HowItWorks;
