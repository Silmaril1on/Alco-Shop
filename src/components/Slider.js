import React, { useState, useEffect } from "react";
import "./slider.scss";
import image1 from "../assets/firstWork-min.jpg";
import image2 from "../assets/secondWork-min.jpg";
import image3 from "../assets/thirdWork-min.jpg";
import image4 from "../assets/fourthWork-min.jpg";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

const images = [image1, image2, image3, image4];

const childVar = {
  hidden: (direction) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.5,
    };
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "ease",
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.5,
      transition: {
        type: "ease",
      },
    };
  },
};

function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function next() {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function previous() {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <div className="container">
      <div className="slideshow">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            variants={childVar}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="slide"
            src={images[index]}
            alt="works"
            key={images[index]}
            custom={direction}
          />
        </AnimatePresence>
        <div className="button-container">
          <button className="left" onClick={previous}>
            <AiFillCaretLeft />
          </button>
          <button className="right" onClick={next}>
            <AiFillCaretRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
