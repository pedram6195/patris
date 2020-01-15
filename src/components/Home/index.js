import React from "react";

import TopMenu from "./TopMenu";
import TopSlider from "./TopSlider";
import SpecialSuggest from "./SpecialSuggest";
import Pictures from "./Pictures";
import BestSellers from "./BestSellers";
import Critics from "./Critics";

const Home = () => {
  document.title = "فروشگاه زنجیره ای پاتریس";
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
};

export default Home;
