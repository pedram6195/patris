import React, { Component } from "react";

import TopMenu from "./TopMenu";
import TopSlider from "./TopSlider";
import SpecialSuggest from "./SpecialSuggest";
import Pictures from "./Pictures";
import BestSellers from "./BestSellers";
import Critics from "./Critics";

export default class Home extends Component {
  render() {
    return (
      <div className="fade">
        <TopMenu />
        <TopSlider />
        <SpecialSuggest />
        <Pictures />
        <BestSellers />
        <Critics />
      </div>
    );
  }
}
