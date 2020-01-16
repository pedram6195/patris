import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
`;

const CheckboxToggle = styled.input`
  display: none;
  &:checked ~ div {
    max-height: 0;
    overflow: hidden;
  }
  &:checked ~ label {
    i {
      transform: rotate(180deg);
    }
  }
`;

const Head = styled.label`
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

const Content = styled.div`
  max-height: 100rem;
  transition: all 0.5s ease;
  ${prop =>
    prop.center &&
    `
      text-align: center;
  `}
  hr {
    margin: 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default class FilterBox extends Component {
  render() {
    const { header, id, children } = this.props;
    return (
      <Wrapper>
        <CheckboxToggle type="checkbox" id={id} />
        <Head htmlFor={id}>
          <h3>{header}</h3>
          <i className="fas fa-chevron-up"></i>
        </Head>
        <Content center={this.props.center ? true : false}>
          <hr />
          {children}
        </Content>
      </Wrapper>
    );
  }
}
