import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  background-color: whitesmoke;
  font-size: 1.4rem;
  box-shadow: 0 4px 4px -2px #232323;
  span {
    padding: 1rem;
  }
`;

const FilterList = styled.ul`
  display: flex;
  margin-right: 1rem;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
  li {
    list-style: none;
    display: flex;
    margin: 0 1rem;
    border-radius: 8px;
    background-color: #48dbfb;
    @media (max-width: 600px) {
      margin-top: 0.5rem;
    }
    &:hover {
      background-color: #0abde3;
    }
    a {
      padding: 1rem;
      color: white;
    }
  }
`;

export const FilterOpenButton = styled.button`
  font-family: inherit;
  padding: 0 1rem;
  border-radius: 3px;
  border: none;
  background-color: #4caf50;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default class Filters extends Component {
  openFilter = () => {
    document.getElementById("sidebar").style.padding = "2rem";
    if (window.screen.width > 600) {
      document.getElementById("sidebar").style.width = "50%";
    }else {
      document.getElementById("sidebar").style.width = "80%";
    }
  };

  render() {
    return (
      <Wrapper>
        <span>مرتب سازی براساس : </span>
        <FilterOpenButton onClick={this.openFilter}>
          <i className="fas fa-filter"></i> فیلترها
        </FilterOpenButton>
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
