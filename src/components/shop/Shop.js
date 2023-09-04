import React from "react";
import "./shop.scss";
import Banner from "./Banner";
import Collections from "./Collections";
import ProductsList from "../../containers/ProductsList";
import { Helmet } from "react-helmet";

function Shop() {
  return (
    <div className="shop-page">
      <Helmet>
        <title>Store | Order and Drink</title>
      </Helmet>
      <Banner />
      <Collections />
      <ProductsList />
    </div>
  );
}

export default Shop;
