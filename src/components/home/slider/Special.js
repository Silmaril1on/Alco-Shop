import React from "react";
import "./slider.scss";
import video from "../../../assets/walker.mp4";
import dom from "../../../assets/domp.jpg";
import Header from "../../Header";
import { motion } from "framer-motion";

const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

function Special() {
  return (
    <div className="special">
      <video autoPlay={true} loop={true} muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="com">
        <img src={dom} alt="champagne" />
        <motion.div
          variants={fade}
          initial="hidden"
          animate="visible"
          className="com-content"
        >
          <Header $size="sm">dom perignon</Header>
          <h3>Delight your wedding</h3>
        </motion.div>
      </div>
    </div>
  );
}

export default Special;
