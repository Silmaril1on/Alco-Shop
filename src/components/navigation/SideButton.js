import React, { useState } from "react";
import Button from "../Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SideMenu from "./SideMenu";

const style = {
  fontSize: 25,
};

function SideButton() {
  const [sideMenu, setSideMenu] = useState(false);

  const aside = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <div className="side-container">
      <Button onClick={aside}>
        {sideMenu ? (
          <AiOutlineClose style={style} />
        ) : (
          <AiOutlineMenu style={style} />
        )}
      </Button>
      <SideMenu sideMenu={sideMenu} />
    </div>
  );
}

export default SideButton;
