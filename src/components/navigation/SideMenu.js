import React from "react";
import "./navigation.scss";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";
import { motion } from "framer-motion";

const parentVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
const childVariant = {
  hidden: {
    x: -150,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function SideMenu({ sideMenu }) {
  return (
    <motion.aside className={sideMenu ? "side-menu" : "hide-menu"}>
      <div
        className="side-wrapper"
        variants={parentVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.ul
          variants={childVariant}
          initial="hidden"
          whileInView="visible"
        >
          <a href="whiskey">whiskey</a>
          <a href="cognac">cognac</a>
          <a href="tequila">tequila</a>
          <a href="rum">rum</a>
          <a href="gin">gin</a>
          <a href="liqueur">liqueurs</a>
          <a href="wine">wine</a>
          <a href="beer">beer</a>
          <a href="vodka">vodka</a>
          <a href="vermouth">vermouth</a>
        </motion.ul>

        <motion.div
          variants={parentVariant}
          initial="hidden"
          whileInView="visible"
          className="contact"
        >
          <h4>428 Castro St, San Francisco, CA 94114</h4>
          <h4>+1 415-823-3490</h4>
          <h4>
            SPIRIT'S SHOP <BiSolidDrink />
          </h4>
          <h4>20 years of experience</h4>
          <h4>More than 1000 products</h4>
          <h4>Free delivery service</h4>
        </motion.div>
        <div className="socials">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaYoutube />
          </span>
          <span>
            <FaTwitter />
          </span>
        </div>
      </div>
    </motion.aside>
  );
}

export default SideMenu;
