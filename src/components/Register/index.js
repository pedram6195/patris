import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  Container,
  Wrapper,
  Header,
  Form,
  UserInfo,
  FormItem,
  Input,
  Rules,
  Button,
  LoginLink,
  Error
} from "../reusable/Register";

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
    <Container className="fade">
      <Wrapper>
        <Header>
          <h1>ثبت نام</h1>
          <p>
            با عضویت در فروشگاه پاتریس میتوانید از امکانات بیشتر و همچنین
            تخفیفات ویژه بهره مند شوید
          </p>
        </Header>
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
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <Form onSubmit={handleSubmit}>
              <UserInfo>اطلاعات کاربری</UserInfo>
              <FormItem>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="نام و نام خانوادگی خود را وارد کنید (فقط فارسی)"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <Error>{errors.name && touched.name && errors.name}</Error>
              </FormItem>
              <FormItem>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="ایمیل خود را وارد کنید"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <Error>{errors.email && touched.email && errors.email}</Error>
              </FormItem>
              <FormItem>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="نام کاربری خود را وارد کنید"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <Error>
                  {errors.username && touched.username && errors.username}
                </Error>
              </FormItem>
              <FormItem>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="رمز عبور را وارد کنید"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <Error>{errors.password && touched.password && errors.password}</Error>
              </FormItem>
              <FormItem>
                <Rules htmlFor="rules">
                  <input
                    type="checkbox"
                    name="rules"
                    id="rules"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rules}
                  />
                  <span>
                    با تمام{" "}
                    <a href="##" className="forgot-pass" target="_blank">
                      قوانین
                    </a>{" "}
                    سایت موافقم
                  </span>
                </Rules>
                <Error>
                  {errors.rules && touched.rules && errors.rules}
                </Error>
              </FormItem>
              <FormItem>
                <Button type="submit" disabled={isSubmitting}>
                  ثبت نام
                </Button>
              </FormItem>
              <FormItem>
                <LoginLink href="/login">
                  حساب کاربری دارید؟ از اینجا وارد شوید
                </LoginLink>
              </FormItem>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
}
