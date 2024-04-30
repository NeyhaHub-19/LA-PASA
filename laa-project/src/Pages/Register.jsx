import React, { useState } from 'react';
import styled from 'styled-components';
import reg from '../image/reg.jpg';
import { mobile } from "../responsive";
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px; 
  color: black;
  margin: 20px 0;
`;

const MainContainer = styled.div`
  width: 95vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 60%;
  transform: translateX(-50%);
  width: 80%;
  height: 60%;
  background-image: url(${reg});
  background-size: contain;
  background-position: bottom right;
  background-repeat: no-repeat;
  z-index: -1;
`;

const Wrapper = styled.div`
  width: 45%;
  padding: 20px;
  background-color: white;
  border: 2px solid #ccc;
  box-sizing: border-box;

  ${mobile`
    width: 75%;
  `}
`;

const Form = styled.form`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Agreement = styled.span`
  font-size: 12px;
  display: block;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 80px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "", confirmPassword: "" });

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/register', { ...user }, {
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        withCredentials: true
      });
      localStorage.setItem('firstLogin', true);
      window.location.href = "/";
      alert(response.data.msg);
    } catch (err) {
      alert(err.response ? err.response.data.msg : err.message);
    }
  };

  return (
    <Container>
      <Title>SIGN IN</Title>
      <MainContainer>
        <BackgroundImage />
        <Wrapper>
          <Form onSubmit={registerSubmit}>
            <Input type="text" placeholder="username" name="username" value={user.username} onChange={onChangeInput} />
            <Input type="email" placeholder="email" name="email" value={user.email} onChange={onChangeInput} />
            <Input type="password" placeholder="password" name="password" value={user.password} onChange={onChangeInput} />
            <Input type="password" placeholder="confirm password" name="confirmPassword" value={user.confirmPassword} onChange={onChangeInput} />
            <Agreement> By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
            <Button type="submit">Create</Button>
          </Form>
        </Wrapper>
      </MainContainer>
    </Container>
  );
};

export default Register;
