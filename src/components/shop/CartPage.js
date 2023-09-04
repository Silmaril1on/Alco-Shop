import React, { useContext } from "react";
import { ShopContext } from "../../containers/ProductsList";
import Button from "../Button";
import { AiOutlineClose, AiOutlineDollar } from "react-icons/ai";
import { motion } from "framer-motion";
import Header from "../Header";
import Footer from "../footer/Footer";
import { Helmet } from "react-helmet";

const fadeOut = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function CartPage() {
  const { cartAmount, handleChange, handleRemove, openCart, price } =
    useContext(ShopContext);

  return (
    <motion.div
      variants={fadeOut}
      initial="hidden"
      animate="visible"
      className="cart-page-container"
    >
      <Helmet>
        <title>Shopping Cart - Paycheck</title>
      </Helmet>
      <h6>
        <AiOutlineClose onClick={openCart} />
        <AiOutlineDollar />
        REGISTERED USERS - SAVE $10 ON YOUR FIRST ORDER $100 OR MORE USE CODE:
        GET10
      </h6>
      <Header $size="sm">shopping cart ({cartAmount.length})</Header>
      <div className="wrapper">
        <div className="card-product-container">
          {cartAmount.length > 0 ? (
            cartAmount.map((item) => {
              return (
                <div className="cart-product" key={item.id}>
                  <img src={item.image} alt="ef" />
                  <div className="cart-info">
                    <h1>{item.name}</h1>
                    <h4>$ {item.price}</h4>
                    <div className="cart-button-container">
                      <Button
                        $variants="black"
                        onClick={() => handleChange(item, -1)}
                      >
                        -
                      </Button>
                      <h3>{item.amount}</h3>
                      <Button
                        $variants="black"
                        onClick={() => handleChange(item, +1)}
                      >
                        +
                      </Button>
                      <Button
                        $variants="black"
                        onClick={() => handleRemove(item.id)}
                      >
                        remove item
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="info-modal">cart is empty</h1>
          )}
        </div>
        <div className="total-price">
          <Header $variants="primary" $size="sm">
            summary
          </Header>
          <h3>estimare shipping and tax</h3>
          <h2>
            subtotal <span>$ {price}</span>
          </h2>
          <h2>
            shipping (united parcel service) <span>$ 0</span>
          </h2>
          <h2>
            Order Total <span>$ {price}</span>
          </h2>
          <Button>go to chekout</Button>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default CartPage;
