import React, { Component } from "react";
import styled from "styled-components";

import PriceLimit from "./PriceLimit";
import Brands from "./Brands";
import Colors from "./Colors";
import Availability from "./Availability";

const Wrapper = styled.section`
  flex-basis: 20%;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`;

export default class Sidebar extends Component {
  render() {
    return (
      <Wrapper>
        <PriceLimit />
        <Brands />
        <Colors />
        <Availability />
      </Wrapper>
    );
  }
}
