import { type } from "os";
import React from "react";
import { CoinInfo } from "./coinInfo";

type Props = {
  coinData: string;
  displayText: string;
};
function InfoList({ coinData, displayText }: Props) {
  return (
    <div className=" flex flex-row gap-32 border-b-gray-400 border-b-2 justify-between">
      <p className="text-white">{displayText}</p>
      <p className="text-white">{coinData}</p>
    </div>
  );
}

export default InfoList;
