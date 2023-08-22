import React from "react";
import "./beer.scss";
import beer from "../../../assets/beerparty.jpg";
import Header from "../../Header";
import Button from "../../Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

function Beer() {
  const navigate = useNavigate();

  const goToBeer = () => {
    navigate("./beer");
  };

  return (
    <div className="beer-section-container">
      <motion.div
        variants={leftVariant}
        initial="hidden"
        whileInView="visible"
        className="beer-content"
      >
        <Header $size="sm">explore beer section</Header>
        <h3>
          There are almost as many beer styles as there are stars in the sky.
          For example, have you ever enjoyed an ale during a party with friends?
          If so, you're likely familiar with this beer style's full-bodied and
          malty taste. Ale beers can be pale, amber-colored or dark, based on
          the color of the malt. Let's not forget porter, a type of ale with dry
          and roasted flavors.
        </h3>
        <Button onClick={goToBeer} $variants="white">
          Take a look
        </Button>
      </motion.div>
      <motion.div
        variants={rightVariant}
        initial="hidden"
        whileInView="visible"
        className="beer-image"
      >
        <img src={beer} alt="beer" />
      </motion.div>
    </div>
  );
}

export default Beer;
