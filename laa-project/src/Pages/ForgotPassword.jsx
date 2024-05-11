import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;


const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

const FormWrapper = styled.form`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;

`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: teal; 
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


function ForgotPassword(){
  const [userEmail, setEmail] = useState("");  // State to hold the email

  const onChangeInput = (e) => {
    setEmail(e.target.value);  // Update the state with the input value
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/reset-password', { userEmail });
      alert(res.data.msg);
    } catch (err) {
      alert(err.response?.data?.msg || "An error occurred");
    }
  };
  return (
    <Container>
      <FormContainer>
        <FormWrapper onSubmit={formSubmit}>
          <Title>Forget Password</Title>
          <FormGroup>
          <Input 
            type="email"
            name="userEmail"
            placeholder="email"
            value={userEmail}
            onChange={onChangeInput}
            
          />
          </FormGroup>
          
          <Button type="submit">Send Reset Password Link</Button>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
}

export default ForgotPassword;
