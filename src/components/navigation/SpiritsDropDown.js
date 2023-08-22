import React from "react";
import alcohols from "../AlcoholsData";
import Header from "../Header";
import { AnimatePresence, motion } from "framer-motion";

const slideDown = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

function SpiritsDropDown({ hoverOut }) {
  return (
    <AnimatePresence>
      <motion.div
        variants={slideDown}
        initial="hidden"
        animate="visible"
        exit="exit"
        onMouseLeave={hoverOut}
        className="spirits-dropdown-container"
      >
        <div className="spirits-list-container">
          {alcohols.map((item) => {
            return (
              <div className="lists" key={item.id}>
                <Header $variants="secondary" $size="xs">
                  {item.name}
                </Header>
                <div>
                  {item.types.map((list, index) => {
                    return <h2 key={index}>{list.name}</h2>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SpiritsDropDown;
