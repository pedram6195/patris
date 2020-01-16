import React from "react";
import styled from "styled-components";

import pic1 from "../../img/Layer-18.png";
import pic2 from "../../img/Layer-22.png";
import pic3 from "../../img/Layer-17.png";
import pic4 from "../../img/Layer-16.png";
import pic5 from "../../img/Layer-19.png";
import pic6 from "../../img/Layer-21.png";

const Wrapper = styled.section`
  margin-top: 3rem;
`;

const Pics = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Link = styled.a`
  transition: all 0.2s;
  &:hover {
    transform: scale(1.075);
  }
  img {
    width: 100%;
  }
`;

const Pictures = () => {
  return (
    <Wrapper>
      <Pics className="row">
        <Link href="##">
          <img src={pic1} alt="تصاویر" />
        </Link>
        <Link href="##">
          <img src={pic2} alt="تصاویر" />
        </Link>
        <Link href="##">
          <img src={pic3} alt="تصاویر" />
        </Link>
      </Pics>
      <Pics className="row">
        <Link href="##">
          <img src={pic4} alt="تصاویر" />
        </Link>
        <Link href="##">
          <img src={pic5} alt="تصاویر" />
        </Link>
        <Link href="##">
          <img src={pic6} alt="تصاویر" />
        </Link>
      </Pics>
    </Wrapper>
  );
};

export default Pictures;
