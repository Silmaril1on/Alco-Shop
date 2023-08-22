import React from "react";
import "./topBrands.scss";
import spiritBrands from "./BrandsData";
import Header from "../../Header";
import { motion } from "framer-motion";

const parent = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

function TopBrands() {
  return (
    <div className="top-brands-container">
      <Header $variants="primary" $size="md">
        top brands
      </Header>
      <Header $variants="secondary">shop via brands</Header>
      <motion.div
        variants={parent}
        initial="hidden"
        whileInView="visible"
        className="brands-wrapper"
      >
        {spiritBrands.map((product) => {
          return (
            <div className="brand" key={product.id}>
              <a href="#">
                <img src={product.image} alt="brand-logo" />
              </a>
            </div>
          );
        })}
      </motion.div>
      <h3>Your Favorite Brands</h3>
      <h4>in one place</h4>
    </div>
  );
}

export default TopBrands;
