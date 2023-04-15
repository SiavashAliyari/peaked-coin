import ChipSelection from "@/app/components/ChipSelection";
import React, { useState } from "react";
import { CoinInfo } from "./coinInfo";

function OverViewPage({ coinData }: { coinData: CoinInfo }) {
  const [curruntIndexChip, setCurruntIndexChip] = useState(0);

  return (
    <div className="flex flex-col gap-8">
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
    </div>
  );
}

export default OverViewPage;
