import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(135deg, #1abc9c 20%, #2980b9 80%);
  padding: 8rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  h1 {
    font-weight: 500;
    letter-spacing: -1px;
    font-size: 5rem;
    margin-bottom: 1.5rem;
    margin-top: 0;
  }
  p {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.8;
  }
`;

export const Form = styled.form`
  padding: 2rem;
  background-color: white;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UserInfo = styled.label`
  color: #555;
  margin-bottom: 1rem;
`;

export const FormItem = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 1rem 1.5rem;
  font-family: inherit;
  font-size: 1.2rem;
  width: 100%;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

export const Rules = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin: 1.5rem 0;
  span {
    color: #555;
    margin-right: 0.5rem;
    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      &:visited {
        color: blue;
      }
    }
  }
`;

export const Button = styled.button`
  border: none;
  color: white;
  border-radius: 3px;
  padding: 1rem;
  font-family: inherit;
  cursor: pointer;
  background-color: #3498db;
  transition: all 0.3s;
  &:hover {
    background-color: #2980b9;
  }
  &:focus {
    outline: none;
  }
`;

export const LoginLink = styled.a`
  font-size: 1.3rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:visited {
    color: blue;
  }
`;

export const Error = styled.span`
  padding-right: 0.5rem;
  color: #e5294c;
  font-size: 1.2rem;
`;
