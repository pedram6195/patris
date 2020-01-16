import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import Item from "../reusable/Products/Item";

const options = {
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Wrapper = styled.section`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  h3 {
    color: #4d4d4d;
    font-size: 2.5rem;
    font-weight: 500;
    margin-left: 1rem;
  }
  a {
    font-size: 1.4rem;
    color: #4d4d4d;
    border-bottom: 1px solid rgba(77, 77, 77, 0.5);
    &:hover {
      border: none;
    }
  }
`;

const SpecialSuggestSlider = styled.div`
  margin-bottom: 2rem;
  .slick-slide {
    padding: 0 1rem;
  }
`;

const SpecialSuggest = () => {
  return (
    <Wrapper>
      <Header>
        <h3>پیشنهاد ویژه</h3>
        <a href="##">مشاهده لیست کامل</a>
      </Header>
      <SpecialSuggestSlider>
        <Slider {...options}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Slider>
      </SpecialSuggestSlider>
    </Wrapper>
  );
};

export default SpecialSuggest;
