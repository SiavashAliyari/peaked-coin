import React from "react";
import CryptoCard from "./components/CryptoCard";
import CryptoChart from "./components/CryptoChart";
import { CoinList } from "./coinsList";
import CoinListComp from "./components/CoinListComp";

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
  const res = await fetch(
    "http://localhost:3000/api/cg/coinPageList?" +
      new URLSearchParams({
        per_page: "100",
      })
  );
  let coinList = await res.json();

  return (
    <div className="w-full  overflow-hidden pt-16 h-full min-h-screen flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col lg:flex-row gap-5 justify-center">
          <CryptoCard name="Bitcoin" code="BTC" price={23489.43} />
          <CryptoCard name="Ethereum" code="ETH" price={2634.12} />
        </div>
        <div className="w-full px-96">
          <div className="mx-8 my-4 bg-gray-800 p-4 rounded-xl border-2 border-gray-700 ">
            <CryptoChart />
          </div>
        </div>
        <CoinListComp coinList={coinList}></CoinListComp>
      </div>
    </div>
  );
}

export default page;
