import React from "react";
import "./home.scss";
import SliderContainer from "../../containers/SliderContainer";
import Background from "./header/Background";
import TopBrands from "./topBrands/TopBrands";
import Engrave from "./Engrave";
import Beer from "./beerContent/Beer";

function Home() {
  return (
    <div className="home-page">
      <SliderContainer />
      <Background />
      <TopBrands />
      <Engrave />
      <Beer />
    </div>
  );
}

export default Home;
