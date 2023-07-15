import React from "react";
import { CoinInfo } from "./coinInfo";

function CoinProgressBar({ coinData }: { coinData: CoinInfo }) {
  return (
    <div className="flex flex-col  w-full lg:w-fit">
      <div className="overflow-hidden flex flex-row justify-start w-full lg:w-80 h-2 bg-gray-500 rounded-3xl">
        <div
          style={{
            width:
              Inverselerp(
                coinData.product.market_data.low_24h["usd"],
                coinData.product.market_data.high_24h["usd"],
                coinData.product.market_data.current_price["usd"]
              ).toString() + "%",
          }}
          className=" bg-yellow-300"
        ></div>
      </div>
      <div className="flex flex-row justify-between">
        <p className="text-white">
          {coinData.product.market_data.low_24h["usd"]}
        </p>
        <p className="text-white">24HourRange</p>
        <p className="text-white">
          {coinData.product.market_data.high_24h["usd"]}
        </p>
      </div>
    </div>
  );
}

function Inverselerp(a: number, b: number, t: number) {
  const distance = b - a;
  return (100 * (t - a)) / distance;
}

export default CoinProgressBar;
