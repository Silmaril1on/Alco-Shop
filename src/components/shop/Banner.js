import React from "react";
import "./shop.scss";
import Header from "../Header";
import bar from "../../assets/bar.jpg";
import Button from "../Button";

function Banner() {
  return (
    <div className="banner">
      <img src={bar} alt="bar" />
      <div className="banner-content">
        <Header $variants="primary">YOUR ONLINE STORE WITH</Header>
        <Header $size="sm" $weight="bold" $variants="primary">
          thousands of exclusive quality liquors
        </Header>
        <Button $variants="transparent">best selling</Button>
      </div>
    </div>
  );
}

export default Banner;
