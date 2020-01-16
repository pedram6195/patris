import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1rem;
  flex-basis: calc(50% - 2rem);
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  @media (max-width: 500px) {
    flex-basis: calc(100% - 2rem);
  }
`;

const Title = styled.h4`
  font-size: 1.8rem;
  color: #333;
`;

const Hr = styled.hr`
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 1rem 0;
`;

const Content = styled.p`
  font-size: 1.4rem;
  color: #333;
  line-height: 1.8;
  width: 95%;
`;

const Item = () => {
  return (
    <Wrapper>
      <Title>نقد موبایل نوت ۱۰</Title>
      <Hr />
      <Content>
        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
        بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک
        از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه
        شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی
        نشانگر چگونگی نوعبه مشتری یا صاحب کار خود نشان دهند ...
      </Content>
    </Wrapper>
  );
};

export default Item;
