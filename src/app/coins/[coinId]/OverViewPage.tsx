import ChipSelection from "@/app/components/ChipSelection";
import React, { useState } from "react";
import { CoinInfo } from "./coinInfo";
import CryptoCard from "@/app/components/CryptoCard";

function OverViewPage({ coinData }: { coinData: CoinInfo }) {
  const [curruntIndexChip, setCurruntIndexChip] = useState(0);

  return (
    <div className="flex flex-col gap-8 w-full">
      <ChipSelection
        onPress={setCurruntIndexChip}
        items={[
          { displayText: "General", index: 0 },
          { displayText: "Social", index: 1 },
          { displayText: "Developer", index: 2 },
          { displayText: "Widgets", index: 3 },
          { displayText: "Analysis", index: 4 },
        ]}
        curruntSelected={curruntIndexChip}
      ></ChipSelection>
      <p className="text-white">{`${
        coinData.product.name[0].toUpperCase() + coinData.product.name.slice(1)
      } Price Chart ${coinData.product.symbol.toUpperCase()}`}</p>
      <CryptoCard
        coinInfo={coinData}
        name={coinData.product.name}
        code={coinData.product.symbol.toUpperCase()}
        price={23489.43}
      />
    </div>
  );
}

export default OverViewPage;
