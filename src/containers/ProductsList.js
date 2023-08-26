import React, { useEffect, useState } from "react";
import "../components/shop/shop.scss";
import alcohols from "../components/AlcoholsData";
import FilterButtons from "../components/shop/FilterButtons";
import List from "../components/shop/List";
import Header from "../components/Header";

function ProductsList() {
  const [spirits, setSpirits] = useState([]);
  const [category, setCategory] = useState("all");

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

  useEffect(() => {
    filterSpirits();
  }, [category]);

  return (
    <>
      <Header $size="md">all alcohols</Header>
      <Header $variants="primary">
        alco-shop offers to our customers various brands and type of spirits
        from around the world
      </Header>
      <div className="products-container">
        <FilterButtons
          spirits={spirits}
          callBack={setCategory}
          setSpirits={setSpirits}
        />
        <List spirits={spirits} />
      </div>
    </>
  );
}

export default ProductsList;
