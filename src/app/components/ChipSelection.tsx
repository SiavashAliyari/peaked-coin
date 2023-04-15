import { motion } from "framer-motion";
import { type } from "os";
import React from "react";

type Props = {
  items: item[];
  onPress: (value: number) => void;
  curruntSelected: number;
};
type item = {
  displayText: string;
  index: number;
};

const container = {
  Selected: { color: "#faf7f7", opacity: 1, background: "#09e644" },
  UnSelected: {
    opacity: 0.5,
    background: "#ffffff",
    color: "#000000",
    transition: {
      delayChildren: 0.5,
    },
  },
};

function ChipSelection({ onPress, items, curruntSelected }: Props) {
  return (
    <div className="flex flex-row gap-x-2 lg:w-fit w-full overflow-x-scroll justify-evenly scrollbar-hide">
      {items.map((item) => (
        <button
          key={item.index}
          onClick={() => {
            onPress(item.index);
          }}
        >
          <motion.p
            variants={container}
            animate={item.index == curruntSelected ? "Selected" : "UnSelected"}
            className="rounded-2xl font-bold px-2 py-1"
          >
            {item.displayText}
          </motion.p>
        </button>
      ))}
    </div>
  );
}

export default ChipSelection;
