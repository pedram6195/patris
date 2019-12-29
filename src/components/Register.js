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
    <div className="container fade">
      <div className="register">
        <header className="register-header text-center">
          <h1>ثبت نام</h1>
          <p>
            با عضویت در فروشگاه پاتریس میتوانید از امکانات بیشتر و همچنین
            تخفیفات ویژه بهره مند شوید
          </p>
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
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="نام و نام خانوادگی خود را وارد کنید (فقط فارسی)"
                  autoComplete="off"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
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
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  placeholder="نام کاربری خود را وارد کنید"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
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
                  <span>
                    با تمام{" "}
                    <a href="##" className="forgot-pass" target="_blank">
                      قوانین
                    </a>{" "}
                    سایت موافقم
                  </span>
                </label>
                <ErrorMessage name="rules" component="div" className="error" />
              </div>
              <div className="form-item">
                <button type="submit" disabled={isSubmitting}>
                  ثبت نام
                </button>
              </div>
              <div className="form-item">
                <Link to="/login" className="login-link">
                  حساب کاربری دارید؟ از اینجا وارد شوید
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
