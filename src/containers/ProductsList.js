import React, { useEffect, useState } from "react";
import "../components/shop/shop.scss";
import alcohols from "../components/AlcoholsData";
import FilterButtons from "../components/shop/FilterButtons";
import List from "../components/shop/List";
import Header from "../components/Header";

export const ShopContext = React.createContext();

function ProductsList() {
  const [showCart, setShowCart] = useState(false);
  const [spirits, setSpirits] = useState([]);
  const [category, setCategory] = useState("all");
  const [cartAmount, setCartAmount] = useState([]);
  const [warning, setWarning] = useState(false);
  const [price, setPrice] = useState(0);

  const openCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    const handlePrice = () => {
      let money = 0;
      cartAmount.map((item) => {
        money += item.amount * item.price;
      });
      setPrice(money);
    };
    handlePrice();
  });

  const handleChange = (item, d) => {
    let ind = -1;
    cartAmount.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cartAmount;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCartAmount([...tempArr]);
  };

  const handleRemove = (id) => {
    const remove = cartAmount.filter((item) => item.id !== id);
    setCartAmount(remove);
  };

  const updateCartAmount = (item) => {
    let isPresent = false;
    cartAmount.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCartAmount([...cartAmount, item]);
  };

  useEffect(() => {
    const filterSpirits = () => {
      let newSpirits;
      let arr;
      if (category === "all") {
        newSpirits = alcohols.map((item) => item.product);
        arr = [].concat(...newSpirits);
        setSpirits(arr);
      } else {
        newSpirits = alcohols.find((item) => item.category === category);
        setSpirits(newSpirits.product);
      }
    };
    filterSpirits();
  }, [category]);

  return (
    <ShopContext.Provider
      value={{
        handleRemove,
        handleChange,
        price,
        openCart,
        showCart,
        setShowCart,
        cartAmount,
        warning,
        spirits,
        setSpirits,
        setCategory,
        updateCartAmount,
      }}
    >
      <Header $size="md">all alcohols</Header>
      <Header $variants="primary">
        alco-shop offers to our customers various brands and type of spirits
        from around the world
      </Header>
      <div className="products-container">
        <FilterButtons />
        <List />
      </div>
    </ShopContext.Provider>
  );
}

export default ProductsList;
