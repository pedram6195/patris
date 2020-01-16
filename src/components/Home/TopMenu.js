import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  @media (max-width: 350px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 350px) {
    margin-bottom: 1rem;
  }
`;

const Dropdown = styled.a`
  background-color: #0095da;
  color: white;
  border-radius: 3px;
  padding: 1.3rem 1rem;
  margin-left: 2rem;
`;

const TopSearchBox = styled.form`
  display: flex;
  input,
  button {
    border: none;
    outline: none;
    font-family: inherit;
  }
  input {
    background-color: #f3f3f3;
    color: #a5a5a5;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    width: 30rem;
    padding: 1.3rem 1rem;
  }
  button {
    background-color: #a5a5a5;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    padding: 1.2rem;
    display: flex;
    align-items: center;
    i {
      color: #f3f3f3;
      font-size: 2.2rem;
    }
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const Left = styled.a`
  background-color: #4caf50;
  color: white;
  border-radius: 3px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  i {
    padding: 1.4rem 1rem;
    background-color: rgba(255, 255, 255, 0.2);
    margin-left: 1rem;
    font-size: 2rem;
  }
  span {
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    margin-right: 1rem;
    font-size: 1.8rem;
    padding: 0.5rem 0.8rem 0.1rem;
  }
  &:hover {
    background-color: #48a24c;
  }
`;

const TopMenu = () => {
  return (
    <Wrapper>
      <Right>
        <Dropdown href="##">
          <i className="fas fa-caret-down"></i> منو محصولات
        </Dropdown>
        <TopSearchBox action="#">
          <input type="text" placeholder="جستجو کالا" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </TopSearchBox>
      </Right>
      <Left href="##">
        <i className="fas fa-shopping-cart"></i> سبد خرید
        <span>۲</span>
      </Left>
    </Wrapper>
  );
};

export default TopMenu;
