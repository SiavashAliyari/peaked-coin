"use client";
import React, { useEffect, useState } from "react";
import { CoinInfo } from "./coinInfo";
import Image from "next/image";
import { CaretDown, CaretRight, CaretUp } from "@phosphor-icons/react";
import InfoList from "./InfoList";
import CoinProgressBar from "./CoinProgressBar";
import Link from "next/link";
import MenueSelction from "./MenueSelction";
import ChipSelection from "@/app/components/ChipSelection";
import OverViewPage from "./OverViewPage";
import MarketsPage from "./MarketsPage";

function page({ params }: { params: { coinId: string } }) {
  const [curruntIndex, setCurruntIndex] = useState(0);

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
        <div className="flex flex-col gap-y-8 px-44 py-24">
          <div className=" flex flex-row items-center justify-start">
            <Link className="text-white text-center" href={"/"}>
              Cryptocurrencies
            </Link>
            <CaretRight width={20} height={20} color="White"></CaretRight>
          </div>
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
              {coinData.product.market_data.price_change_percentage_24h > 0 ? (
                <CaretUp size={20} weight="bold" color="Green"></CaretUp>
              ) : (
                <CaretDown size={20} weight="bold" color="Red"></CaretDown>
              )}
              <p
                className={` ${
                  coinData.product.market_data.price_change_percentage_24h > 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {coinData.product.market_data.price_change_percentage_24h}%
              </p>
            </div>
          </div>
          <CoinProgressBar coinData={coinData}></CoinProgressBar>
          <div className="flex flex-row gap-x-12 w-fit">
            <div className="flex flex-col gap-y-4">
              <InfoList
                displayText="MarketCap"
                coinData={
                  "$" +
                  coinData.product.market_data.market_cap["usd"].toString()
                }
              ></InfoList>
              <InfoList
                displayText="24 Hour Trading Vol "
                coinData={
                  "$" +
                  coinData.product.market_data.total_volume["usd"].toString()
                }
              ></InfoList>
              <InfoList
                displayText="Fully Diluted Valuation"
                coinData={
                  "$" +
                  coinData.product.market_data.fully_diluted_valuation[
                    "usd"
                  ].toString()
                }
              ></InfoList>
            </div>
            <div className="flex flex-col gap-y-4">
              <InfoList
                displayText="Circulating Supply"
                coinData={
                  "$" +
                  coinData.product.market_data.circulating_supply.toString()
                }
              ></InfoList>
              <InfoList
                displayText="Total Supply"
                coinData={
                  "$" + coinData.product.market_data.total_supply.toString()
                }
              ></InfoList>
              <InfoList
                displayText="Max Supply"
                coinData={
                  coinData.product.market_data.max_supply
                    ? "$" + coinData.product.market_data.max_supply.toString()
                    : "Unlimited"
                }
              ></InfoList>
            </div>
          </div>
          <MenueSelction
            curruntIndex={curruntIndex}
            OnPress={setCurruntIndex}
            items={[
              { displayText: "OverView", index: 0 },
              { displayText: "Markets", index: 1 },
              { displayText: "Historical Data", index: 2 },
              { displayText: "Having Countdown", index: 3 },
            ]}
          ></MenueSelction>
          <div>
            {
              {
                0: <OverViewPage coinData={coinData}></OverViewPage>,
                1: <MarketsPage></MarketsPage>,
              }[curruntIndex]
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
