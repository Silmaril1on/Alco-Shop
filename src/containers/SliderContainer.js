import React, { useState } from "react";
import Slider from "../components/home/slider/Slider";
import spiritSlide from "../components/home/slider/SlideData";

function SliderContainer() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const left = () => {
    setDirection(1);
    if (index === spiritSlide.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };
  const right = () => {
    setDirection(-1);
    if (index === spiritSlide.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  return (
    <Slider
      direction={direction}
      index={spiritSlide[index]}
      left={left}
      right={right}
    />
  );
}

export default SliderContainer;
