import React, { Component } from "react";
import styled from "styled-components";
import Range from "rc-slider/lib/Range";

import "rc-slider/assets/index.css";

import { toPersianNum } from "../../../helpers";

import FilterBox from "../../reusable/Sidebar/FilterBox";

const StyledRange = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
`;

const RangeDetails = styled.div`
  display: flex;
  margin: 2rem 0;
`;

const FromTo = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  align-items: center;
  span {
    font-size: 1.4rem;
    font-weight: 300;
  }
`;

const RangeSubmit = styled.button`
  border: none;
  font-family: inherit;
  border-radius: 3px;
  color: white;
  background-color: #48dbfb;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #0abde3;
  }
`;

export default class PriceLimit extends Component {
  state = {
    sliderValues: [0, 3000000]
  };

  handleChange = sliderValues => {
    this.setState({ sliderValues });
  };

  render() {
    const { sliderValues } = this.state;
    return (
      <FilterBox header="محدوده قیمت" id="price-limit">
        <StyledRange>
          <Range
            min={0}
            max={3000000}
            onChange={this.handleChange}
            defaultValue={sliderValues}
            allowCross={false}
            step={50000}
            reverse={true}
          />
          <RangeDetails>
            <FromTo>
              <span>از</span>
              <span>{toPersianNum(sliderValues[0])}</span>
              <span>تومان</span>
            </FromTo>
            <FromTo>
              <span>تا</span>
              <span>{toPersianNum(sliderValues[1])}</span>
              <span>تومان</span>
            </FromTo>
          </RangeDetails>
          <RangeSubmit>اعمال</RangeSubmit>
        </StyledRange>
      </FilterBox>
    );
  }
}
