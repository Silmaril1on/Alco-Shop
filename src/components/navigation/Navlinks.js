import React, { useState } from "react";
import "./navigation.scss";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import SpiritsDropDown from "./SpiritsDropDown";

function Navlinks() {
  const [dropDown, setDropDown] = useState();

  const hover = () => {
    setDropDown(true);
  };
  const hoverOut = () => {
    setDropDown(false);
  };

  return (
    <nav className="navlinks-container">
      <ul className="navlinks">
        <Link onMouseEnter={hover} to="/">
          spirits <AiFillCaretDown />
        </Link>
        <Link to="/wine">wine</Link>
        <Link to="/beer">beer</Link>
        <Link to="/store">store</Link>
      </ul>
      {dropDown && <SpiritsDropDown hoverOut={hoverOut} />}
    </nav>
  );
}

export default Navlinks;
