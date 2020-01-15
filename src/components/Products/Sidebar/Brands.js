import React, { Component } from "react";

export default class Brands extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" id="brands-toggle" />
        <label htmlFor="brands-toggle" className="brands-head">
          <h3>برند</h3>
          <i className="fas fa-chevron-down"></i>
        </label>
        <div className="brands-content">
          <hr />
          <ul className="brands-list">
            <li>
              <label htmlFor="brand-huawei" className="checkbox-container">
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
              <label htmlFor="brand-samsung" className="checkbox-container">
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
    );
  }
}
