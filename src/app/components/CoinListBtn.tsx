import { motion, spring } from "framer-motion";
import React from "react";

type Props = {
  onClicked: (value: number) => void;
  curruntSelected: number;
  selfIndex: number;
  displayText: String;
  classStyle?: string;
};

function CoinListBtn({
  onClicked,
  curruntSelected,
  selfIndex,
  displayText,
  classStyle,
}: Props) {
  const variants = {
    selcted: { color: "rgb(107,114,128)" },
    notSelected: { color: "rgb(255,255,255)" },
  };

  return (
    <motion.button
      variants={variants}
      animate={curruntSelected != selfIndex ? "selcted" : "notSelected"}
      transition={{ type: "spring", duration: 1 }}
      className={classStyle + ` py-2`}
      onClick={() => {
        onClicked(selfIndex);
      }}
    >
      {displayText}
    </motion.button>
  );
}

export default CoinListBtn;
