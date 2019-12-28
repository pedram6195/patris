import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../css/register.scss";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[\u0600-\u06FF\s]+$/, "فقط از کاراکترهای فارسی استفاده کنید")
    .required("این فیلد نباید خالی باشد"),
  email: Yup.string()
    .email("ایمیل اشتباه است")
    .required("این فیلد نباید خالی باشد"),
  username: Yup.string()
    .min(3, "حداقل 3 حرف و حداکثر 15 حرف")
    .max(15, "حداقل 3 حرف و حداکثر 15 حرف")
    .required("این فیلد نباید خالی باشد"),
  password: Yup.string()
    .min(6, "حداقل 6 کاراکتر")
    .required("این فیلد نباید خالی باشد"),
  rules: Yup.boolean()
    .required("تیک را بزنید")
    .oneOf([true], "باید قوانین را قبول کنید")
});

export default function Register() {
  document.title = "ثبت نام";
  return (
    <div className="container">
      <div className="login fade">
        <header className="login-header center">
          <h1>ثبت نام</h1>
        </header>
        <Formik
          initialValues={{
            name: "",
            email: "",
            username: "",
            password: "",
            rules: false
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-item right">
                <label htmlFor="name">
                  نام و نام خانوادگی <i className="fas fa-address-card"></i>
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="form-control right"
                  placeholder="لطفا فقط به فارسی تایپ کنید"
                  autoComplete="off"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div className="form-item right">
                <label htmlFor="email">
                  ایمیل <i className="fas fa-envelope"></i>
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="form-control right"
                  placeholder="ایمیل خود را وارد کنید"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-item right">
                <label htmlFor="username">
                  نام کاربری <i className="fas fa-user"></i>
                </label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  className="form-control right"
                  placeholder="نام کاربری خود را وارد کنید"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-item right">
                <label htmlFor="password">
                  رمز عبور <i className="fas fa-key"></i>
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="form-control right"
                  placeholder="رمز عبور را وارد کنید"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-item register-helper">
                <div className="remember-me right">
                  <label htmlFor="rules" className="check-label">
                    با تمام{" "}
                    <a href="##" className="forgot-pass" target="_blank">
                      قوانین
                    </a>{" "}
                    سایت موافقم
                  </label>
                  <Field type="checkbox" name="rules" id="rules" />
                  <ErrorMessage
                    name="rules"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <div className="form-item">
                <button type="submit" disabled={isSubmitting}>
                  ثبت نام
                </button>
              </div>
              <Link to="/Login" className="register-link center">
                حساب کاربری دارید؟ از اینجا وارد شوید
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
