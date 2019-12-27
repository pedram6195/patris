import React from "react";

import "../css/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="customer-services">
        <h2>خدمات مشتری</h2>
        <hr />
        <a href="##">پاسخ به پرسش های متداول</a>
        <a href="##">رویه های بازگرداندن کالا</a>
        <a href="##">شرایط استفاده</a>
        <a href="##">حریم خصوصی</a>
      </div>
      <div className="newsletter">
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
      </div>
      <div className="contact-us">
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
      </div>
    </footer>
  );
};

export default Footer;
