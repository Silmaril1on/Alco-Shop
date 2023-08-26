import React from "react";
import "./beer.scss";

function Beer() {
  const [active, setActive] = React.useState("");

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  return (
    <>
      <h1
        className={active === "1" ? "active-h1" : "non-active"}
        id={"1"}
        onClick={handleClick}
      >
        hello world
      </h1>
      <h1
        className={active === "2" ? "active-h1" : "non-active"}
        id={"2"}
        onClick={handleClick}
      >
        hello world
      </h1>

      <h1
        className={active === "3" ? "active-h1" : "non-active"}
        id={"3"}
        onClick={handleClick}
      >
        hello world
      </h1>
    </>
  );
}

export default Beer;
