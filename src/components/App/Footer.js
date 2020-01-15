import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #49484b;
  display: flex;
  flex-wrap: wrap;
  padding: 2.5rem 1.5rem;
  @media (max-width: 620px) {
    flex-direction: column;
  }
  * {
    color: white;
  }
  & > * {
    padding: 0 2rem;
    margin-bottom: 4rem;
    @media (max-width: 620px) {
      padding: 0 0.5rem;
    }
  }
  h2 {
    font-size: 1.9rem;
    font-weight: 300;
  }
  hr {
    margin: 1rem 0;
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
  a {
    font-size: 1.5rem;
    font-weight: 300;
    margin: 1rem 0;
  }
  p {
    margin: 1rem 0 2rem;
    width: 95%;
    line-height: 1.8;
  }
`;

const CustomerServices = styled.div`
  flex-basis: 28%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    flex-basis: 45%;
  }
`;

const NewsLetter = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    flex-basis: 55%;
  }
  form {
    display: flex;
    * {
      border: none;
      outline: none;

      font-family: inherit;
      border-radius: 3px;
      padding: 1rem;
    }
    input {
      color: #666;
      margin-left: 2rem;
      flex-grow: 1;
    }
    button {
      background-color: #38ca6f;
      cursor: pointer;
    }
  }
`;

const ContactUs = styled.div`
  flex-basis: 32%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    flex-basis: 100%;
  }
  .head {
    display: flex;
    justify-content: space-between;
  }
  .content {
    display: flex;
    align-items: center;
    .info {
      display: flex;
      flex-direction: column;
    }
    .logos {
      padding: 0 2rem;
      display: flex;
      flex-flow: row wrap;
      margin: auto;
      a {
        margin: 0 1rem;
        i {
          font-size: 3.5rem;
          @media (max-width: 380px) {
            font-size: 2.5rem;
          }
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <CustomerServices>
        <h2>خدمات مشتری</h2>
        <hr />
        <a href="##">پاسخ به پرسش های متداول</a>
        <a href="##">رویه های بازگرداندن کالا</a>
        <a href="##">شرایط استفاده</a>
        <a href="##">حریم خصوصی</a>
      </CustomerServices>
      <NewsLetter>
        <h2>ثبت نام در خبرنامه پاتریس</h2>
        <hr />
        <p>
          با ثبت نام در خبرنامه پاتریس ، اولین نفری باشید که از جدیدترین
          محصولات، جشنواره ها و فروش‌های ویژه ما مطلع می شوید.
        </p>
        <form action="#">
          <input type="text" placeholder="آدرس ایمیل شما" />
          <button type="submit">ثبت ایمیل</button>
        </form>
      </NewsLetter>
      <ContactUs>
        <div className="head">
          <h2>اطلاعات پاتریس</h2>
          <h2>پشتیبانی</h2>
          <h2>۸۸۱۱۸۸۱۱ (۰۲۱)</h2>
        </div>
        <hr />
        <div className="content">
          <div className="info">
            <a href="##">تماس با ما</a>
            <a href="##">درباره ما</a>
          </div>
          <div className="logos">
            <a href="##">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="##">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="##">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="##">
              <i className="fab fa-google-plus"></i>
            </a>
          </div>
        </div>
      </ContactUs>
    </StyledFooter>
  );
};

export default Footer;
