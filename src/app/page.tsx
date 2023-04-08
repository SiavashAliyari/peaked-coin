import React from "react";
import CryptoCard from "./components/CryptoCard";
import CryptoChart from "./components/CryptoChart";

async function page() {
  // const dog = await fetch(
  //   "http://localhost:3000/api/cg/marketChart?" +
  //     new URLSearchParams({
  //       id: "bitcoin",
  //       currency: "usd",
  //       daysInterval: "30",
  //     })
  // );
  // console.log(await dog.json());

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <CryptoCard name="Bitcoin" code="BTC" price={23489.43} />
          <CryptoCard name="Ethereum" code="ETH" price={2634.12} />
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
