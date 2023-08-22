import React from "react";
import "./footer.scss";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function Socials() {
  return (
    <div className="socials">
      <span>
        <FaFacebookF />
      </span>
      <span>
        <FaInstagram />
      </span>
      <span>
        <FaTwitter />
      </span>
      <span>
        <FaYoutube />
      </span>
    </div>
  );
}

export default Socials;
