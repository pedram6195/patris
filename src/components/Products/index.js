import React, { Component } from "react";
import styled from "styled-components";

import TopMenu from "../Home/TopMenu";
import Sidebar from "./Sidebar";
import Filters from "./Filters";

const Wrapper = styled.div`
  display: flex;
  min-height: 40rem;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const ProductList = styled.section`
  flex-basis: 80%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
`;

class Products extends Component {
  render() {
    return (
      <>
        <TopMenu />
        <Wrapper className="fade row">
          <Sidebar />
          <ProductList>
            <Filters />
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
          </ProductList>
        </Wrapper>
      </>
    );
  }
}

export default Products;
