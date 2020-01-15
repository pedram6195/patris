import React, { Component } from "react";

import TopMenu from "./TopMenu";
import Sidebar from "./Sidebar";



import "../css/products.scss";

class Products extends Component {


  render() {
    
    return (
      <>
        <TopMenu />
        <div className="products fade row">
          <Sidebar />
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
