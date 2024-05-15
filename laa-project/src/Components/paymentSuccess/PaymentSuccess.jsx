import React from 'react'
import styled from 'styled-components'
import Checked from '../../image/checked (1).png'
import { Link } from 'react-router-dom'


const Image=styled.img`
padding:30px;
`

const ImageContainer = styled.div`
  padding-bottom: 20px;
`;


const Wrapper = styled.div`
  text-align: center;
`;


const Title = styled.h2`
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 18px;
  margin-bottom:20px;
`;

const Button=styled.button`
border-radius:10px;
background-color:teal;
padding: 8px 16px;
`;

const StyledLink=styled(Link)`
text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;


const PaymentSuccess = () => {
  return (
  <>
   <Wrapper>
    <ImageContainer>
    </ImageContainer>
    <Image src={Checked} alt="Payment Successful"/>
      <Title>Payment Successful!</Title>
      <Message>Your payment has been successfully processed. Thank you for your shopping with us!</Message>
      <Button><StyledLink to='/'>Go Back <StyledLink/></StyledLink></Button>
    </Wrapper>

  </>
  )
}

export default PaymentSuccess