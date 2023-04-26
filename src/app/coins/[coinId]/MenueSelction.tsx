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
          className="flex flex-col items-center justify-center"
          key={item.index}
          onClick={() => {
            OnPress(item.index);
          }}
        >
          <motion.p
            layout
            variants={container}
            animate={curruntIndex != item.index ? "Selected" : "UnSelected"}
            className={`text-white border-white`}
          >
            {item.displayText}
          </motion.p>
          {curruntIndex == item.index && (
            <motion.div
              layoutId="underline"
              className="bg-white w-full h-[2px] rounded-full"
            ></motion.div>
          )}
        </button>
      ))}
    </div>
  );
}

export default MenueSelction;
