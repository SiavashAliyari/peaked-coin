"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { CoinList } from "../coinsList";
import CoinListBtn from "./CoinListBtn";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
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
  const ref = useRef(null);
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
    <motion.div className="w-screen scrollbar-hide lg:pr-9 lg:w-full overflow-x-scroll bg-gray-800 flex flex-col  items-center ">
      <motion.div
        ref={ref}
        className="lg:pl-4 pl-[350px] flex  w-fit lg:w-full  md:px-0 lg:px-0 flex-row justify-between gap-x-5 items-center py-4 shadow-md"
      >
        <CoinListBtn
          classStyle=" sticky left-0 min-w-[250px] text-start bg-gray-800 lg:border-none border-r-2 border-gray-700 "
          curruntSelected={curruntSelected}
          selfIndex={sortType.name}
          onClicked={HandleSort}
          displayText={"Name"}
        ></CoinListBtn>
        <CoinListBtn
          classStyle=" min-w-[100px] text-end"
          curruntSelected={curruntSelected}
          selfIndex={sortType.price}
          onClicked={HandleSort}
          displayText={"Price"}
        ></CoinListBtn>
        <CoinListBtn
          classStyle=" min-w-[100px] text-end"
          curruntSelected={curruntSelected}
          selfIndex={sortType.tfhChange}
          onClicked={HandleSort}
          displayText={"24h Change"}
        ></CoinListBtn>
        <CoinListBtn
          classStyle=" min-w-[100px] text-end"
          curruntSelected={curruntSelected}
          selfIndex={sortType.tfhVolume}
          onClicked={HandleSort}
          displayText={"24h Volume"}
        ></CoinListBtn>
        <CoinListBtn
          classStyle=" min-w-[100px] text-end"
          curruntSelected={curruntSelected}
          selfIndex={sortType.market_cap}
          onClicked={HandleSort}
          displayText={" Market Cap"}
        ></CoinListBtn>
      </motion.div>
      {coinSorted?.map((coin: CoinList, index) => (
        <motion.div
          className="lg:pl-4 pl-[350px] w-fit lg:w-full"
          key={coin.id}
          layout
        >
          <Link
            href={`/coins/${coin.id}`}
            className="flex w-fit  lg:w-full flex-row justify-between md:px-0 lg:px-0 gap-x-5 items-center py-4 shadow-md"
          >
            <div className="bg-gray-800 sticky left-0 lg:border-none border-r-2 border-gray-700 flex flex-row lg:gap-4 gap-1  justify-start items-center min-w-[250px]">
              <p className="text-white hidden lg:block text-end">{index}</p>
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
              <p className=" hidden lg:visible text-white/80">
                {coin.id[0].toUpperCase() + coin.id.slice(1)}
              </p>
            </div>
            <p className=" text-white text-end lg:mx-0 min-w-[100px]">
              {"$ " + coin.current_price}
            </p>
            <p
              className={`text-end min-w-[100px] ${
                coin.price_change_percentage_24h > 0
                  ? " text-green-500"
                  : " text-red-500"
              }`}
            >
              {coin.price_change_percentage_24h + " %"}
            </p>
            <p className="text-white min-w-[100px] text-end">
              {nFormatter(coin.total_volume, 2)}
            </p>
            <p className="text-white min-w-[100px] text-end">
              {nFormatter(coin.market_cap, 2)}
            </p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
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
