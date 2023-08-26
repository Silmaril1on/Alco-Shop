import React from "react";
import "./shop.scss";
import Banner from "./Banner";
import Collections from "./Collections";
import ProductsList from "../../containers/ProductsList";

function Shop() {
  return (
    <div className="shop-page">
      <Banner />
      <Collections />
      <ProductsList />
    </div>
  );
}

export default Shop;
