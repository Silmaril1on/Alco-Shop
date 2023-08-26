import React, { useState } from "react";
import alcohols from "../AlcoholsData";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { motion } from "framer-motion";

const showBar = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function PriceRange({ setSpirits }) {
  const [price, setPrice] = useState(40);
  const [hide, setHide] = useState(false);

  const hideBar = () => {
    setHide(!hide);
  };

  const handleInput = (e) => {
    const products = alcohols.map((item) => item.product);
    const productsArr = [].concat(...products);
    let range = productsArr.filter((item) => item.price > parseInt(price, 10));
    setPrice(e.target.value);
    setSpirits(range);
  };

  return (
    <div className="price-range-container">
      <h3 onClick={hideBar} className="filter-buttons-header">
        search by price range {hide ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </h3>
      {hide && (
        <motion.div
          variants={showBar}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <input type="range" onInput={handleInput} />
          <h5>Price: $ {price} </h5>{" "}
        </motion.div>
      )}
    </div>
  );
}

export default PriceRange;
