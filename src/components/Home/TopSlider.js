import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/top-slider.scss";

const TopSlider = () => {
  const settings = {
    rtl: true,
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500
  };
  return (
    <section className="top-slider">
      <Slider {...settings}>
        <div className="top-slider-item">
          <div className="description">
            <a href="##" className="specs-link">
              مشخصات محصول
            </a>
            <div className="description-info">
              <div className="description-price">
                <span>۳,۰۰۰,۰۰۰</span> تومان
              </div>
              <div className="description-title">آیفون ۱۲۸ گیگابایتی</div>
            </div>
          </div>
        </div>
        <div className="top-slider-item">
          <div className="description">
            <a href="##" className="specs-link">
              مشخصات محصول
            </a>
            <div className="description-info">
              <div className="description-price">
                <span>۳,۰۰۰,۰۰۰</span> تومان
              </div>
              <div className="description-title">آیفون ۱۲۸ گیگابایتی</div>
            </div>
          </div>
        </div>
        <div className="top-slider-item">
          <div className="description">
            <a href="##" className="specs-link">
              مشخصات محصول
            </a>
            <div className="description-info">
              <div className="description-price">
                <span>۳,۰۰۰,۰۰۰</span> تومان
              </div>
              <div className="description-title">آیفون ۱۲۸ گیگابایتی</div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default TopSlider;
