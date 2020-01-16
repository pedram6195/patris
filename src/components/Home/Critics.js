import React from "react";
import styled from "styled-components";

import Item from "../reusable/Critics/Item";
import img from "../../img/comment.png";

const Wrapper = styled.section`
  background-color: #f5f5f5;
  display: flex;
  margin-top: 2rem;
  margin-bottom: 4rem;
  min-height: 48rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Right = styled.div`
  background: url(${img}) no-repeat 50% 50%;
  background-size: cover;
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 900px) {
    padding: 4em 3em;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
  h3,
  p,
  a {
    color: white;
    z-index: 1;
  }
  h3 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.4rem;
    line-height: 1.7;
    width: 85%;
    margin-bottom: 2rem;
  }
  a {
    font-weight: 300;
    font-size: 1.4rem;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

const Left = styled.div`
  flex-basis: 70%;
  padding: 1rem;
  display: flex;
  flex-flow: row wrap;
`;

const Critics = () => {
  return (
    <Wrapper>
      <Right>
        <h3>نقد محصولات</h3>
        <p className="text-center">
          در این بخش نقد آخرین محصولات قرار میگرد تا شما بتوانید با دقت بیشتری
          محصولات خود را انتخاب کنید یا از خرید خود مطمئن شوید
        </p>
        <a href="##">مشاهده همه نقدها</a>
      </Right>
      <Left>
        <Item />
        <Item />
        <Item />
        <Item />
      </Left>
    </Wrapper>
  );
};

export default Critics;
