import React from "react";
import CryptoCard from "./components/CryptoCard";
import CryptoChart from "./components/CryptoChart";
import Image from "next/image";

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
  const res = await fetch("http://localhost:3000/api/cg/coinComplex");
  let coinList = await res.json();
  console.log(coinList);
  coinList.sort((coin: any) => coin.price_change_24h);

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center bg-black">
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
        <ul className="flex flex-col gap-y-4">
          {coinList.map((coin: any) => (
            <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl  px-8 py-4 border-2 border-gray-700">
              <p className=" text-white">
                {coin.id[0].toUpperCase() + coin.id.slice(1)}
              </p>
              <div className="flex flex-row gap-4 justify-center items-center">
                <p className=" text-white">{coin.current_price + " $"}</p>
                <Image
                  className="rounded-full shadow-md"
                  alt="icon"
                  src={coin.image}
                  width={30}
                  height={30}
                ></Image>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default page;
