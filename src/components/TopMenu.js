import React from "react";

import "../css/top-menu.scss";

const TopMenu = () => {
  return (
    <section className="top-menu">
      <div className="top-menu-right">
        <a href="##" className="dropdown">
          <i className="fas fa-caret-down"></i> منو محصولات
        </a>
        <form action="#" className="top-search-box">
          <input type="text" placeholder="جستجو کالا" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <a href="##" className="top-menu-left">
          <i className="fas fa-shopping-cart"></i> سبد خرید
        <span>۲</span>
      </a>
    </section>
  );
};

export default TopMenu;
