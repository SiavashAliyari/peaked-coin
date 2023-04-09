"use client";
import { log } from "console";
import React from "react";

type Props = {
  onClicked: (value: number) => void;
  curruntSelected: number;
  selfIndex: number;
  displayText: String;
};

function CoinListBtn({
  onClicked,
  curruntSelected,
  selfIndex,
  displayText,
}: Props) {
  return (
    <button
      className={`text-white rounded-xl px-4 py-2 ${
        curruntSelected == selfIndex ? "bg-slate-500" : "bg-slate-900"
      }`}
      onClick={() => {
        onClicked(selfIndex);
      }}
    >
      {displayText}
    </button>
  );
}

export default CoinListBtn;
