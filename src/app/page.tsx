"use client";
import React from "react";
import { CurrencyBtc, CurrencyEth } from "@phosphor-icons/react";
import CryptoCard from "./components/CryptoCard";
import CryptoChart from "./components/CryptoChart";

function page() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <CryptoCard name="Bitcoin" code="BTC" price={23489.43}>
            <CurrencyBtc size={64} weight="thin" color="White" />
          </CryptoCard>
          <CryptoCard name="Ethereum" code="ETH" price={2634.12}>
            <CurrencyEth size={64} weight="thin" color="White" />
          </CryptoCard>
        </div>
        <div className="w-full">
          <div className="mx-8 my-4 bg-gray-800 p-4 rounded-xl border-2 border-gray-700">
            <CryptoChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
