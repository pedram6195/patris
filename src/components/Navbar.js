import React from "react";

import "../css/navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav className="top-nav">
        <ul className="top-nav-right">
          <li className="logo"><a href="##">فروشگاه زنجیره ای پاتریس</a></li>
          <li><a href="##">ثبت نام در سایت</a></li>
          <li><a href="##">ورود به سایت</a></li>
        </ul>
        <ul className="top-nav-left">
          <li><a href="##">محصولات ویژه</a></li>
          <li><a href="##">تخفیف ها</a></li>
          <li><a href="##">راهنما</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
