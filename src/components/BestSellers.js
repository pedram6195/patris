import React from "react";
import Slider from "react-slick";

import img2 from "../img/img2.jpg";
import "../css/best-sellers.scss";

class BestSellers extends React.Component {
  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };

  render() {
    const options = {
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
      <section className="best-sellers">
        <div className="header">
          <h3>پرفروش ترین ها</h3>
          <p>
            در این قسمت پرفروش ترین محصولاتی که توسط کاربران خریداری شده از تمام
            دسته بندی های سایت در لیست زیر قرار گرفته شده و همیشه بروز میشود.
          </p>
        </div>
        <div className="navigation">
          <div className="navigation-buttons">
            <button onClick={this.next}>
              <i className="fas fa-angle-right"></i>
            </button>
            <button onClick={this.previous}>
              <i className="fas fa-angle-left"></i>
            </button>
          </div>
          <a href="##">مشاهده لیست کامل</a>
        </div>
        <div className="special-suggest-slider">
          <Slider ref={c => (this.slider = c)} {...options}>
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
  }
}

export default BestSellers;
