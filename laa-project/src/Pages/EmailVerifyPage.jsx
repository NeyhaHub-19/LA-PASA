import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';

// Styled components
const VerifyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const VerifyContent = styled.div`
  text-align: center;
`;

const Icon = styled(FaCheckCircle)`
  color: #008080;
  font-size: 4em;
`;

const Button = styled.button`
  background-color: #008080;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  margin-top: 20px;
`;

// EmailVerifyPage component
const EmailVerifyPage = () => {
  const redirectToHomepage = () => {
    window.location.href = '/';
  };

  return (
    <VerifyContainer>
      <VerifyContent>
        <Icon />
        <h1>Email Verified Successfully!</h1>
        <p>Your email has been successfully verified. You can now access all features of our platform.</p>
        <Button onClick={redirectToHomepage}>
          Go to Homepage
        </Button>
      </VerifyContent>
    </VerifyContainer>
  );
};

export default EmailVerifyPage;
