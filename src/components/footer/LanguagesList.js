import React, { useState } from "react";
import "./footer.scss";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import continentsData from "./Country";
import { motion } from "framer-motion";

const fadeOut = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const slideDown = {
  hidden: {
    y: -20,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function LanguagesList({ handleClick }) {
  const [subMenu, setSubMenu] = useState(null);
  const [open, setOpen] = useState(false);

  const displaySubMenu = (id) => {
    if (id === subMenu) {
      setSubMenu(null);
      return;
    }
    setSubMenu(id);
    setOpen(!open);
  };

  return (
    <div className="language-list">
      <motion.div
        variants={fadeOut}
        initial="hidden"
        whileInView="visible"
        className="list"
      >
        <div className="close">
          <AiOutlineClose onClick={handleClick} />
        </div>
        <div className="langs">
          <h2>choose your language</h2>;
          {continentsData.map((item, index) => {
            return (
              <div className="wrapper" key={index}>
                <h1
                  className="continent-names"
                  onClick={() => displaySubMenu(item.id)}
                >
                  {item.name} {open ? <AiOutlineClose /> : <AiOutlinePlus />}
                </h1>
                {subMenu === item.id && <Types data={item.country} />}
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

function Types({ data }) {
  return (
    <div className="submenu">
      {data.map((cou, index) => {
        return (
          <motion.div
            variants={slideDown}
            initial="hidden"
            whileInView="visible"
            key={index}
          >
            <img src={cou.flag} alt="flag" />
            <h1 className="country-names" key={index}>
              {cou.name}
            </h1>
          </motion.div>
        );
      })}
    </div>
  );
}

export default LanguagesList;
