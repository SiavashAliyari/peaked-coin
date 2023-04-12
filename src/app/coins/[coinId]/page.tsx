"use client";
import React, { useEffect, useState } from "react";
import { CoinInfo } from "./coinInfo";
import Image from "next/image";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

function page({ params }: { params: { coinId: string } }) {
  const [coinData, setCoinData] = useState<CoinInfo>();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "http://localhost:3000/api/cg/coinInfo?" +
          new URLSearchParams({ id: params.coinId })
      );
      setCoinData(await res.json());
    };
    getData();
  }, []);
  console.log(coinData);

  return (
    <div>
      {coinData?.product != null && (
        <div className="flex flex-col px-4 py-4 gap-y-4">
          <p className="rounded-xl bg-gray-800 w-fit px-4 py-2 text-center text-white">
            {`Rank #${coinData?.product.market_cap_rank}`}
          </p>
          <div className="flex flex-row gap-x-2 items-center justify-start w-fit">
            <Image
              className="rounded-full shadow-md"
              alt="icon"
              src={coinData?.product.image.large}
              width={30}
              height={30}
            ></Image>
            <p className="text-white">{coinData.product.name}</p>
            <p className="text-white">
              {coinData.product.symbol.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-row gap-x-2">
            <p className="text-white">
              {coinData.product.market_data.current_price["usd"]}
            </p>
            <div className="flex flex-row gap-1 items-center">
              {coinData.product.market_data.price_change_24h > 0 ? (
                <CaretUp size={20} weight="bold" color="Green"></CaretUp>
              ) : (
                <CaretDown size={20} weight="bold" color="Red"></CaretDown>
              )}
              <p
                className={` ${
                  coinData.product.market_data.price_change_24h > 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {coinData.product.market_data.price_change_24h}%
              </p>
            </div>
          </div>
          <div className="flex flex-col w-fit">
            <div className="overflow-hidden flex flex-row justify-start w-80 h-2 bg-gray-500 rounded-3xl">
              <div
                style={{
                  width:
                    Inverselerp(
                      coinData.product.market_data.low_24h["usd"],
                      coinData.product.market_data.high_24h["usd"],
                      coinData.product.market_data.current_price["usd"]
                    ).toString() + "%",
                }}
                className="bg-gradient-to-r from-green-600 to-yellow-300"
              ></div>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-white">
                {coinData.product.market_data.low_24h["usd"]}
              </p>
              <p className="text-white">
                {coinData.product.market_data.high_24h["usd"]}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
function Inverselerp(a: number, b: number, t: number) {
  const distance = b - a;
  return (100 * (t - a)) / distance;
}

export default page;
