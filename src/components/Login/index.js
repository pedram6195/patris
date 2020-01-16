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

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل اشتباه است")
    .required("این فیلد نباید خالی باشد"),
  password: Yup.string().required("این فیلد نباید خالی باشد")
});

export default function Login() {
  document.title = "ورود";
  return (
    <Container className="fade">
      <Wrapper>
        <Header>
          <h1>ورود به سامانه</h1>
          <p>
            با ورود به فروشگاه پاتریس میتوانید از امکانات بیشتر و همچنین تخفیفات
            ویژه بهره مند شوید
          </p>
        </Header>
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
                  type="password"
                  name="password"
                  id="password"
                  placeholder="رمز عبور را وارد کنید"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <Error>
                  {errors.password && touched.password && errors.password}
                </Error>
              </FormItem>
              <FormItem>
                <Rules htmlFor="rules">
                  <input type="checkbox" name="rules" id="rules" />
                  <span> مرا به خاطر بسپار</span>
                </Rules>
              </FormItem>
              <FormItem>
                <Button type="submit" disabled={isSubmitting}>
                  ورود
                </Button>
              </FormItem>
              <FormItem>
                <LoginLink to="/forgetPassword">
                  رمز عبورم را فراموش کرده ام
                </LoginLink>
              </FormItem>
              <FormItem>
                <LoginLink to="/register">
                  حساب کاربری ندارید؟ ثبت نام کنید
                </LoginLink>
              </FormItem>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
}
