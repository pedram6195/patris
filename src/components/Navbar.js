import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import "../css/navbar.scss";

class Navbar extends React.Component {
  getNavLinkClass = path => {
    return this.props.location.pathname === path ? "active" : "";
  };
  render() {
    return (
      <header>
        <nav className="top-nav">
          <ul className="top-nav-right">
            <li className={this.getNavLinkClass("/")}>
              <NavLink exact to="/" activeClassName="active">
                فروشگاه زنجیره ای پاتریس
              </NavLink>
            </li>
            <li className={this.getNavLinkClass("/register")}>
              <NavLink to="/register" activeClassName="active">
                ثبت نام در سایت
              </NavLink>
            </li>
            <li className={this.getNavLinkClass("/login")}>
              <NavLink to="/login" activeClassName="active">
                ورود به سایت
              </NavLink>
            </li>
          </ul>
          <ul className="top-nav-left">
            <li>
              <a href="##">محصولات ویژه</a>
            </li>
            <li>
              <a href="##">تخفیف ها</a>
            </li>
            <li>
              <a href="##">راهنما</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Navbar);
