import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import bee from '../../image/bee.jpg'
import bst from '../../image/bst.jpg'

const Title = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
`;


const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
 
`;

const TopTexts = styled.div`
  display: flex;
  flex-direction: column; /* Display titles vertically */
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-right: 1px solid #ccc;
 
`;

const TopText = styled.span`
display:flex;
  cursor: pointer;
  margin: 10px 0; /* Add margin between titles */
  
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
 
`;

const CartItems = styled.div`
  width: 100%; /* Ensure the CartItems span the full width */
`;
const ProductImage = styled.img`
  width: 50vh;
  height: 50vh;
  border-right: 1px solid #ccc; /* Add border to the right */
  padding-right: 10px; /* Add padding to create space between image and border */
  
`;

const ItemDetails = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  
`;

const ItemName = styled.span`
  flex: 1;
`;

const ItemQuantity = styled.span``;

const ItemTotal = styled.span``;

const ViewCart = () => {
  return (
    <>
      <Navbar />
      <Title>Cart</Title>
      <Top>
        <TopTexts>
          <TopText>Product</TopText>
          <TopText>Quantity</TopText>
          <TopText>Total</TopText>
        </TopTexts>
        <CartItems>
          <CartItem>
            <ProductImage src={bst} alt="Product 1" />
            <ItemDetails>
              <ItemName>Chicken Breast</ItemName>
              <ItemQuantity></ItemQuantity>
              <ItemTotal>Rs.20</ItemTotal>
            </ItemDetails>
          </CartItem>
          <CartItem>
            <ProductImage src={bee} alt="Product 2" />
            <ItemDetails>
              <ItemName>Frozen</ItemName>
              <ItemQuantity>3</ItemQuantity>
              <ItemTotal>Rs.45</ItemTotal>
            </ItemDetails>
          </CartItem>
        </CartItems>
      </Top>
    </>
  );
};

export default ViewCart;
