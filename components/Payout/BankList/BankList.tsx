"use client";

import CodeBlockWithCopyButton from "@/components/CodeBlockWithCopyButton/CodeBlockWithCopyButton";
import Link from "next/link";
import React, { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

const BankList = () => {
  const request = `
  curl --location 'https://oapi.pursfinance.com/api/v1/live-central/bank-list' 
--header 'X-API-KEY: test_eyJuYW1lIjoiYXV0aGVudGljIiwiaXNfYWN0aXZlIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2MzUiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNS0wMlQwODozMDowOC45NTg2NTIiLCJzZXJ2aWNlX2lkIjoxLCJ1c2VyX2lkIjoxLCJzZXJ2aWNlX25hbWUiOiJsb2FuX3NlcnZpY2UifQ'
  `;

  const response = `
  {
    "status": "success",
    "status_code": 200,
    "message": "success",
    "data": [
      {
        "bank_code": "110005",
        "bank_name": "3LINE CARD MANAGEMENT LIMITED"
      },
      {
        "bank_code": "120001",
        "bank_name": "9 PAYMENT SOLUTIONS BANK"
      },
      {
        "bank_code": "050005",
        "bank_name": "AAA FINANCE AND INVESTMENT COMPANY LIMITED"
      },
      {
        "bank_code": "090270",
        "bank_name": "AB MICROFINANCE BANK"
      },
      {
        "bank_code": "070010",
        "bank_name": "ABBEY MORTGAGE BANK"
      },
      {
        "bank_code": "090260",
        "bank_name": "ABOVE ONLY MICROFINANCE BANK"
      },
      {
        "bank_code": "090197",
        "bank_name": "ABU MICROFINANCE BANK"
      },
      {
        "bank_code": "090545",
        "bank_name": "ABULESORO MICROFINANCE BANK"
      },
      {
        "bank_code": "090202",
        "bank_name": "ACCELEREX NETWORK LIMITED"
      },
      {
        "bank_code": "000014",
        "bank_name": "ACCESS BANK"
      },
      {
        "bank_code": "100013",
        "bank_name": "ACCESS MONEY"
      },
      {
        "bank_code": "100052",
        "bank_name": "ACCESS YELLO & BETA"
      },
      {
        "bank_code": "000005",
        "bank_name": "ACCESS(DIAMOND) BANK"
      },
      {
        "bank_code": "090134",
        "bank_name": "ACCION MICROFINANCE BANK"
      },
      {
        "bank_code": "000109",
        "bank_name": "ADA MICROFINANCE BANK"
      },
      {
        "bank_code": "090160",
        "bank_name": "ADDOSSER MICROFINANCE BANK"
      },
      {
        "bank_code": "090268",
        "bank_name": "ADEYEMI COLLEGE STAFF MICROFINANCE BANK"
      },
      {
        "bank_code": "090155",
        "bank_name": "ADVANS LA FAYETTE  MICROFINANCE BANK"
      },
      {
        "bank_code": "090292",
        "bank_name": "AFEKHAFE MICROFINANCE BANK"
      },
      {
        "bank_code": "100028",
        "bank_name": "AG MORTGAGE BANK"
      },
      {
        "bank_code": "090371",
        "bank_name": "AGOSASA MICROFINANCE BANK"
      },
      {
        "bank_code": "090561",
        "bank_name": "AKUCHUKWU MICROFINANCE BANK"
      },
      {
        "bank_code": "090133",
        "bank_name": "AL-BARAKAH MICROFINANCE BANK"
      },
      {
        "bank_code": "090259",
        "bank_name": "ALEKUN MICROFINANCE BANK"
      },
      {
        "bank_code": "090297",
        "bank_name": "ALERT MICROFINANCE BANK"
      },
      {
        "bank_code": "090277",
        "bank_name": "AL-HAYAT MICROFINANCE BANK"
      },
      {
        "bank_code": "090131",
        "bank_name": "ALLWORKERS MICROFINANCE BANK"
      },
      {
        "bank_code": "090548",
        "bank_name": "ALLY MICROFINANCE BANK"
      },
      {
        "bank_code": "090169",
        "bank_name": "ALPHA KAPITAL MICROFINANCE BANK"
      },
      {
        "bank_code": "090489",
        "bank_name": "ALVANA MICROFINANCE BANK"
      },
      {
        "bank_code": "090394",
        "bank_name": "AMAC MICROFINANCE BANK"
      },
      {
        "bank_code": "090180",
        "bank_name": "AMJU UNIQUE MICROFINANCE BANK"
      },
      {
        "bank_code": "090116",
        "bank_name": "AMML MICROFINANCE BANK"
      },
      {
        "bank_code": "090529",
        "bank_name": "AMPERSAND MICROFINANCE BANK"
      },
      {
        "bank_code": "090476",
        "bank_name": "ANCHORAGE MICROFINANCE BANK"
      },
      {
        "bank_code": "090143",
        "bank_name": "APEKS MICROFINANCE BANK"
      },
      {
        "bank_code": "090376",
        "bank_name": "APPLE MICROFINANCE BANK"
      },
      {
        "bank_code": "090282",
        "bank_name": "ARISE MICROFINANCE BANK"
      },
      {
        "bank_code": "090001",
        "bank_name": "ASO SAVINGS"
      },
      {
        "bank_code": "090544",
        "bank_name": "ASPIRE MICROFINANCE BANK"
      },
      {
        "bank_code": "090287",
        "bank_name": "ASSETMATRIX MICROFINANCE BANK"
      },
      {
        "bank_code": "090172",
        "bank_name": "ASTRAPOLARIS MICROFINANCE BANK"
      },
      {
        "bank_code": "090451",
        "bank_name": "ATBU MICROFINANCE BANK"
      },
      {
        "bank_code": "090264",
        "bank_name": "AUCHI MICROFINANCE BANK"
      },
      {
        "bank_code": "090478",
        "bank_name": "AVUENEGBE MICROFINANCE BANK"
      },
      {
        "bank_code": "090188",
        "bank_name": "BAINES CREDIT MICROFINANCE BANK"
      },
      {
        "bank_code": "090563",
        "bank_name": "BALERA MICROFINANCE BANK"
      },
      {
        "bank_code": "090181",
        "bank_name": "BALOGUN FULANI MICROFINANCE BANK"
      },
      {
        "bank_code": "090326",
        "bank_name": "BALOGUN GAMBARI MICROFINANCE BANK"
      },
      {
        "bank_code": "090425",
        "bank_name": "BANEX MICROFINANCE BANK"
      },
      {
        "bank_code": "000107",
        "bank_name": "BAOBAB MICROFINANCE BANK"
      },
      {
        "bank_code": "090316",
        "bank_name": "BAYERO UNIVERSITY MICROFINANCE BANK"
      },
      {
        "bank_code": "090127",
        "bank_name": "BC KASH MICROFINANCE BANK"
      },
      {
        "bank_code": "090336",
        "bank_name": "BIPC MICROFINANCE BANK"
      },
      {
        "bank_code": "090555",
        "bank_name": "BISHOPGATE MICROFINANCE BANK"
      },
      {
        "bank_code": "090117",
        "bank_name": "BOCTRUST MICROFINANCE BANK LIMITED"
      },
      {
        "bank_code": "090444",
        "bank_name": "BOI MICROFINANCE BANK"
      },
      {
        "bank_code": "090319",
        "bank_name": "BONGHE MICROFINANCE BANK"
      },
      {
        "bank_code": "090395",
        "bank_name": "BORGU  MICROFINANCE BANK"
      },
      {
        "bank_code": "090454",
        "bank_name": "BORSTAL MICROFINANCE BANK"
      },
      {
        "bank_code": "090176",
        "bank_name": "BOSAK MICROFINANCE BANK"
      },
      {
        "bank_code": "090148",
        "bank_name": "BOWEN MICROFINANCE BANK"
      },
      {
        "bank_code": "070015",
        "bank_name": "BRENT MORTGAGE BANK"
      },
      {
        "bank_code": "090293",
        "bank_name": "BRETHREN MICROFINANCE BANK"
      },
      {
        "bank_code": "090393",
        "bank_name": "BRIDGEWAY MICROFINANACE BANK"
      },
      {
        "bank_code": "090308",
        "bank_name": "BRIGHTWAY MICROFINANCE BANK"
      },
      {
        "bank_code": "090568",
        "bank_name": "BROADVIEW MICROFINANCE BANK"
      },
      {
        "bank_code": "090406",
        "bank_name": "BUSINESS SUPPORT MICROFINANCE BANK"
      },
      {
        "bank_code": "090415",
        "bank_name": "CALABAR MICROFINANCE BANK"
      },
      {
        "bank_code": "090445",
        "bank_name": "CAPSTONE MICROFINANCE BANK"
      },
      {
        "bank_code": "100026",
        "bank_name": "CARBON"
      },
      {
        "bank_code": "090360",
        "bank_name": "CASHCONNECT MICROFINANCE BANK"
      },
      {
        "bank_code": "090498",
        "bank_name": "CATLAND MICROFINANCE BANK"
      },
      {
        "bank_code": "090562",
        "bank_name": "CEDAR MICROFINANCE BANK"
      },
      {
        "bank_code": "100005",
        "bank_name": "CELLULANT"
      },
      {
        "bank_code": "090154",
        "bank_name": "CEMCS MICROFINANCE BANK"
      },
      {
        "bank_code": "000028",
        "bank_name": "CENTRAL BANK OF NIGERIA"
      },
      {
        "bank_code": "100015",
        "bank_name": "CHAMS MOBILE"
      },
      {
        "bank_code": "090397",
        "bank_name": "CHANELLE MICROFINANCE BANK"
      },
      {
        "bank_code": "090470",
        "bank_name": "CHANGHAN RTS MICROFINANCE BANK"
      },
      {
        "bank_code": "090440",
        "bank_name": "CHERISH MICROFINANCE BANK"
      },
      {
        "bank_code": "090416",
        "bank_name": "CHIBUEZE MICROFINANCE BANK"
      },
      {
        "bank_code": "090141",
        "bank_name": "CHIKUM MICROFINANCE BANK"
      },
      {
        "bank_code": "090490",
        "bank_name": "CHUKWUNENYE MICROFINANCE BANK"
      },
      {
        "bank_code": "090144",
        "bank_name": "CIT MICROFINANCE BANK"
      },
      {
        "bank_code": "000009",
        "bank_name": "CITI BANK"
      },
      {
        "bank_code": "090254",
        "bank_name": "COALCAMP MICROFINANCE BANK"
      },
      {
        "bank_code": "090374",
        "bank_name": "COASTLINE MICROFINANCE BANK"
      },
      {
        "bank_code": "090530",
        "bank_name": "CONFIDENCE MICROFINANCE BANK"
      },
      {
        "bank_code": "090553",
        "bank_name": "CONSISTENT TRUST MICROFINANCE BANK"
      },
      {
        "bank_code": "090130",
        "bank_name": "CONSUMER MICROFINANCE BANK"
      },
      {
        "bank_code": "070021",
        "bank_name": "COOPERATIVE MORTGAGE BANK"
      },
      {
        "bank_code": "090365",
        "bank_name": "CORESTEP MICROFINANCE BANK"
      },
      {
        "bank_code": "060001",
        "bank_name": "CORONATION MERCHANT BANK"
      },
      {
        "bank_code": "050001",
        "bank_name": "COUNTY FINANCE LIMITED"
      },
      {
        "bank_code": "070006",
        "bank_name": "COVENANT MFB"
      },
      {
        "bank_code": "090159",
        "bank_name": "CREDIT AFRIQUE MICROFINANCE BANK"
      },
      {
        "bank_code": "090526",
        "bank_name": "CRESCENT MICROFINANCE BANK"
      },
      {
        "bank_code": "090429",
        "bank_name": "CROSS RIVER MICROFINANCE BANK"
      },
      {
        "bank_code": "110017",
        "bank_name": "CROWDFORCE MICROFINANCE BANK"
      },
      {
        "bank_code": "090414",
        "bank_name": "CRUTECH MICROFINANCE BANK"
      },
      {
        "bank_code": "110014",
        "bank_name": "CYBERSPACE LIMITED"
      },
      {
        "bank_code": "090391",
        "bank_name": "DAVODANI  MICROFINANCE BANK"
      },
      {
        "bank_code": "090167",
        "bank_name": "DAYLIGHT MICROFINANCE BANK"
      },
      {
        "bank_code": "070023",
        "bank_name": "DELTA TRUST MORTGAGE BANK"
      },
      {
        "bank_code": "090294",
        "bank_name": "EAGLE FLIGHT MICROFINANCE BANK"
      },
      {
        "bank_code": "100021",
        "bank_name": "EARTHOLEUM"
      },
      {
        "bank_code": "090156",
        "bank_name": "E-BARCS MICROFINANCE BANK"
      },
      {
        "bank_code": "090427",
        "bank_name": "EBONYI STATE MICROFINANCE BANK"
      },
      {
        "bank_code": "000010",
        "bank_name": "ECOBANK"
      },
      {
        "bank_code": "100008",
        "bank_name": "ECOBANK XPRESS ACCOUNT"
      },
      {
        "bank_code": "100030",
        "bank_name": "ECOMOBILE"
      },
      {
        "bank_code": "090310",
        "bank_name": "EDFIN MICROFINANCE BANK"
      },
      {
        "bank_code": "090097",
        "bank_name": "EKONDO MICROFINANCE BANK"
      },
      {
        "bank_code": "090389",
        "bank_name": "EK-RELIABLE MICROFINANCE BANK"
      },
      {
        "bank_code": "090273",
        "bank_name": "EMERALD MICROFINANCE BANK"
      },
      {
        "bank_code": "090114",
        "bank_name": "EMPIRE TRUST MICROFINANCE BANK"
      },
      {
        "bank_code": "050012",
        "bank_name": "ENCO FINANCE COMPANY LTD"
      },
      {
        "bank_code": "000019",
        "bank_name": "ENTERPRISE BANK"
      },
      {
        "bank_code": "090189",
        "bank_name": "ESAN MICROFINANCE BANK"
      },
      {
        "bank_code": "090166",
        "bank_name": "ESO-E MICROFINANCE BANK"
      },
      {
        "bank_code": "100006",
        "bank_name": "eTRANZACT"
      },
      {
        "bank_code": "090304",
        "bank_name": "EVANGEL MICROFINANCE BANK"
      },
      {
        "bank_code": "090332",
        "bank_name": "EVERGREEN MICROFINANCE BANK"
      },
      {
        "bank_code": "090541",
        "bank_name": "EXCELLENT MICROFINANCE BANK"
      },
      {
        "bank_code": "090328",
        "bank_name": "EYOWO"
      },
      {
        "bank_code": "090551",
        "bank_name": "FairMoney"
      },
      {
        "bank_code": "090330",
        "bank_name": "FAME MICROFINANCE BANK"
      },
      {
        "bank_code": "090179",
        "bank_name": "FAST MICROFINANCE BANK"
      },
      {
        "bank_code": "060002",
        "bank_name": "FBNQUEST MERCHANT BANK"
      },
      {
        "bank_code": "100031",
        "bank_name": "FCMB MOBILE"
      },
      {
        "bank_code": "090290",
        "bank_name": "FCT MICROFINANCE BANK"
      },
      {
        "bank_code": "090398",
        "bank_name": "FEDERAL POLYTECHNIC NEKEDE MICROFINANCE BANK"
      },
      {
        "bank_code": "090318",
        "bank_name": "FEDERAL UNIVERSITY DUTSE MICROFINANCE BANK"
      },
      {
        "bank_code": "090482",
        "bank_name": "FEDETH MICROFINANCE BANK"
      },
      {
        "bank_code": "090298",
        "bank_name": "FEDPOLY NASARAWA MICROFINANCE BANK"
      },
      {
        "bank_code": "100001",
        "bank_name": "FETS"
      },
      {
        "bank_code": "050002",
        "bank_name": "FEWCHORE FINANCE COMPANY LIMITED"
      },
      {
        "bank_code": "090153",
        "bank_name": "FFS MICROFINANCE BANK"
      },
      {
        "bank_code": "000007",
        "bank_name": "FIDELITY BANK"
      },
      {
        "bank_code": "100019",
        "bank_name": "FIDELITY MOBILE"
      },
      {
        "bank_code": "090126",
        "bank_name": "FIDFUND MICROFINANCE Bank"
      },
      {
        "bank_code": "090111",
        "bank_name": "FINATRUST MICROFINANCE BANK"
      },
      {
        "bank_code": "090400",
        "bank_name": "FINCA MICROFINANCE BANK"
      },
      {
        "bank_code": "090366",
        "bank_name": "FIRMUS MICROFINANCE BANK"
      },
      {
        "bank_code": "110004",
        "bank_name": "FIRST APPLE LIMITED"
      },
      {
        "bank_code": "000016",
        "bank_name": "FIRST BANK OF NIGERIA"
      },
      {
        "bank_code": "000003",
        "bank_name": "FIRST CITY MONUMENT BANK"
      },
      {
        "bank_code": "070014",
        "bank_name": "FIRST GENERATION MORTGAGE BANK"
      },
      {
        "bank_code": "090479",
        "bank_name": "FIRST HERITAGE MICROFINANCE BANK"
      },
      {
        "bank_code": "090285",
        "bank_name": "FIRST OPTION MICROFINANCE BANK"
      },
      {
        "bank_code": "090164",
        "bank_name": "FIRST ROYAL MICROFINANCE BANK"
      },
      {
        "bank_code": "090107",
        "bank_name": "FIRST TRUST MORTGAGE BANK PLC"
      },
      {
        "bank_code": "100014",
        "bank_name": "FIRSTMONIE WALLET"
      },
      {
        "bank_code": "110002",
        "bank_name": "FLUTTERWAVE TECHNOLOGY SOLUTIONS LIMITED"
      },
      {
        "bank_code": "090521",
        "bank_name": "FORESIGHT MICROFINANCE BANK"
      },
      {
        "bank_code": "070002",
        "bank_name": "FORTIS MICROFINANCE BANK"
      },
      {
        "bank_code": "100016",
        "bank_name": "FORTIS MOBILE"
      },
      {
        "bank_code": "090486",
        "bank_name": "FORTRESS MICROFINANCE BANK"
      },
      {
        "bank_code": "400001",
        "bank_name": "FSDH"
      },
      {
        "bank_code": "090145",
        "bank_name": "FULLRANGE MICROFINANCE BANK"
      },
      {
        "bank_code": "090438",
        "bank_name": "FUTMINNA MICROFINANCE BANK"
      },
      {
        "bank_code": "090158",
        "bank_name": "FUTO MICROFINANCE BANK"
      },
      {
        "bank_code": "090591",
        "bank_name": "GABSYN MICROFINANCE BANK"
      },
      {
        "bank_code": "090484",
        "bank_name": "GARKI MICROFINANCE BANK"
      },
      {
        "bank_code": "090168",
        "bank_name": "GASHUA MICROFINANCE BANK"
      },
      {
        "bank_code": "070009",
        "bank_name": "GATEWAY MORTGAGE BANK"
      },
      {
        "bank_code": "090475",
        "bank_name": "GIANT STRIDE MFB"
      },
      {
        "bank_code": "090411",
        "bank_name": "GIGINYA MICROFINANCE BANK"
      },
      {
        "bank_code": "090186",
        "bank_name": "GIREI MICROFINANACE BANK"
      },
      {
        "bank_code": "090441",
        "bank_name": "GIWA MICROFINANCE BANK"
      },
      {
        "bank_code": "000027",
        "bank_name": "GLOBUS BANK"
      },
      {
        "bank_code": "090278",
        "bank_name": "GLORY MICROFINANCE BANK"
      },
      {
        "bank_code": "090408",
        "bank_name": "GMB MICROFINANCE BANK"
      },
      {
        "bank_code": "090467",
        "bank_name": "GOOD NEIGHBORS MFB"
      },
      {
        "bank_code": "090495",
        "bank_name": "GOODNEWS MICROFINANCE BANK"
      },
      {
        "bank_code": "090122",
        "bank_name": "GOWANS MICROFINANCE BANK"
      },
      {
        "bank_code": "090550",
        "bank_name": "GREEN ENERGY MICROFINANCE BANK"
      },
      {
        "bank_code": "090178",
        "bank_name": "GREENBANK MICROFINANCE BANK"
      },
      {
        "bank_code": "090269",
        "bank_name": "GREENVILLE MICROFINANCE BANK"
      },
      {
        "bank_code": "060004",
        "bank_name": "GREENWICH MERCHANT BANK"
      },
      {
        "bank_code": "090195",
        "bank_name": "GROOMING MICROFINANCE BANK"
      },
      {
        "bank_code": "100009",
        "bank_name": "GT MOBILE"
      },
      {
        "bank_code": "000013",
        "bank_name": "GTBANK PLC"
      },
      {
        "bank_code": "090385",
        "bank_name": "GTI MICROFINANCE BANK"
      },
      {
        "bank_code": "090147",
        "bank_name": "HACKMAN MICROFINANCE BANK"
      },
      {
        "bank_code": "070017",
        "bank_name": "HAGGAI MORTGAGE BANK LIMITED"
      },
      {
        "bank_code": "090291",
        "bank_name": "HALALCREDIT MICROFINANCE BANK"
      },
      {
        "bank_code": "090121",
        "bank_name": "HASAL MICROFINANCE BANK"
      },
      {
        "bank_code": "090363",
        "bank_name": "HEADWAY MICROFINANCE BANK"
      },
      {
        "bank_code": "100017",
        "bank_name": "HEDONMARK"
      },
      {
        "bank_code": "000020",
        "bank_name": "HERITAGE BANK"
      },
      {
        "bank_code": "090418",
        "bank_name": "HIGHLAND MICROFINANCE BANK"
      },
      {
        "bank_code": "070024",
        "bank_name": "HOMEBASE MORTGAGE BANK"
      },
      {
        "bank_code": "120002",
        "bank_name": "HOPE PAYMENT SERVICE BANK"
      },
      {
        "bank_code": "090439",
        "bank_name": "IBETO MICROFINANCE BANK"
      },
      {
        "bank_code": "090118",
        "bank_name": "IBILE MICROFINANCE BANK"
      },
      {
        "bank_code": "090519",
        "bank_name": "IBOM FADAMA MICROFINANCE BANK"
      },
      {
        "bank_code": "090520",
        "bank_name": "IC GLOBAL MICROFINANCE BANK"
      },
      {
        "bank_code": "090546",
        "bank_name": "IJEBU-IFE MICROFINANCE BANK"
      },
      {
        "bank_code": "090324",
        "bank_name": "IKENNE MICROFINANCE BANK"
      },
      {
        "bank_code": "090279",
        "bank_name": "IKIRE MICROFINANCE BANK"
      },
      {
        "bank_code": "090571",
        "bank_name": "ILARO POLY MICROFINANCE BANK"
      },
      {
        "bank_code": "090370",
        "bank_name": "ILISAN MICROFINANCE BANK"
      },
      {
        "bank_code": "090430",
        "bank_name": "ILORA MICROFINANCE BANK"
      },
      {
        "bank_code": "090350",
        "bank_name": "ILORIN MICROFINANCE BANK"
      },
      {
        "bank_code": "090258",
        "bank_name": "IMO STATE MICROFINANCE BANK"
      },
      {
        "bank_code": "090417",
        "bank_name": "IMOWO MICROFINANCE BANK"
      },
      {
        "bank_code": "100024",
        "bank_name": "IMPERIAL HOMES MORTGAGE BANK"
      },
      {
        "bank_code": "090157",
        "bank_name": "INFINITY MICROFINANCE BANK"
      },
      {
        "bank_code": "070016",
        "bank_name": "INFINITY TRUST MORTGAGE BANK"
      },
      {
        "bank_code": "100029",
        "bank_name": "INNOVECTIVES KESH"
      },
      {
        "bank_code": "090434",
        "bank_name": "INSIGHTS MICROFINANCE BANK"
      },
      {
        "bank_code": "100027",
        "bank_name": "INTELLIFIN"
      },
      {
        "bank_code": "090386",
        "bank_name": "INTERLAND MICROFINANCE BANK"
      },
      {
        "bank_code": "110003",
        "bank_name": "INTERSWITCH LIMITED"
      },
      {
        "bank_code": "090493",
        "bank_name": "IPERU MICROFINANCE BANK"
      },
      {
        "bank_code": "090149",
        "bank_name": "IRL MICROFINANCE BANK"
      },
      {
        "bank_code": "090377",
        "bank_name": "ISALEOYO MICROFINANCE BANK"
      },
      {
        "bank_code": "090428",
        "bank_name": "ISHIE MICROFINANCE BANK"
      },
      {
        "bank_code": "090543",
        "bank_name": "IWOAMA MICROFINANCE BANK"
      },
      {
        "bank_code": "090337",
        "bank_name": "IYE OKIN MICROFINANCE BANK LTD"
      },
      {
        "bank_code": "090421",
        "bank_name": "IZON MICROFINANCE BANK"
      },
      {
        "bank_code": "000006",
        "bank_name": "JAIZ BANK"
      },
      {
        "bank_code": "090352",
        "bank_name": "JESSEFIELD MICROFINANCE BANK"
      },
      {
        "bank_code": "090003",
        "bank_name": "JUBILEE-LIFE MORTGAGE BANK"
      },
      {
        "bank_code": "090320",
        "bank_name": "KADPOLY MICROFINANCE BANK"
      },
      {
        "bank_code": "090554",
        "bank_name": "KAYVEE MICROFINANCE BANK"
      },
      {
        "bank_code": "090549",
        "bank_name": "KC MICROFINANCE BANK"
      },
      {
        "bank_code": "090191",
        "bank_name": "KCMB MICROFINANCE BANK"
      },
      {
        "bank_code": "100036",
        "bank_name": "KEGOW(CHAMSMOBILE)"
      },
      {
        "bank_code": "000002",
        "bank_name": "KEYSTONE BANK"
      },
      {
        "bank_code": "090487",
        "bank_name": "KINGDOM COLLEGE MICROFINANCE BANK"
      },
      {
        "bank_code": "090299",
        "bank_name": "KONTAGORA MICROFINANCE BANK"
      },
      {
        "bank_code": "090380",
        "bank_name": "KREDI MONEY MICROFINANCE BANK"
      },
      {
        "bank_code": "090267",
        "bank_name": "KUDA MICROFINANCE BANK"
      },
      {
        "bank_code": "090450",
        "bank_name": "KWASU MICROFINANCE BANK"
      },
      {
        "bank_code": "070012",
        "bank_name": "LAGOS BUILDING AND INVESTMENT COMPANY"
      },
      {
        "bank_code": "090177",
        "bank_name": "LAPO MICROFINANCE BANK"
      },
      {
        "bank_code": "090271",
        "bank_name": "LAVENDER MICROFINANCE BANK"
      },
      {
        "bank_code": "090372",
        "bank_name": "LEGEND MICROFINANCE BANK"
      },
      {
        "bank_code": "090420",
        "bank_name": "LETSHEGO MICROFINANCE BANK"
      },
      {
        "bank_code": "090557",
        "bank_name": "LIFEGATE MICROFINANCE BANK"
      },
      {
        "bank_code": "090477",
        "bank_name": "LIGHT MICROFINANCE BANK"
      },
      {
        "bank_code": "090435",
        "bank_name": "LINKS MICROFINANCE BANK"
      },
      {
        "bank_code": "070007",
        "bank_name": "LIVINGTRUST MORTGAGE BANK PLC"
      },
      {
        "bank_code": "000029",
        "bank_name": "LOTUS BANK"
      },
      {
        "bank_code": "090265",
        "bank_name": "LOVONUS MICROFINANCE BANK"
      },
      {
        "bank_code": "100035",
        "bank_name": "M36"
      },
      {
        "bank_code": "090465",
        "bank_name": "MAIN TRUST MICROFINANCE BANK"
      },
      {
        "bank_code": "090323",
        "bank_name": "MAINLAND MICROFINANCE BANK"
      },
      {
        "bank_code": "090171",
        "bank_name": "MAINSTREET MICROFINANCE BANK"
      },
      {
        "bank_code": "090174",
        "bank_name": "MALACHY MICROFINANCE BANK"
      },
      {
        "bank_code": "090383",
        "bank_name": "MANNY MICROFINANCE BANK"
      },
      {
        "bank_code": "090410",
        "bank_name": "MARITIME MICROFINANCE BANK"
      },
      {
        "bank_code": "090423",
        "bank_name": "MAUTECH MICROFINANCE BANK"
      },
      {
        "bank_code": "090321",
        "bank_name": "MAYFAIR MICROFINANCE BANK"
      },
      {
        "bank_code": "070019",
        "bank_name": "MAYFRESH MORTGAGE BANK"
      },
      {
        "bank_code": "090280",
        "bank_name": "MEGAPRAISE MICROFINANCE BANK"
      },
      {
        "bank_code": "090432",
        "bank_name": "MEMPHIS MICROFINANCE BANK"
      },
      {
        "bank_code": "090589",
        "bank_name": "MERCURY MICROFINANCE BANK"
      },
      {
        "bank_code": "090275",
        "bank_name": "MERIDAN MFB"
      },
      {
        "bank_code": "090136",
        "bank_name": "MICROCRED MICROFINANCE BANK"
      },
      {
        "bank_code": "090113",
        "bank_name": "MICROVIS MICROFINANCE BANK"
      },
      {
        "bank_code": "090192",
        "bank_name": "MIDLAND MICROFINANCE BANK"
      },
      {
        "bank_code": "090281",
        "bank_name": "MINT-FINEX MFB"
      },
      {
        "bank_code": "090455",
        "bank_name": "MKOBO MICROFINANCE BANK"
      },
      {
        "bank_code": "100011",
        "bank_name": "MKUDI"
      },
      {
        "bank_code": "090362",
        "bank_name": "MOLUSI MICROFINANCE BANK"
      },
      {
        "bank_code": "120003",
        "bank_name": "MOMO PAYMENT SERVICE BANK"
      },
      {
        "bank_code": "090462",
        "bank_name": "MONARCH MICROFINANCE BANK"
      },
      {
        "bank_code": "100020",
        "bank_name": "MONEY BOX"
      },
      {
        "bank_code": "090129",
        "bank_name": "MONEY TRUST MICROFINANCE BANK"
      },
      {
        "bank_code": "120005",
        "bank_name": "Moneymaster PSB"
      },
      {
        "bank_code": "090405",
        "bank_name": "MONIEPOINT MICROFINANCE BANK"
      },
      {
        "bank_code": "090448",
        "bank_name": "MOYOFADE MICROFINANCE BANK"
      },
      {
        "bank_code": "090392",
        "bank_name": "MOZFIN MICROFINANCE BANK"
      },
      {
        "bank_code": "090190",
        "bank_name": "MUTUAL BENEFITS MICROFINANCE BANK"
      },
      {
        "bank_code": "090151",
        "bank_name": "MUTUAL TRUST MICROFINANCE BANK"
      },
      {
        "bank_code": "090152",
        "bank_name": "NAGARTA MICROFINANCE BANK"
      },
      {
        "bank_code": "090128",
        "bank_name": "NDIORAH MICROFINANCE BANK"
      },
      {
        "bank_code": "090329",
        "bank_name": "NEPTUNE MICROFINANCE BANK"
      },
      {
        "bank_code": "090205",
        "bank_name": "NEW DAWN MICROFINANCE BANK"
      },
      {
        "bank_code": "090378",
        "bank_name": "NEW GOLDEN PASTURES MICROFINANCE BANK"
      },
      {
        "bank_code": "090108",
        "bank_name": "NEW PRUDENTIAL BANK"
      },
      {
        "bank_code": "090459",
        "bank_name": "NICE MICROFINANCE BANK"
      },
      {
        "bank_code": "090505",
        "bank_name": "NIGERIA PRISONS MICROFINANCE BANK"
      },
      {
        "bank_code": "090263",
        "bank_name": "NIGERIAN NAVY MICROFINANCE BANK"
      },
      {
        "bank_code": "999999",
        "bank_name": "NIP VIRTUAL BANK"
      },
      {
        "bank_code": "090194",
        "bank_name": "NIRSAL NATIONAL MICROFINANCE BANK"
      },
      {
        "bank_code": "090283",
        "bank_name": "NNEW WOMEN MICROFINANCE BANK"
      },
      {
        "bank_code": "100032",
        "bank_name": "NOWNOW DIGITAL SYSTEMS LIMITED"
      },
      {
        "bank_code": "060003",
        "bank_name": "NOVA MERCHANT BANK"
      },
      {
        "bank_code": "070001",
        "bank_name": "NPF MICROFINANCE BANK"
      },
      {
        "bank_code": "090364",
        "bank_name": "NUTURE MICROFINANCE BANK"
      },
      {
        "bank_code": "090399",
        "bank_name": "NWANNEGADI MICROFINANCE BANK"
      },
      {
        "bank_code": "090437",
        "bank_name": "OAKLAND MICROFINANCE BANK"
      },
      {
        "bank_code": "090333",
        "bank_name": "OCHE MICROFINANCE BANK"
      },
      {
        "bank_code": "090119",
        "bank_name": "OHAFIA MICROFINANCE BANK"
      },
      {
        "bank_code": "090565",
        "bank_name": "OKE-ARO OREDEGBE MFB"
      },
      {
        "bank_code": "090161",
        "bank_name": "OKPOGA MICROFINANCE BANK"
      },
      {
        "bank_code": "090566",
        "bank_name": "OKUKU MICROFINANCE BANK"
      },
      {
        "bank_code": "090272",
        "bank_name": "OLABISI ONABANJO UNIVERSITY MICROFINANCE"
      },
      {
        "bank_code": "090468",
        "bank_name": "OLOFIN OWENA MICROFINANCE BANK"
      },
      {
        "bank_code": "090404",
        "bank_name": "OLOWOLAGBA MICROFINANCE BANK"
      },
      {
        "bank_code": "090471",
        "bank_name": "OLUCHUKWU MFB"
      },
      {
        "bank_code": "090460",
        "bank_name": "OLUYOLE MICROFINANCE BANK"
      },
      {
        "bank_code": "090295",
        "bank_name": "OMIYE MICROFINANCE BANK"
      },
      {
        "bank_code": "100004",
        "bank_name": "OPAY"
      },
      {
        "bank_code": "000036",
        "bank_name": "OPTIMUS BANK"
      },
      {
        "bank_code": "090492",
        "bank_name": "ORAUKWU MICROFINANCE BANK"
      },
      {
        "bank_code": "090567",
        "bank_name": "OROKAM MICROFINANCE BANK"
      },
      {
        "bank_code": "090396",
        "bank_name": "OSCOTECH MICROFINANCE BANK"
      },
      {
        "bank_code": "090456",
        "bank_name": "OSPOLY MICROFINANCE BANK"
      },
      {
        "bank_code": "090580",
        "bank_name": "OTECH MICROFINANCE BANK"
      },
      {
        "bank_code": "090542",
        "bank_name": "OTUO MICROFINANCE BANK"
      },
      {
        "bank_code": "100002",
        "bank_name": "PAGA"
      },
      {
        "bank_code": "000106",
        "bank_name": "PAGE FINANCIALS"
      },
      {
        "bank_code": "070008",
        "bank_name": "PAGE MFBank"
      },
      {
        "bank_code": "100033",
        "bank_name": "PALMPAY"
      },
      {
        "bank_code": "000030",
        "bank_name": "PARALLEX BANK"
      },
      {
        "bank_code": "090390",
        "bank_name": "PARKWAY MICROFINANCE BANK"
      },
      {
        "bank_code": "100003",
        "bank_name": "PARKWAY-READYCASH"
      },
      {
        "bank_code": "000526",
        "bank_name": "PARRALEX"
      },
      {
        "bank_code": "090317",
        "bank_name": "PATRICKGOLD MICROFINANCE BANK"
      },
      {
        "bank_code": "110001",
        "bank_name": "PAYATTITUDE ONLINE"
      },
      {
        "bank_code": "110006",
        "bank_name": "PAYSTACK PAYMENT LIMITED"
      },
      {
        "bank_code": "090402",
        "bank_name": "PEACE MICROFINANCE BANK"
      },
      {
        "bank_code": "090137",
        "bank_name": "PECANTRUST MICROFINANCE BANK"
      },
      {
        "bank_code": "090196",
        "bank_name": "PENNYWISE MICROFINANCE BANK"
      },
      {
        "bank_code": "090135",
        "bank_name": "PERSONAL TRUST MICROFINANCE BANK"
      },
      {
        "bank_code": "090165",
        "bank_name": "PETRA MICROFINANCE BANK"
      },
      {
        "bank_code": "090289",
        "bank_name": "PILLAR MICROFINANCE BANK"
      },
      {
        "bank_code": "070013",
        "bank_name": "PLATINUM MORTGAGE BANK"
      },
      {
        "bank_code": "000008",
        "bank_name": "POLARIS BANK"
      },
      {
        "bank_code": "090296",
        "bank_name": "POLYUNWANA MICROFINANCE BANK"
      },
      {
        "bank_code": "090412",
        "bank_name": "PREEMINENT MICROFINANCE BANK"
      },
      {
        "bank_code": "000031",
        "bank_name": "PREMIUM TRUST  BANK"
      },
      {
        "bank_code": "090274",
        "bank_name": "PRESTIGE MICROFINANCE BANK"
      },
      {
        "bank_code": "090481",
        "bank_name": "PRISCO MICROFINANCE BANK"
      },
      {
        "bank_code": "090499",
        "bank_name": "PRISTINE DIVITIS MICROFINANCE BANK"
      },
      {
        "bank_code": "000023",
        "bank_name": "Providus"
      },
      {
        "bank_code": "090303",
        "bank_name": "PURPLEMONEY MICROFINANCE BANK"
      },
      {
        "bank_code": "090261",
        "bank_name": "QUICKFUND MICROFINANCE BANK"
      },
      {
        "bank_code": "000024",
        "bank_name": "RAND MERCHANT BANK"
      },
      {
        "bank_code": "070011",
        "bank_name": "REFUGE MORTGAGE BANK"
      },
      {
        "bank_code": "090125",
        "bank_name": "REGENT MICROFINANCE BANK"
      },
      {
        "bank_code": "090463",
        "bank_name": "REHOBOTH MICROFINANCE BANK"
      },
      {
        "bank_code": "090173",
        "bank_name": "RELIANCE MICROFINANCE BANK"
      },
      {
        "bank_code": "090198",
        "bank_name": "RENMONEY MICROFINANCE BANK"
      },
      {
        "bank_code": "090322",
        "bank_name": "REPHIDIM MICROFINANCE BANK"
      },
      {
        "bank_code": "090132",
        "bank_name": "RICHWAY MICROFINANCE BANK"
      },
      {
        "bank_code": "090433",
        "bank_name": "RIGO MICROFINANCE BANK"
      },
      {
        "bank_code": "090515",
        "bank_name": "RIMA GROWTH PATHWAY MICROFINANCE BANK"
      },
      {
        "bank_code": "090547",
        "bank_name": "ROCKSHIELD MICROFINANCE BANK"
      },
      {
        "bank_code": "090138",
        "bank_name": "ROYAL EXCHANGE MICROFINANCE BANK"
      },
      {
        "bank_code": "090175",
        "bank_name": "RUBIES MICROFINANCE BANK"
      },
      {
        "bank_code": "090286",
        "bank_name": "SAFE HAVEN MICROFINANCE BANK"
      },
      {
        "bank_code": "090485",
        "bank_name": "SAFEGATE MICROFINANCE BANK"
      },
      {
        "bank_code": "090006",
        "bank_name": "SAFETRUST"
      },
      {
        "bank_code": "090140",
        "bank_name": "SAGAMU MICROFINANCE BANK"
      },
      {
        "bank_code": "050003",
        "bank_name": "SAGE GREY FINANCE LIMITED"
      },
      {
        "bank_code": "090513",
        "bank_name": "SEAP MICROFINANCE BANK"
      },
      {
        "bank_code": "090112",
        "bank_name": "SEED CAPITAL MICROFINANCE BANK"
      },
      {
        "bank_code": "090369",
        "bank_name": "SEEDVEST MICROFINANCE BANK"
      },
      {
        "bank_code": "090502",
        "bank_name": "SHALOM MICROFINANCE BANK"
      },
      {
        "bank_code": "090401",
        "bank_name": "SHERPERD TRUST MICROFINANCE BANK"
      },
      {
        "bank_code": "090559",
        "bank_name": "SHIELD MICROFINANCE BANK"
      },
      {
        "bank_code": "090558",
        "bank_name": "SHONGOM MICROFINANCE BANK"
      },
      {
        "bank_code": "000034",
        "bank_name": "SIGNATURE BANK"
      },
      {
        "bank_code": "090449",
        "bank_name": "SLS MICROFINANCE BANK"
      },
      {
        "bank_code": "120004",
        "bank_name": "SMARTCASH PAYMENT SERVICE BANK"
      },
      {
        "bank_code": "090506",
        "bank_name": "SOLID ALLIANZE MICROFINANCE BANK"
      },
      {
        "bank_code": "090524",
        "bank_name": "SOLIDROCK MICROFINANCE BANK"
      },
      {
        "bank_code": "090325",
        "bank_name": "SPARKLE"
      },
      {
        "bank_code": "090436",
        "bank_name": "SPECTRUM MICROFINANCE BANK"
      },
      {
        "bank_code": "100007",
        "bank_name": "STANBIC IBTC @Ease WALLET"
      },
      {
        "bank_code": "000012",
        "bank_name": "STANBIC IBTC BANK"
      },
      {
        "bank_code": "000021",
        "bank_name": "STANDARD CHARTERED BANK"
      },
      {
        "bank_code": "090162",
        "bank_name": "STANFORD MICROFINANCE BANK"
      },
      {
        "bank_code": "070022",
        "bank_name": "STB MORTGAGE BANK"
      },
      {
        "bank_code": "090262",
        "bank_name": "STELLAS MICROFINANCE BANK"
      },
      {
        "bank_code": "000001",
        "bank_name": "STERLING BANK"
      },
      {
        "bank_code": "100022",
        "bank_name": "STERLING MOBILE"
      },
      {
        "bank_code": "090340",
        "bank_name": "STOCKCORP MICROFINANCE BANK"
      },
      {
        "bank_code": "090305",
        "bank_name": "SULSPAP MICROFINANCE BANK"
      },
      {
        "bank_code": "090302",
        "bank_name": "SUNBEAM MICROFINANCE BANK"
      },
      {
        "bank_code": "000022",
        "bank_name": "SUNTRUST BANK"
      },
      {
        "bank_code": "090446",
        "bank_name": "SUPPORT MICROFINANCE BANK"
      },
      {
        "bank_code": "090564",
        "bank_name": "SUPREME MICROFINANCE BANK"
      },
      {
        "bank_code": "100023",
        "bank_name": "TAGPAY"
      },
      {
        "bank_code": "000026",
        "bank_name": "TAJ BANK"
      },
      {
        "bank_code": "090560",
        "bank_name": "TANADI MFB (CRUST)"
      },
      {
        "bank_code": "090426",
        "bank_name": "TANGERINE MONEY"
      },
      {
        "bank_code": "090115",
        "bank_name": "TCF MICROFINANCE BANK"
      },
      {
        "bank_code": "110007",
        "bank_name": "TEAMAPT LIMITED"
      },
      {
        "bank_code": "100010",
        "bank_name": "TEASY MOBILE"
      },
      {
        "bank_code": "090373",
        "bank_name": "THINK FINANCE MICROFINANCE BANK"
      },
      {
        "bank_code": "000025",
        "bank_name": "TITAN TRUST BANK"
      },
      {
        "bank_code": "100039",
        "bank_name": "TITAN-PAYSTACK"
      },
      {
        "bank_code": "090146",
        "bank_name": "TRIDENT MICROFINANCE BANK"
      },
      {
        "bank_code": "090525",
        "bank_name": "TRIPLEA MICROFINANCE BANK"
      },
      {
        "bank_code": "090327",
        "bank_name": "TRUST MICROFINANCE BANK"
      },
      {
        "bank_code": "090123",
        "bank_name": "TRUSTBANC J6 MICROFINANCE BANK LIMITED"
      },
      {
        "bank_code": "090005",
        "bank_name": "TRUSTBOND MORTGAGE BANK"
      },
      {
        "bank_code": "090276",
        "bank_name": "TRUSTFUND MICROFINANCE BANK"
      },
      {
        "bank_code": "090315",
        "bank_name": "U & C MICROFINANCE BANK"
      },
      {
        "bank_code": "090403",
        "bank_name": "UDA MICROFINANCE BANK"
      },
      {
        "bank_code": "090517",
        "bank_name": "UHURU MICROFINANCE BANK"
      },
      {
        "bank_code": "090331",
        "bank_name": "UNAAB MICROFINANCE BANK"
      },
      {
        "bank_code": "090461",
        "bank_name": "UNIBADAN MICROFINANCE BANK"
      },
      {
        "bank_code": "090266",
        "bank_name": "UNIBEN MICROFINANCE BANK"
      },
      {
        "bank_code": "090193",
        "bank_name": "UNICAL MICROFINANCE BANK"
      },
      {
        "bank_code": "090452",
        "bank_name": "UNILAG MICROFINANCE BANK"
      },
      {
        "bank_code": "090341",
        "bank_name": "UNILORIN MICROFINANCE BANK"
      },
      {
        "bank_code": "090464",
        "bank_name": "UNIMAID MICROFINANCE BANK"
      },
      {
        "bank_code": "000018",
        "bank_name": "UNION BANK"
      },
      {
        "bank_code": "000004",
        "bank_name": "UNITED BANK FOR AFRICA"
      },
      {
        "bank_code": "000011",
        "bank_name": "UNITY BANK"
      },
      {
        "bank_code": "090338",
        "bank_name": "UNIUYO MICROFINANCE BANK"
      },
      {
        "bank_code": "090251",
        "bank_name": "UNIVERSITY OF NIGERIA, NSUKKA MICROFINANCE BANK"
      },
      {
        "bank_code": "110009",
        "bank_name": "VENTURE GARDEN NIGERIA LIMITED"
      },
      {
        "bank_code": "090474",
        "bank_name": "VERDANT MICROFINANCE BANK"
      },
      {
        "bank_code": "090110",
        "bank_name": "VFD MFB"
      },
      {
        "bank_code": "090150",
        "bank_name": "VIRTUE MICROFINANCE BANK"
      },
      {
        "bank_code": "090139",
        "bank_name": "VISA MICROFINANCE BANK"
      },
      {
        "bank_code": "100012",
        "bank_name": "VT NETWORKS"
      },
      {
        "bank_code": "000017",
        "bank_name": "WEMA BANK"
      },
      {
        "bank_code": "090120",
        "bank_name": "WETLAND  MICROFINANCE BANK"
      },
      {
        "bank_code": "090124",
        "bank_name": "XSLNCE MICROFINANCE BANK"
      },
      {
        "bank_code": "090466",
        "bank_name": "YCT MICROFINANCE BANK"
      },
      {
        "bank_code": "090142",
        "bank_name": "YES MICROFINANCE BANK"
      },
      {
        "bank_code": "090252",
        "bank_name": "YOBE MICROFINANCE  BANK"
      },
      {
        "bank_code": "000015",
        "bank_name": "ZENITH BANK"
      },
      {
        "bank_code": "100034",
        "bank_name": "ZENITH EASY WALLET"
      },
      {
        "bank_code": "100018",
        "bank_name": "ZENITH MOBILE"
      },
      {
        "bank_code": "090504",
        "bank_name": "ZIKORA MICROFINANCE BANK"
      },
      {
        "bank_code": "100025",
        "bank_name": "ZINTERNET - KONGAPAY"
      }
    ]
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
            Bank List
          </Link>
        </span>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold flex gap-4 items-center">
            <span className="text-gray-400 text-base">GET</span>
            Bank List
          </h2>

          {/* <CodeBlockWithCopyButton code={link} language="text" /> */}

          <div className="overflow-hidden">
            <CopyBlock
              text={`https://oapi.pursfinance.com/api/v1/live-central/bank-list`}
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

export default BankList;
