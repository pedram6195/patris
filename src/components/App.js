import React, { Component } from "react";

import "../css/fontiran.css";
import "../css/app.scss";

import Navbar from "./Navbar";
import TopMenu from "./TopMenu";
import TopSlider from "./TopSlider";
import SpecialSuggest from "./SpecialSuggest";
import Pictures from "./Pictures";
import BestSellers from "./BestSellers";
import Critics from "./Critics";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <TopMenu />
        <TopSlider />
        <SpecialSuggest />
        <Pictures />
        <BestSellers />
        <Critics />
        <Footer />
      </>
    );
  }
}

export default App;
