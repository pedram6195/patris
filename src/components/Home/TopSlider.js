import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img from '../../img/img.png';

const settings = {
  rtl: true,
  dots: true,
  infinite: true,
  speed: 750,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3500
};

const Item = styled.div`
  height: 25rem;
  background: url(${img}) no-repeat 50% 50%;
  background-size: cover;
  padding-right: 10rem;
  padding-top: 8rem;
  @media (max-width: 500px) {
    padding-right: 0;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }
`;

const SpecsLink = styled.a`
  color: white;
  background-color: #38ca6f;
  border-radius: 3px;
  padding: 1rem 2rem;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: #444;
  margin-top: 1rem;
  padding: 2rem 1rem;
  width: 38rem;
  border-radius: 3px;
  @media (max-width: 767px) {
    width: auto;
  }
`;

const Price = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

const TopSlider = () => {
  return (
    <section>
      <Slider {...settings}>
        <Item>
          <Description>
            <SpecsLink href="##">مشخصات محصول</SpecsLink>
            <Info>
              <Price>
                <span>۳,۰۰۰,۰۰۰</span> تومان
              </Price>
              <div className="description-title">آیفون ۱۲۸ گیگابایتی</div>
            </Info>
          </Description>
        </Item>
        <Item>
          <Description>
            <SpecsLink href="##">مشخصات محصول</SpecsLink>
            <Info>
              <Price>
                <span>۳,۰۰۰,۰۰۰</span> تومان
              </Price>
              <div className="description-title">آیفون ۱۲۸ گیگابایتی</div>
            </Info>
          </Description>
        </Item>
        <Item>
          <Description>
            <SpecsLink href="##">مشخصات محصول</SpecsLink>
            <Info>
              <Price>
                <span>۳,۰۰۰,۰۰۰</span> تومان
              </Price>
              <div className="description-title">آیفون ۱۲۸ گیگابایتی</div>
            </Info>
          </Description>
        </Item>
      </Slider>
    </section>
  );
};

export default TopSlider;
