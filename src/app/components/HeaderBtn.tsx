import { type } from "os";
import React from "react";
import { easeInOut, motion, Variants } from "framer-motion";

type Props = {
  displayText: string;
  index: number;
  curruntSelected: number;
  OnClicked: (index: number) => void;
};

const btnVar: Variants = {
  selected: { color: "#202126", background: "#EAE74F" },
  deselected: { color: "#F7F7F7", background: "#202126" },
};

function HeaderBtn({ OnClicked, displayText, index, curruntSelected }: Props) {
  return (
    <button
      onClick={() => {
        OnClicked(index);
      }}
    >
      <motion.p
        variants={btnVar}
        transition={easeInOut}
        animate={`${index == curruntSelected ? "selected" : "deselected"}`}
        className="rounded-3xl text-lg font-semibold px-4 py-1"
      >
        {displayText}
      </motion.p>
    </button>
  );
}

export default HeaderBtn;
