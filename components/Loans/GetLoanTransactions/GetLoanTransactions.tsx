"use client";

import CodeBlockWithCopyButton from "@/components/CodeBlockWithCopyButton/CodeBlockWithCopyButton";
import Link from "next/link";
import React, { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

const GetLoanTransactions = () => {
  const request = `
  curl --location 'https://oapi.pursfinance.com/api/v1/live-central/loans/transactions' 
--header 'x-api-key: test_eyJuYW1lIjoiYXV0aGVudGljIiwiaXNfYWN0aXZlIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2MzUiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2NTIiLCJzZXJ2aWNlX2lkIjoxLCJ1c2VyX2lkIjoxLCJzZXJ2aWNlX25hbWUiOiJsb2FuX3NlcnZpY2UifQ'
  `;

  const response = `
  {
    "message": "success",
    "data": [
      {
        "reference": "901db288-9f86-40af-be0e-e6cc73b7dd37",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "d815fd0956094eeda5b4927854dfe02e",
        "tx_type": "",
        "currency": "NGN",
        "amount": "500.0",
        "status": "success"
      },
      {
        "reference": "a1d79f76f3364bd783e0361714153a35",
        "tx_type": "",
        "currency": "NGN",
        "amount": "500.0",
        "status": "success"
      },
      {
        "reference": "a250acf4732a4cd8a61c25916b2728f0",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "45bd55708a084abe8840ff41dcf71728",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "51878500c9774348ae4d4c2e4fb10800",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "c29dce63c5c249a98587b6b9a71e2ebe",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "014bf8d5e62d442b80671a9710f2e1f7",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "3f109ba8777f4d27981473f816d4bb3e",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "569264478fb94e8a8bdfd96650c47bf9",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "387c07e2b30e4af48ba8a70bc2aca11f",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "6740b18b8946427b9de7d87f78104f55",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "6095d014a087484497966d0898639dd7",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "d249a4cbba9f41ce8ca4804c07f004ac",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "683530b6f29a4ad3b515c03faf094bf3",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "9146974eb43b4dffa83c27305ab51b15",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "dbb8e4dca452470896c9fd66f1ccefa1",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "529a859b75cf4d05af6a55195f3258fe",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "30e90d93e4d74ebd86547a1a9628859a",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "2343f48044a14768885b3447b6b90353",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "83318fda5ff143fb88939feb6b6c77d4",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "4ab725c0a7034a9cb9b2d24d41162b18",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "1788a16529144528998a3cd37bcb92cf",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "ad1eccb97b2a4950a3b4e13f5c24d617",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "715d235b9944400486d6bc4740f45ffa",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "77a168e8ee2748f0b412187c73e22980",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "c640a61dae1c4ef0859f113fcac87653",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "2b1ffaa106b24d9981a0cceb4f6cd383",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "6f292b3b5f384924835497808b85a4ab",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "8f3157c7306f44b6a76ff0a83442e343",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "5cc28cdce856467782aa0c2f53cf1cee",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "6c9c9ce33cab426296a5d4d44265a6a1",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "24cf3688222c4fcebcb1548a4563df3d",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "cfb6dbe8d64a4f1ca03c41070290b850",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "0ef6bdacd60c49f2bc342294d227af41",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "d7c8192a2cb54858a624a97813ce61b1",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "d664a1f0f5b64b38a978e4d299dd1dff",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "b57495ee3a79484a9a5ce5df959c2d24",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "c4df668274a64007b352f51dfc3359b1",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "77439358450c46ae8cdfb9f89ab8ba63",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "4945b8196ba04df196b34106bdf32a60",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "367ff2a3b38a4678859468a562e9e62b",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "185762afde9249779b4fd1867e8ff778",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "d0628abca1c84ee6bfb20458132ffc84",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "340ee7dd74ef4360908e17bf1b7bdaf4",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "7b8847d2f52d42b3b8c8f216704115d0",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "af35b35c9eef491a9012c6f24732c2b6",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "9e5a4f5f1b0f49f58117a56d40291505",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "ccdb0c1f8f9a4295a34beeac33bd0e2b",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "be17e1c9019c45eb86943df8761c8521",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "1ba78d13ec2045c88305f7288eb336ff",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "33ddcda6a0fc4ab1a123079db17f32a4",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "1dd66e280f41409c9a02810599faaeae",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "72a8dd43c036451b8403aff2b29df231",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000990.0",
        "status": "pending"
      },
      {
        "reference": "de94ca885e7c46e1854887b5fb44c3b5",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "1d4bad0dd9094a27a74e377807617b06",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "f4d88c757ea44ba88b11cf6718386ccd",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "09ba450f379c4a33be88f501d3cac2a3",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "7c0c690c3462420ba9e79a5e4324862c",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "0afb0bded1984c3d92d63c55d28068de",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "7a997d7c57b749d785edcf0929ed170a",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "f8a4d08fd1e24b33a152cff34942c137",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "a009f53d22ee41df9b780d1509139772",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "c60846e628d047a0b9a5bb9b89f06b8d",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "d07e41c666f248f6a84ebf7628ebf20b",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "5a86657f818649948859c9cde3225c7c",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "75242a8792404be2b4972be4f06ce9ce",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "b5d9c8ee784a4421b50104c3aaeac32c",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "9b8ae5c00ddf4e429493cc6b50396a67",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "af46f16563d449fea7a9aa3f9e0bfec8",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "ca4b3bc1cb7b4970b16c7bca63927941",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "b7c8f9f92398481982c7b9ca12dee08e",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "65a434daee464b4b81a38427b3d7229c",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "ced5e5b16e4440e1973360d827237dfd",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "678bc86a59074df5889f527c3caa8352",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "59d8bad0eadb4ed4a5e4e1447a67e12f",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "b7c42deeba6242d7adcab85c09d5ce10",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "f1cb2789efe74ca5adcea07d280ee188",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "c5a765e08672452988e162a9dd427634",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "346899c5410d48b0bba1e2de0dc6d657",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "b3d48887614f479e9eca4770504dbdbc",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "cf360de5dc3e4fe6892bb23358bf7c50",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "dc72007f1926462c81e62cbcb2d59d38",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "9d14968e2002480193591482057ac503",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "dee003cdaf184c59917bf9b20d9df45c",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "7cd70493d98c4db0a8f43c1ca2e37399",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "c46e05e1310941c78ada5adfc7d610dc",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "9dcaa558d40f4b6e887195200a8ce58e",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "317e5a492f724f3584a7cdd9073946ae",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "dd2cda2f9fed4a24a5ae5e242eb0e360",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "11201d6f44a9439e8d22bd05993aa93e",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "dff8fe2fbac745a9b6ab03ed5142e2a9",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "59be573ab8eb478cbe79ca4c3d20796f",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "3dff0c84969f4d10a1b70d05ed4259c8",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "2fed8170a7eb46ea96775f15d77f1f52",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "9a19da502fec4339b9d4c2aeb1e52256",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "a8aa8021b1df4574baba8af6cac63538",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "5b9a1f1087a24c73a60e05735fd95d21",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "487ed33f7db7473ba18bd4f41558ed8b",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "c13006edc1984c74980fd52c4ba29c24",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "ba286992e3cf45a29fe5bc07298e0bb1",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "277541b9002f46f3910b02db5684c541",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "ce6cf5c89ead4072a7d32f8315a2355c",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1000.0",
        "status": "pending"
      },
      {
        "reference": "c5ef3a1ac86d4bd2942365024836b89a",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10050.0",
        "status": "pending"
      },
      {
        "reference": "e174923d71fb42569bcd4b77b1f25fbb",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10050.0",
        "status": "pending"
      },
      {
        "reference": "40b72d0296a04904a0c74dbbfee7443a",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10050.0",
        "status": "pending"
      },
      {
        "reference": "a2b305eca9884b11a99f4228aa70ebb9",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10050.0",
        "status": "pending"
      },
      {
        "reference": "201f41d99ac34518a3e3c8554653156c",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10050.0",
        "status": "pending"
      },
      {
        "reference": "290f98f7527542bea867319f50e3fc29",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10050.0",
        "status": "pending"
      },
      {
        "reference": "a458fbdde1534ea4924ad967b82f6894",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10050.0",
        "status": "pending"
      },
      {
        "reference": "451bf5fdebb340938ee5d30a6e930e38",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10050.0",
        "status": "pending"
      },
      {
        "reference": "ede7b349dfa24ac88deae5c328fb2b9b",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1454000.0",
        "status": "pending"
      },
      {
        "reference": "5613168b955d45a3bebdcb11ed8e8839",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1454000.0",
        "status": "pending"
      },
      {
        "reference": "a1da37cf58f44a73b72bcacad7c78be3",
        "tx_type": "",
        "currency": "NGN",
        "amount": "1454000.0",
        "status": "pending"
      },
      {
        "reference": "ce14320a291945b29511a5aed366625a",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100000.0",
        "status": "pending"
      },
      {
        "reference": "2a72ff2e147d4ed4aab1f9ebe3835c37",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100000.0",
        "status": "pending"
      },
      {
        "reference": "118e8201fcd647afaa01ae09f19c6aa2",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100000.0",
        "status": "pending"
      },
      {
        "reference": "9e0f84b09cce4a35ad1308da2136c802",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100000.0",
        "status": "pending"
      },
      {
        "reference": "14eb13e58e134a12904a3b28786ae7b3",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100000.0",
        "status": "pending"
      },
      {
        "reference": "52c1cb922e8c466697b433c58668a725",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100000.0",
        "status": "pending"
      },
      {
        "reference": "a2e91cd8841143c38a58a8746cf7d2a4",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100000.0",
        "status": "pending"
      },
      {
        "reference": "8436483911d54844b81d0b5bee5eee06",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100000.0",
        "status": "pending"
      },
      {
        "reference": "9cc2894edddc43248ec24d456ca64fda",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100000.0",
        "status": "pending"
      },
      {
        "reference": "c717de23b43b446dbfb1a4234c1e7b59",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100000.0",
        "status": "pending"
      },
      {
        "reference": "ca4af95e9cf84db99f90ac86d3115fdb",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100000.0",
        "status": "pending"
      },
      {
        "reference": "5a17ce165dd04cbb80e53ad6c027e675",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "35ac272ed51442058f9ce522235dd979",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "3ed4611eced44cf0935763677cd385d0",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
      },
      {
        "reference": "5f14bca4c7a0432190db08d4aa69dbf7",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "d0be86d112f94f55b4fdd68388b01c86",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "de0303c35d19402d9f5465e7784aa2a7",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10.0",
        "status": "pending"
      },
      {
        "reference": "15f39e81cac24eb496b63749d9328183",
        "tx_type": "",
        "currency": "NGN",
        "amount": "2000.0",
        "status": "pending"
      },
      {
        "reference": "b40892c6b91547b5903cda64e70a8730",
        "tx_type": "",
        "currency": "NGN",
        "amount": "2000.0",
        "status": "pending"
      },
      {
        "reference": "7c67ad5189414deb8b04390be80376c3",
        "tx_type": "",
        "currency": "NGN",
        "amount": "100.0",
        "status": "pending"
      },
      {
        "reference": "5eb244390ca442ae9b7bb3bb2f77e3da",
        "tx_type": "",
        "currency": "NGN",
        "amount": "10000.0",
        "status": "pending"
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
            Get loan transactions
          </Link>
        </span>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold flex gap-4 items-center">
            <span className="text-gray-400 text-base">GET</span>
            Get loan transactions
          </h2>

          {/* <CodeBlockWithCopyButton code={link} language="text" /> */}

          <div className="overflow-hidden">
            <CopyBlock
              text={`https://oapi.pursfinance.com/api/v1/live-central/loans/transactions`}
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

export default GetLoanTransactions;
