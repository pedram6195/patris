import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../css/register.scss";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل اشتباه است")
    .required("این فیلد نباید خالی باشد"),
  password: Yup.string().required("این فیلد نباید خالی باشد")
});

export default function Register() {
  document.title = "ورود";
  return (
    <div className="container fade">
      <div className="register">
        <header className="register-header text-center">
          <h1>ورود به سامانه</h1>
          <p>
            با ورود به فروشگاه پاتریس میتوانید از امکانات بیشتر و همچنین تخفیفات
            ویژه بهره مند شوید
          </p>
        </header>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={LoginSchema}
          validateOnBlur={false}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="register-box">
              <label htmlFor="user-info" className="user-info">
                اطلاعات کاربری
              </label>

              <div className="form-item">
                <Field
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="ایمیل خود را وارد کنید"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-item">
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="رمز عبور را وارد کنید"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-item">
                <label htmlFor="rules" className="rules">
                  <Field
                    type="checkbox"
                    name="rules"
                    id="rules"
                    className="rule-checkbox"
                  />
                  <span>مرا به خاطر بسپار</span>
                </label>
                <ErrorMessage name="rules" component="div" className="error" />
              </div>
              <div className="form-item">
                <button type="submit" disabled={isSubmitting}>
                  ورود
                </button>
              </div>
              <div className="form-item">
                <Link to="/forgetPassword" className="login-link">
                  رمز عبورم را فراموش کرده ام
                </Link>
                <br />
                <Link to="/register" className="login-link">
                  حساب کاربری ندارید؟ ثبت نام کنید
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
