"use client";

import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import { TbCopy, TbCopyCheck } from "react-icons/tb";

const CodeBlockWithCopyButton: React.FC<{ code: string; language: string }> = ({
  code,
  language,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="relative max-h-[30rem] overflow-y-scroll">
      <SyntaxHighlighter language={language} style={dracula}>
        {code}
      </SyntaxHighlighter>
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button className="absolute top-6 right-4 mt-1 text-sm rounded focus:outline-none">
          {copied ? (
            <span className="bg-green-600 p-2 rounded-md text-white">
              Copied!
            </span>
          ) : (
            <span className="bg-blue-500 p-2 rounded-md text-white">Copy</span>
          )}
        </button>
        {/* <button className="absolute top-6 right-4 px-3 py-1 bg-blue-500 text-sm text-white rounded focus:outline-none">
          {copied ? "Copied!" : "Copy"}
        </button> */}
      </CopyToClipboard>
    </div>
  );
};

export default CodeBlockWithCopyButton;
