import React, { Component } from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Li = styled.li`
  margin: 0.5rem 0;
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
`;

const Container = styled.label`
  position: relative;
  margin-left: 1rem;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  &:hover input ~ span {
    background-color: #ccc;
  }
  input {
    display: none;
    &:checked ~ span {
      background-color: #2196f3;
    }
    &:checked ~ span:after {
      display: block;
    }
  }
  span {
    position: absolute;
    top: 0;
    right: 0;
    height: 2rem;
    width: 2rem;
    background-color: #eee;
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 7px;
      top: 2px;
      width: 4px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
`;

const Title = styled.label`
  user-select: none;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #666;
  }
`;

export default class CheckboxList extends Component {
  render() {
    const { lists } = this.props;
    return (
      <List>
        {lists.map((list, i) => {
          return (
            <Li key={i}>
              <Container htmlFor={list.id}>
                <input type="checkbox" id={list.id} />
                <span></span>
              </Container>
              <Title htmlFor={list.id}>{list.name}</Title>
            </Li>
          );
        })}
      </List>
    );
  }
}
