import React from 'react';
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


const ForgetPassword = () => {
  return (
    <Container>
      <FormContainer>
        <FormWrapper>
          <Title>Forget Password</Title>
          <FormGroup>
          <Input 
            type="email"
            name="email"
            placeholder="email"
            
          />
          </FormGroup>
          
          <Button type="submit">Send Reset Password Link</Button>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
}

export default ForgetPassword;
