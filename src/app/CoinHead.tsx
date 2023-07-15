"use client";
import {
  House,
  GlobeHemisphereEast,
  Star,
  CurrencyDollar,
  Translate,
  SplitHorizontal,
} from "@phosphor-icons/react";
import Image from "next/image";
import coinIc from "../../public/peakedcoing.png";
import profilePic from "../../public/prof.webp";

import React, { useState } from "react";
import HeaderBtn from "./components/HeaderBtn";
import { motion } from "framer-motion";
import Link from "next/link";

function CoinHead() {
  type buttonInfo = {
    index: number;
    displayText: string;
  };
  const [selectedItem, setSelected] = useState(0);

  const [items, setItems] = useState([
    { index: 0, displayText: "DashBoard" },
    { index: 1, displayText: "Market" },
    { index: 2, displayText: "Portfolio" },
    { index: 3, displayText: "Trading" },
  ]);

  return (
    <div className="hidden sm:hidden lg:block">
      <div className=" z-50 w-full h-fit bg-PeakedBlack  sticky top-0 px-10 pt-3 flex flex-row gap-10  md:gap-5 justify-between items-center">
        <Link
          href={"/"}
          className="items-center flex flex-row gap-4 justify-start hover:scale-110 transition-all"
        >
          <Image
            alt="Icon"
            src={coinIc}
            width={80}
            height={80}
            className="text-PeakedYellow  "
          ></Image>
          <p className="text-PeakedYellow font-semibold text-lg mt-2">
            PeakedCoin
          </p>
        </Link>

        <div className="flex flex-row gap-5 md:gap-1">
          {items.map((info) => (
            <HeaderBtn
              index={info.index}
              displayText={info.displayText}
              OnClicked={setSelected}
              curruntSelected={selectedItem}
            ></HeaderBtn>
          ))}
        </div>
        <div className="flex flex-row gap-5">
          <button
            className="hover:opacity-80 transition-colors flex flex-row items-center justify-center gap-4 rounded-3xl border-gray-200 border-[1px] px-4 py-1"
            onClick={() => {}}
          >
            <CurrencyDollar size={25} color="white"></CurrencyDollar>
            <p className=" text-lg font-semibold text-white">USD</p>
          </button>
          <button
            className="hover:opacity-80 flex flex-row items-center justify-center gap-4 rounded-3xl border-gray-200 border-[1px] px-4 py-1"
            onClick={() => {}}
          >
            <SplitHorizontal size={25} color="white"></SplitHorizontal>
            <p className=" text-lg font-semibold text-white">Transfer</p>
          </button>
          <Image
            alt="Icon"
            src={profilePic}
            width={50}
            height={50}
            style={{ objectFit: "cover" }}
            className="rounded-full border-[1px] w-10 aspect-square border-white"
          ></Image>
        </div>
        {/* <HeaderBtn
        index={0}
        displayText="DashBoard"
        OnClicked={setSelected}
        curruntSelected={selectedItem}
      ></HeaderBtn>
      <HeaderBtn
        index={1}
        displayText="DashBoard"
        OnClicked={setSelected}
        curruntSelected={selectedItem}
      ></HeaderBtn> */}

        {/* <House size={30} color="white"></House>
      <GlobeHemisphereEast size={30} color="white"></GlobeHemisphereEast>
      <Star size={30} color="white"></Star>
      <CurrencyDollar size={30} color="white"></CurrencyDollar> */}
        {/* <Image alt="peaked" width={50} height={50} src={coinIc}></Image> */}
      </div>
    </div>
  );
}

export default CoinHead;
