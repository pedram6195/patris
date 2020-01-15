import React, { Component } from "react";
import styled from "styled-components";

import PriceLimit from "./PriceLimit";
import Brands from "./Brands";
import Colors from "./Colors";
import Availability from "./Availability";

const StyledSidebar = styled.section`
  flex-basis: 20%;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  & > div {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
  }
`;

export default class Sidebar extends Component {
  render() {
    return (
      <StyledSidebar>
        <PriceLimit />
        <Brands />
        <Colors />
        <Availability />
      </StyledSidebar>
    );
  }
}
