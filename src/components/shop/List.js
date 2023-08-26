import React from "react";
import "./shop.scss";
import { motion } from "framer-motion";
import { FaOpencart, FaRegHeart } from "react-icons/fa";

const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

function List({ spirits }) {
  return (
    <>
      <div className="products-list">
        {spirits.map((item, index) => {
          return (
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="visible"
              className="product-card"
              key={index}
            >
              <div className="product-image">
                <img src={item.image} alt="alcohol" />
              </div>
              <h1>{item.name}</h1>
              <span>${item.price}</span>
              <div className="on-hover">
                <FaOpencart />
                <FaRegHeart />
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default List;
