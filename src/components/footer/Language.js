import React, { useState } from "react";
import "./footer.scss";
import { BiWorld } from "react-icons/bi";
import LanguagesList from "./LanguagesList";

function Language() {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <div className="language">
      <div className="int" onClick={handleClick}>
        <BiWorld />
        <h1>International</h1>
      </div>
      {modal && <LanguagesList handleClick={handleClick} />}
    </div>
  );
}

export default Language;
