import { log } from "console";
import { motion } from "framer-motion";
import React from "react";
type ItemType = {
  displayText: String;
  index: number;
};

function MenueSelction({
  items,
  OnPress,
  curruntIndex,
}: {
  curruntIndex: number;
  OnPress: (index: number) => void;
  items: ItemType[];
}) {
  const container = {
    Selected: { opacity: 0.5 },
    UnSelected: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-row gap-x-5 items-center">
      {items.map((item) => (
        <button
          key={item.index}
          onClick={() => {
            OnPress(item.index);
          }}
        >
          <motion.p
            layout
            variants={container}
            animate={curruntIndex != item.index ? "Selected" : "UnSelected"}
            className={`text-white border-white ${
              curruntIndex == item.index ? "border-b-2" : "border-none"
            }`}
          >
            {item.displayText}
          </motion.p>
        </button>
      ))}
    </div>
  );
}

export default MenueSelction;
