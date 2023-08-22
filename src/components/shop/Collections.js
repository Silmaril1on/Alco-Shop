import React from "react";
import "./shop.scss";
import alcohols from "../AlcoholsData";
import gift from "../../assets/ico_gift.png";
import variety from "../../assets/ico_variety.png";
import discount from "../../assets/ico_discount2.png";
import Header from "../Header";

const data = [
  {
    image: variety,
    name: "variety of brands",
    info: "Choose from a variety of liquor brands including names such as Macallan, Pappy Van Winkle, Patron, Woodford Reserve and Grey Goose",
  },
  {
    image: discount,
    name: "Discount Liquor",
    info: "Find some of the best discounts on all types of Wine and Spirits at our online liquor store",
  },
  {
    image: gift,
    name: "Free Gift Note",
    info: "Browse our vast selection of Wine & Spirits and send gifts to your loved ones anywhere in the USA",
  },
];

function Collections() {
  return (
    <div className="collection-buttons-container">
      <Offers />

      <Header $size="sm"> The Best Place to Buy Liquor</Header>
      <h4>
        Alcohol store is your premier Liquor Store offering the best selection
        of Wine, Scotch Whisky, Bourbon, Vodka, Champagne, Tequila, Rum and
        other spirits from top brands.
      </h4>
      <div className="wrapper">
        {alcohols.map((item) => {
          return (
            <div className="collection-card" key={item.id}>
              <img src={item.image} alt="spirit-image" />
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Offers() {
  return (
    <div className="offer-section">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image} alt="png-logo" />
            <h2>{item.name}</h2>
            <p>{item.info}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Collections;
