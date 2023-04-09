"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CoinList } from "../coinsList";
import CoinListBtn from "./CoinListBtn";
import { log } from "console";

type Props = {
  coinList: any;
};
enum sortType {
  price,
  name,
  tfhChange,
  tfhVolume,
  market_cap,
}

function CoinListComp({ coinList }: Props) {
  const [coinSorted, setSortedCoin] = useState<CoinList[]>(coinList);
  const [curruntSelected, setSelected] = useState(sortType.market_cap);

  function HandleSort(sortId: sortType) {
    setSelected(sortId);
    var sortedList;
    switch (sortId) {
      case sortType.name:
        sortedList = coinSorted.sort((a: CoinList, b: CoinList) => {
          if (a.id < b.id) {
            return -1;
          } else {
            return +1;
          }
        });
        break;
      case sortType.price:
        sortedList = coinSorted.sort((a: CoinList, b: CoinList) => {
          if (a.current_price < b.current_price) {
            return +1;
          } else {
            return -1;
          }
        });
        break;
      case sortType.tfhChange:
        sortedList = coinSorted.sort((a: CoinList, b: CoinList) => {
          if (a.price_change_24h < b.price_change_24h) {
            return +1;
          } else {
            return -1;
          }
        });
        break;
      case sortType.tfhVolume:
        sortedList = coinSorted.sort((a: CoinList, b: CoinList) => {
          if (a.total_volume < b.total_volume) {
            return +1;
          } else {
            return -1;
          }
        });
        break;
      case sortType.market_cap:
        sortedList = coinSorted.sort((a: CoinList, b: CoinList) => {
          if (a.market_cap < b.market_cap) {
            return +1;
          } else {
            return -1;
          }
        });
        break;
    }
    setSortedCoin([...sortedList]);
  }

  return (
    <ul className="flex flex-col gap-y-4">
      <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl  px-8 py-4 border-2 border-gray-700">
        <CoinListBtn
          curruntSelected={curruntSelected}
          selfIndex={sortType.name}
          onClicked={HandleSort}
          displayText={"Name"}
        ></CoinListBtn>
        <CoinListBtn
          curruntSelected={curruntSelected}
          selfIndex={sortType.price}
          onClicked={HandleSort}
          displayText={"Price"}
        ></CoinListBtn>
        <CoinListBtn
          curruntSelected={curruntSelected}
          selfIndex={sortType.tfhChange}
          onClicked={HandleSort}
          displayText={"24h Change"}
        ></CoinListBtn>
        <CoinListBtn
          curruntSelected={curruntSelected}
          selfIndex={sortType.tfhVolume}
          onClicked={HandleSort}
          displayText={"24h Volume"}
        ></CoinListBtn>
        <CoinListBtn
          curruntSelected={curruntSelected}
          selfIndex={sortType.market_cap}
          onClicked={HandleSort}
          displayText={" Market Cap"}
        ></CoinListBtn>
      </div>
      {coinSorted?.map((coin: CoinList) => (
        <div
          key={coin.id}
          className="flex flex-row justify-between items-center bg-gray-800 rounded-xl  px-8 py-4 border-2 border-gray-700"
        >
          <div className="flex flex-row gap-4 justify-center items-center">
            <Image
              className="rounded-full shadow-md w-auto h-auto"
              alt="icon"
              src={coin.image}
              width={30}
              height={30}
            ></Image>
            <p className="text-lg font-bold text-white">
              {coin.symbol.toUpperCase()}
            </p>
            <p className=" text-white/80">
              {coin.id[0].toUpperCase() + coin.id.slice(1)}
            </p>
          </div>
          <p className=" text-white">{"$ " + coin.current_price}</p>
          <p
            className={` text-center ${
              coin.price_change_percentage_24h > 0
                ? " text-green-500"
                : " text-red-500"
            }`}
          >
            {coin.price_change_percentage_24h + " %"}
          </p>
          <p className="text-white">{nFormatter(coin.total_volume, 2)}</p>
          <p className="text-white">{nFormatter(coin.market_cap, 2)}</p>
        </div>
      ))}
    </ul>
  );
}

function nFormatter(num: number, digits: number) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

export default CoinListComp;
