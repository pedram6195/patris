import React, { Component } from "react";
import Range from "rc-slider/lib/Range";
import Switch from "react-switch";

import { toPersianNum } from "../helpers";

import TopMenu from "./TopMenu";

import "rc-slider/assets/index.css";

import "../css/products.scss";

class Products extends Component {
  state = {
    sliderValues: [0, 3000000],
    checked: false
  };

  handleChange = sliderValues => {
    this.setState({ sliderValues });
  };

  handleSwitchChange = checked => {
    this.setState({ checked });
  };

  render() {
    const { sliderValues } = this.state;
    return (
      <>
        <TopMenu />
        <div className="products fade row">
          <section className="sidebar">
            <div className="price-limit">
              <input type="checkbox" id="price-limit-toggle" />
              <label htmlFor="price-limit-toggle" className="price-limit-head">
                <h3>محدوده قیمت</h3>
                <i className="fas fa-chevron-down"></i>
              </label>
              <div className="price-limit-content">
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
                  <button className="range-submit">اعمال</button>
                </div>
              </div>
            </div>
            <div className="brands">
              <input type="checkbox" id="brands-toggle" />
              <label htmlFor="brands-toggle" className="brands-head">
                <h3>برند</h3>
                <i className="fas fa-chevron-down"></i>
              </label>
              <div className="brands-content">
                <hr />
                <ul className="brands-list">
                  <li>
                    <label
                      htmlFor="brand-huawei"
                      className="checkbox-container"
                    >
                      <input type="checkbox" id="brand-huawei" />
                      <span></span>
                    </label>
                    <label htmlFor="brand-huawei" className="checkbox-title">
                      هواوی
                    </label>
                  </li>
                  <li>
                    <label htmlFor="brand-apple" className="checkbox-container">
                      <input type="checkbox" id="brand-apple" />
                      <span></span>
                    </label>
                    <label htmlFor="brand-apple" className="checkbox-title">
                      اپل
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="brand-samsung"
                      className="checkbox-container"
                    >
                      <input type="checkbox" id="brand-samsung" />
                      <span></span>
                    </label>
                    <label htmlFor="brand-samsung" className="checkbox-title">
                      سامسونگ
                    </label>
                  </li>
                  <li>
                    <label htmlFor="brand-sony" className="checkbox-container">
                      <input type="checkbox" id="brand-sony" />
                      <span></span>
                    </label>
                    <label htmlFor="brand-sony" className="checkbox-title">
                      سونی
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="colors">
              <input type="checkbox" id="colors-toggle" />
              <label htmlFor="colors-toggle" className="colors-head">
                <h3>رنگ</h3>
                <i className="fas fa-chevron-down"></i>
              </label>
              <div className="colors-content">
                <hr />
                <ul className="colors-list">
                  <li>
                    <label htmlFor="color-black" className="checkbox-container">
                      <input type="checkbox" id="color-black" />
                      <span></span>
                    </label>
                    <label htmlFor="color-black" className="checkbox-title">
                      مشکی
                    </label>
                  </li>
                  <li>
                    <label htmlFor="color-white" className="checkbox-container">
                      <input type="checkbox" id="color-white" />
                      <span></span>
                    </label>
                    <label htmlFor="color-white" className="checkbox-title">
                      سفید
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="color-silver"
                      className="checkbox-container"
                    >
                      <input type="checkbox" id="color-silver" />
                      <span></span>
                    </label>
                    <label htmlFor="color-silver" className="checkbox-title">
                      نقره ای
                    </label>
                  </li>
                  <li>
                    <label htmlFor="color-blue" className="checkbox-container">
                      <input type="checkbox" id="color-blue" />
                      <span></span>
                    </label>
                    <label htmlFor="color-blue" className="checkbox-title">
                      آبی
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="availablity">
              <input type="checkbox" id="availablity-toggle" />
              <label htmlFor="availablity-toggle" className="availablity-head">
                <h3>فقط کالاهای موجود</h3>
                <i className="fas fa-chevron-down"></i>
              </label>
              <div className="availablity-content">
                <hr />
                <label>
                  <Switch
                    onChange={this.handleSwitchChange}
                    checked={this.state.checked}
                  />
                </label>
              </div>
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
