import React from "react";
import engrave from "../../assets/engrave.webp";
import Header from "../Header";
import Button from "../Button";
import { motion } from "framer-motion";

const leftVariant = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const rightVariant = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Engrave() {
  return (
    <div className="engrave-container">
      <motion.div
        variants={leftVariant}
        initial="hidden"
        whileInView="visible"
        className="image-div"
      >
        <img src={engrave} alt="engrave-bottle" />
      </motion.div>
      <motion.div
        variants={rightVariant}
        initial="hidden"
        whileInView="visible"
        className="info"
      >
        <Header $size="sm">corporate & bulk orders</Header>
        <h3>
          Elevate your corporate gifting with our bespoke solutions. Share your
          recipient's details, and we'll curate personalized packages that
          impress. Our unique offerings, from custom engraving to personalized
          cards, set your gifts apart. Experience effortless, distinguished
          corporate gifting with us.
        </h3>
        <Button $variants="black">Find our more</Button>
        <div className="engrave-info"></div>
      </motion.div>
    </div>
  );
}

export default Engrave;
