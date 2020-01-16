import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  background-color: whitesmoke;
  font-size: 1.4rem;
  box-shadow: 0px 10px 20px -4px rgba(0, 0, 0, 0.73);
  span {
    padding: 1rem;
  }
`;

const FilterList = styled.ul`
  display: flex;
  margin-right: 1rem;
  li {
    list-style: none;
    display: flex;
    margin: 0 1rem;
    border-radius: 8px;
    background-color: #48dbfb;
    &:hover {
      background-color: #0abde3;
    }
    a {
      padding: 1rem;
      color: white;
    }
  }
`;

export default class Filters extends Component {
  render() {
    return (
      <Wrapper>
        <span>مرتب سازی براساس : </span>
        <FilterList>
          <li>
            <a href="##">پربازدیدترین</a>
          </li>
          <li>
            <a href="##">پرفروش‌ترین‌</a>
          </li>
          <li>
            <a href="##">جدیدترین</a>
          </li>
          <li>
            <a href="##">ارزان‌ترین</a>
          </li>
          <li>
            <a href="##">گران‌ترین</a>
          </li>
        </FilterList>
      </Wrapper>
    );
  }
}
