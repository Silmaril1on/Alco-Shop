import React from "react";
import "./beer.scss";

function Beer() {
  const [active, setActive] = React.useState(0);

  const count = () => {
    setActive(active + 1);
  };

  const remove = () => {
    setActive(0);
  };

  return (
    <>
      <h1 className="beer">{active}</h1>
      <button onClick={count}>add to cart</button>
      <button onClick={remove}>remove count</button>
    </>
  );
}

export default Beer;
