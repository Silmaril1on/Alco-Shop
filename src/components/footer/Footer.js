import React from "react";
import "./footer.scss";
import Socials from "./Socials";
import Contact from "./Contact";
import Language from "./Language";
import Credits from "./Credits";

function Footer() {
  return (
    <footer>
      <Socials />
      <Language />
      <Contact />
      <h2>Based on International Spirits Awards from 2004-2022</h2>
      <Credits />
    </footer>
  );
}

export default Footer;
