import React, { Component } from "react";
import styled from "styled-components";

import img2 from "../../../img/img2.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  direction: rtl;
`;

const ItemImage = styled.a`
  height: 21rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  img {
    height: 18.5rem;
    width: auto;
  }
`;

const ItemTitle = styled.a`
  font-size: 1.4rem;
  color: #444;
  padding: 1rem 0;
`;

const Price = styled.p`
  color: #fb3449;
  text-decoration: line-through;
  font-size: 1.4rem;
`;

const Discount = styled.p`
  color: #4caf50;
  font-size: 1.5rem;
`;

export default class Item extends Component {
  render() {
    return (
      <Wrapper>
        <ItemImage href="##">
          <img src={img2} alt="پیشنهاد ویژه" />
        </ItemImage>
        <div className="text-center">
          <ItemTitle href="##">هارد دیسک اکسترنال...</ItemTitle>
          <Price>۶۰,۰۰۰ تومان</Price>
          <Discount>۴۵,۰۰۰ تومان</Discount>
        </div>
      </Wrapper>
    );
  }
}
