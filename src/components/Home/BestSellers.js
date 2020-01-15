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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  h3 {
    color: #4d4d4d;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  p {
    font-weight: 300;
    width: 50%;
    text-align: center;
    line-height: 1.8;
    @media (max-width: 767px) {
      width: 90%;
    }
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  a {
    font-size: 1.4rem;
    color: #4d4d4d;
    border-bottom: 1px solid rgba(77, 77, 77, 0.5);
    &:hover {
      border: none;
    }
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  button {
    border: none;
    outline: none;
    margin: 0 0.5rem;
    cursor: pointer;
    background-color: #efefef;
    padding: 0.5rem 1rem;
    i {
      font-size: 3rem;
      color: #4d4d4d;
    }
  }
`;

const SpecialSuggestSlider = styled.div`
  margin-bottom: 2rem;
  .slick-slide {
    padding: 0 1rem;
  }
`;

export default class BestSellers extends React.Component {
  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };

  render() {
    return (
      <Wrapper>
        <Header>
          <h3>پرفروش ترین ها</h3>
          <p>
            در این قسمت پرفروش ترین محصولاتی که توسط کاربران خریداری شده از تمام
            دسته بندی های سایت در لیست زیر قرار گرفته شده و همیشه بروز میشود.
          </p>
        </Header>
        <Navigation>
          <NavigationButtons>
            <button onClick={this.next}>
              <i className="fas fa-angle-right"></i>
            </button>
            <button onClick={this.previous}>
              <i className="fas fa-angle-left"></i>
            </button>
          </NavigationButtons>
          <a href="##">مشاهده لیست کامل</a>
        </Navigation>
        <SpecialSuggestSlider>
          <Slider ref={c => (this.slider = c)} {...options}>
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
  }
}
