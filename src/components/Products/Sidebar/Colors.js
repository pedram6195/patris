import React, { Component } from "react";

export default class Colors extends Component {
  render() {
    return (
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
              <label htmlFor="color-silver" className="checkbox-container">
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
    );
  }
}
