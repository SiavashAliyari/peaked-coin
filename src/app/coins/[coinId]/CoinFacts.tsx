import { type } from "os";
import React from "react";
import { CoinInfo } from "./coinInfo";

type Props = {
  CoinData: CoinInfo;
};
function CoinFacts({ CoinData }: Props) {
  return (
    <div className="flex flex-col items-start justify-start">
      <p className="text-white text-2xl">{`What is ${
        CoinData.product.name
      } (${CoinData.product.symbol.toUpperCase()})?`}</p>
      <p
        dangerouslySetInnerHTML={{ __html: CoinData?.product.description.en }}
        className="text-white text-lg"
      ></p>
    </div>
  );
}

export default CoinFacts;
