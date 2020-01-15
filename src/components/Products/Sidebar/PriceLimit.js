import React, { Component } from "react";
import styled from "styled-components";
import Range from "rc-slider/lib/Range";

import "rc-slider/assets/index.css";

import { toPersianNum } from "../helpers";

const PriceLimitToggle = styled.input`
  display: none;
  &:checked ~ div {
    max-height: 100rem;
  }
  &:checked ~ label {
    i {
      transform: rotate(-180deg);
    }
  }
`;

const PriceLimitHead = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  h3 {
    font-size: 1.8rem;
    font-weight: 400;
    color: #333;
  }
  i {
    color: #444;
    transition: all 0.5s;
  }
`;

const PriceLimitContent = styled.div`
  overflow: hidden;
  max-height: 0;
  transition: all 0.5s ease;
  hr {
    margin: 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

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
      <div>
        <PriceLimitToggle type="checkbox" id="price-limit-toggle" />
        <PriceLimitHead htmlFor="price-limit-toggle">
          <h3>محدوده قیمت</h3>
          <i className="fas fa-chevron-down"></i>
        </PriceLimitHead>
        <PriceLimitContent>
          <hr />
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
        </PriceLimitContent>
      </div>
    );
  }
}
