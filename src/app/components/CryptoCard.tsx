"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { CurrencyBtc, CurrencyEth } from "@phosphor-icons/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";
import { CoinInfo } from "../coins/[coinId]/coinInfo";
import { Variants, motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  name: string;
  price: number;
  code: string;
  coinInfo: CoinInfo;
};

function CryptoCard(props: Props) {
  const [coinData, setCoinData] = useState(null);
  const looks: Variants = {};
  useEffect(() => {
    async function getData() {
      const data = await fetch(
        "http://localhost:3000/api/cg/marketChart?" +
          new URLSearchParams({
            id: props.coinInfo.product.id.toLocaleLowerCase(),
            currency: "usd",
            daysInterval: "100",
          })
      ).then((res) => res.json());
      setCoinData(data.product.prices);
      // data.product.prices.map((item: any) => console.log(item[0]));
    }
    getData();
  }, []);
  //@ts-ignore
  const labels = coinData?.map((item: any) => item[0]);
  //@ts-ignore
  const num = coinData?.map((item: any) => item[1]);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: num,
        borderColor: "rgb(1, 99, 132)",
      },
    ],
  };
  console.log(coinData);

  return (
    <div className="flex flex-col items-center  justify-center bg-gray-800 p-4 rounded-xl border-2 border-gray-700 mx-8 my-2 w-2/3">
      {/* first row */}
      <div className="flex flex-row w-full">
        {/* icon and info row */}
        <div className="flex flex-row w-full relative">
          <motion.div
            whileHover={{ borderRadius: "30%" }}
            animate={{ borderRadius: "50%" }}
            className="absolute -translate-x-10 -translate-y-10 bg-gray-800 p-2 border-[2px] border-slate-500"
          >
            {/* {getIcon(props.code)} */}
            {props.coinInfo != null && (
              <Image
                className="rounded-full shadow-md w-auto h-auto"
                alt="icon"
                src={props.coinInfo.product.image.large}
                width={30}
                height={30}
              ></Image>
            )}
          </motion.div>
          <div className="flex flex-col w-full ml-12">
            <div className="flex flex-row items-center justify-between">
              <p className="text-white">{props.name}</p>
              <p className="text-gray-500">${props.price}</p>
            </div>
            <p className="text-gray-500">{props.code}</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Line
          data={data}
          options={{
            maintainAspectRatio: true,
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: true,
              },
            },
            scales: {
              x: {
                ticks: {
                  display: true,
                },
                grid: {
                  display: true,
                },
                border: {
                  display: true,
                },
              },
              y: {
                ticks: {
                  display: true,
                },
                grid: {
                  display: true,
                },
                border: {
                  display: true,
                },
              },
            },
            hover: {},
          }}
        />
      </div>
    </div>
  );
}

const getIcon = (name: string) => {
  switch (name) {
    case "BTC":
      return <CurrencyBtc size={64} weight="thin" color="White" />;
      break;
    case "ETH":
      return <CurrencyEth size={64} weight="thin" color="White" />;
    default:
      break;
  }
};

export default CryptoCard;
