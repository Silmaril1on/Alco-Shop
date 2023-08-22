import React from "react";
import "./footer.scss";
import visa from "../../assets/visa.png";
import paypal from "../../assets/paypal.png";
import card from "../../assets/card.png";
import amex from "../../assets/amex.png";
import apple from "../../assets/apple-pay.png";

const creditCards = [visa, paypal, card, amex, apple];

function Credits() {
  return (
    <div className="credits">
      <div className="credit-wrapper">
        {creditCards.map((item, index) => {
          return (
            <div className="img-div" key={index}>
              <img src={item} alt="credit-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Credits;
