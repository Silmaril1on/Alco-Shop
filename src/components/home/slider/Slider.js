import React from "react";
import "../slider/slider.scss";
import Button from "../../Button";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Special from "./Special";

const childVar = {
  hidden: (direction) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "ease",
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: {
        type: "ease",
      },
    };
  },
};

function Slider({ direction, index, left, right }) {
  return (
    <div className="slider-container">
      <div className="wrapper">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={childVar}
            initial="hidden"
            animate="visible"
            key={index.image}
            exit="exit"
            custom={direction}
            className="slider-wrapper"
          >
            <img src={index.image} alt="picture" />
            <div className="slider-info">
              <h3>{index.name}</h3>
              <h5>{index.info}</h5>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="slider-but-container">
          <Button onClick={left}>
            <AiFillCaretLeft />
          </Button>
          <Button onClick={right}>
            <AiFillCaretRight />
          </Button>
        </div>
      </div>
      <Special />
    </div>
  );
}

export default Slider;
