import React, { Component } from "react";
import styled from "styled-components";

import TopMenu from "../Home/TopMenu";
import Sidebar from "./Sidebar";
import Filters from "./Filters";
import Item from "../reusable/Products/Item";

const Wrapper = styled.div`
  display: flex;
  min-height: 40rem;
  justify-content: space-between;
  margin-bottom: 4rem;
  position: relative;
`;

const ProductList = styled.section`
  width: 80%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ProductItems = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
            <ProductItems>
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </ProductItems>
          </ProductList>
        </Wrapper>
      </>
    );
  }
}

export default Products;
