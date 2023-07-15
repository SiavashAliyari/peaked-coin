"use client";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className=" text-white grid grid-flow-row grid-cols-2 gap-3 px-2 py-4  bg-purple-400 h-screen  w-1/2 justify-around ">
      <div className="bg-red-500 w-screen absolute top-0 h-6"></div>
      <p>siavsah</p>
      <p>siavsah</p>
      <p>siavsah</p>
      <Ghasem
        onBomb={() => {
          console.log("sdas");
        }}
        death={10}
      ></Ghasem>
      <Ghasem
        onBomb={() => {
          console.log("sdas");
        }}
        death={10}
      ></Ghasem>

      <p>siavsah</p>
      <p>siavsah</p>
      <p>siavsah</p>
      <p>siavsah</p>
      <p>siavsah</p>
      <p>siavsah</p>
      <p>siavsah</p>
    </div>
  );
}
const Ghasem = ({ death, onBomb }: { onBomb: () => void; death: number }) => {
  return (
    <div>
      <Link href={"./sdkadhua"}></Link>
      <button onClick={onBomb}></button>
    </div>
  );
};
export default page;
