import React from "react";
import Slider from "react-slick";

import img2 from "../img/img2.jpg";
import "../css/special-suggest.scss";

const SpecialSuggest = () => {
  let options = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="special-suggest">
      <div className="header">
        <h3>پیشنهاد ویژه</h3>
        <a href="##">مشاهده لیست کامل</a>
      </div>
      <div className="special-suggest-slider">
        <Slider {...options}>
          <div className="item">
            <a href="##" className="item-image">
              <img src={img2} alt="پیشنهاد ویژه" />
            </a>
            <div className="text-center">
              <a className="item-title" href="##">
                هارد دیسک اکسترنال...
              </a>
              <p className="price">۶۰,۰۰۰ تومان</p>
              <p className="discount">۴۵,۰۰۰ تومان</p>
            </div>
          </div>
          <div className="item">
            <a href="##" className="item-image">
              <img src={img2} alt="پیشنهاد ویژه" />
            </a>
            <div className="text-center">
              <a className="item-title" href="##">
                هارد دیسک اکسترنال...
              </a>
              <p className="price">۶۰,۰۰۰ تومان</p>
              <p className="discount">۴۵,۰۰۰ تومان</p>
            </div>
          </div>
          <div className="item">
            <a href="##" className="item-image">
              <img src={img2} alt="پیشنهاد ویژه" />
            </a>
            <div className="text-center">
              <a className="item-title" href="##">
                هارد دیسک اکسترنال...
              </a>
              <p className="price">۶۰,۰۰۰ تومان</p>
              <p className="discount">۴۵,۰۰۰ تومان</p>
            </div>
          </div>
          <div className="item">
            <a href="##" className="item-image">
              <img src={img2} alt="پیشنهاد ویژه" />
            </a>
            <div className="text-center">
              <a className="item-title" href="##">
                هارد دیسک اکسترنال...
              </a>
              <p className="price">۶۰,۰۰۰ تومان</p>
              <p className="discount">۴۵,۰۰۰ تومان</p>
            </div>
          </div>
          <div className="item">
            <a href="##" className="item-image">
              <img src={img2} alt="پیشنهاد ویژه" />
            </a>
            <div className="text-center">
              <a className="item-title" href="##">
                هارد دیسک اکسترنال...
              </a>
              <p className="price">۶۰,۰۰۰ تومان</p>
              <p className="discount">۴۵,۰۰۰ تومان</p>
            </div>
          </div>
          <div className="item">
            <a href="##" className="item-image">
              <img src={img2} alt="پیشنهاد ویژه" />
            </a>
            <div className="text-center">
              <a className="item-title" href="##">
                هارد دیسک اکسترنال...
              </a>
              <p className="price">۶۰,۰۰۰ تومان</p>
              <p className="discount">۴۵,۰۰۰ تومان</p>
            </div>
          </div>
          <div className="item">
            <a href="##" className="item-image">
              <img src={img2} alt="پیشنهاد ویژه" />
            </a>
            <div className="text-center">
              <a className="item-title" href="##">
                هارد دیسک اکسترنال...
              </a>
              <p className="price">۶۰,۰۰۰ تومان</p>
              <p className="discount">۴۵,۰۰۰ تومان</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default SpecialSuggest;
