import React from "react";

import pic1 from "../img/Layer-18.png";
import pic2 from "../img/Layer-22.png";
import pic3 from "../img/Layer-17.png";
import pic4 from "../img/Layer-16.png";
import pic5 from "../img/Layer-19.png";
import pic6 from "../img/Layer-21.png";
import "../css/pictures.scss";

const Pictures = () => {
  return (
    <section className="pictures">
      <div className="row pics">
        <a href="##">
          <img src={pic1} alt="تصاویر" />
        </a>
        <a href="##">
          <img src={pic2} alt="تصاویر" />
        </a>
        <a href="##">
          <img src={pic3} alt="تصاویر" />
        </a>
      </div>
      <div className="row pics">
        <a href="##">
          <img src={pic4} alt="تصاویر" />
        </a>
        <a href="##">
          <img src={pic5} alt="تصاویر" />
        </a>
        <a href="##">
          <img src={pic6} alt="تصاویر" />
        </a>
      </div>
    </section>
  );
};

export default Pictures;
