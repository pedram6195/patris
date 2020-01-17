import React, { Component } from "react";
import styled from "styled-components";

import PriceLimit from "./PriceLimit";
import Brands from "./Brands";
import Colors from "./Colors";
import Availability from "./Availability";
import { FilterOpenButton } from "../Filters";

const Wrapper = styled.section`
  width: 20%;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 0;
    overflow-x: hidden;
    margin-left: 0;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    background: white;
    border-radius: 3px;
    box-shadow: 0 0 5px;
    transition: width 0.5s;
  }
`;

const FilterCloseButton = styled(FilterOpenButton)`
  width: 10%;
  align-self: flex-end;
  text-align: center;
`;

export default class Sidebar extends Component {
  closeFilter = () => {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.padding = "0";
  };

  render() {
    return (
      <Wrapper id="sidebar">
        <FilterCloseButton onClick={this.closeFilter}>X</FilterCloseButton>
        <PriceLimit />
        <Brands />
        <Colors />
        <Availability />
      </Wrapper>
    );
  }
}
