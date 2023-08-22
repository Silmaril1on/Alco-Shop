import React from "react";
import "./navigation.scss";
import Header from "../Header";
import SideButton from "./SideButton";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";
import Search from "./Search";
import { FaOpencart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

function Navigation() {
  return (
    <div className="navigation-container">
      <SideButton />
      <Navlinks />
      <div className="icons-container">
        <Search />
        <FiSearch />
        <FaOpencart />
        <Link className="home-logo" to="/">
          <Header $size="sm">Alcohol</Header>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
