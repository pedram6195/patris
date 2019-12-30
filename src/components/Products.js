import React, { Component } from "react";
import Range from "rc-slider/lib/Range";

import { toPersianNum } from '../helpers';

import TopMenu from "./TopMenu";

import "rc-slider/assets/index.css";

import "../css/products.scss";

class Products extends Component {
  state = { sliderValues: [0, 3000000] };

  handleChange = sliderValues => {
    this.setState({ sliderValues });
  };
  render() {
    const { sliderValues } = this.state;
    return (
      <>
        <TopMenu />
        <div className="products fade row">
          <section className="sidebar">
            <div className="price-limit">
              <h3>محدوده قیمت</h3>
              <hr />
              <div className="range">
                <Range
                  min={0}
                  max={3000000}
                  onChange={this.handleChange}
                  defaultValue={sliderValues}
                  allowCross={false}
                  step={50000}
                  reverse={true}
                />
                <div className="range-details">
                  <div className="from">
                    <span>از</span>
                    <span>{toPersianNum(sliderValues[0])}</span>
                    <span>تومان</span>
                  </div>
                  <div className="to">
                    <span>تا</span>
                    <span>{toPersianNum(sliderValues[1])}</span>
                    <span>تومان</span>
                  </div>
                </div>
                <button className="range-submit">
                    اعمال
                </button>
              </div>
            </div>
            <div className="brands">
              <h3>برند</h3>
              <hr />
            </div>
            <div className="colors">
              <h3>رنگ</h3>
              <hr />
            </div>
            <div className="availablity">
              <h3>فقط کالاهای موجود</h3>
              <hr />
            </div>
          </section>
          <section className="product-list">
            <div className="filters">
              <span>مرتب سازی براساس : </span>
              <ul className="filter-ul">
                <li>
                  <a href="##">پربازدیدترین</a>
                </li>
                <li>
                  <a href="##">پرفروش‌ترین‌</a>
                </li>
                <li>
                  <a href="##">جدیدترین</a>
                </li>
                <li>
                  <a href="##">ارزان‌ترین</a>
                </li>
                <li>
                  <a href="##">گران‌ترین</a>
                </li>
              </ul>
            </div>
            <div className="product-items">
              <div className="item">
                <div className="image">
                  <a href="##">
                    <img src="" alt="محصول" />
                  </a>
                </div>
                <div className="description">
                  <a href="##" className="title">
                    لپ تاب ایسوس
                  </a>
                  <span className="price">۱۲,۰۰۰,۰۰۰ تومان</span>
                  <span className="avaliable">موجود</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Products;
