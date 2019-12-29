import React, { Component } from "react";

import TopMenu from "./TopMenu";

import "../css/products.scss";

class Products extends Component {
  render() {
    return (
      <>
        <TopMenu />
        <div className="container fade">
          <section className="sidebar"></section>
          <section className="products">products</section>
        </div>
      </>
    );
  }
}

export default Products;
