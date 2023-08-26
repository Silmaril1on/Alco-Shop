import React from "react";
import banner from "../../../assets/home-background.webp";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";
import Header from "../../Header";
import { motion } from "framer-motion";

const child = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const child1 = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};
const child2 = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

function Background() {
  const navigate = useNavigate();

  const store = () => {
    navigate("/store");
  };

  return (
    <>
      <div className="headline">
        <Header $variants="primary" $size="sm">
          WORLD's BEST ONLINE LIQUOR STORE
        </Header>
        <h3>
          Uptown Spirits delivers your favorite liquor, beer, and wine directly
          to your door. With a large selection of popular spirits and hard to
          find rare liquors, we are your one stop shop for all your alcohol
          needs. Whether you are looking for whiskey, tequila, cognac, liqueur,
          rum, vodka, or any other type of spirits we got you covered.
        </h3>
      </div>
      <motion.div className="background-container">
        <motion.div className="banner-container">
          <img src={banner} alt="banner" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="shop-container"
        >
          <motion.div variants={child}>
            <Header $variants="primary" $size="sm">
              elevate your home bar
            </Header>
          </motion.div>
          <motion.h3 variants={child1}>
            Discover premium spirits and create unforgettable experiences right
            from the comfort of your home.
          </motion.h3>
          <motion.div variants={child2}>
            <Button onClick={store} $variants="black">
              Shop Now
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Background;
