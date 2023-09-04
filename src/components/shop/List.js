import React, { useContext } from "react";
import "./shop.scss";
import { motion } from "framer-motion";
import { FaOpencart, FaRegHeart } from "react-icons/fa";
import { ShopContext } from "../../containers/ProductsList";
import CartPage from "./CartPage";

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

const fadeRight = {
  hidden: {
    x: -50,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

function List() {
  const { openCart, showCart, warning, cartAmount, spirits, updateCartAmount } =
    useContext(ShopContext);

  return (
    <>
      <motion.div
        variants={fadeRight}
        initial="hidden"
        animate="visible"
        className="cart-div"
      >
        <FaOpencart onClick={openCart} />
        <span>{cartAmount.length}</span>
      </motion.div>
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
                <FaOpencart onClick={() => updateCartAmount(item)} />
                <FaRegHeart />
              </div>
            </motion.div>
          );
        })}
        {warning && (
          <motion.div
            variants={fade}
            initial="hidden"
            animate="visible"
            className="warning-popup"
          >
            product is already in cart
          </motion.div>
        )}
      </div>
      {showCart && <CartPage />}
    </>
  );
}

export default List;
