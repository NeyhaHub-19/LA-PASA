import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import bee from '../../image/bee.jpg';
import bst from '../../image/bst.jpg';
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import Loading from '../utils/loading/Loading';
import axios from 'axios';

const Title = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  padding: 30px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 1200px; // Increased max-width
  margin: 0 auto;
  background-color: #FAEBD7 ;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const TopTexts = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
`;

const TopText = styled.span`
  flex: 1;
  text-align: center;
  color: #555;
  font-weight: 500;
  font-size: 16px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fff; // Maintain hover effect
  }
`;

const CartItems = styled.div`
  width: 100%;
`;

const ProductImage = styled.img`
  width: 140px; // Adjusted for larger container
  height: 140px; // Adjusted for larger container
  margin-right: 20px; // Increased margin
  border-radius: 8px;
  object-fit: cover;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between; // Changed to space-between for better spacing in larger width
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const ItemName = styled.span`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

const ItemQuantity = styled.span`
  font-size: 16px;
  color: #666;
`;

const ItemTotal = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

const ViewCart = () => {
  const state = useContext(GlobalState);
  const [loading, setLoading] = useState(false);
  const[cart, setCart] = useState([])
  const param = useParams()

  useEffect(()=>{
    const fetchUserCart = async ()=>{
      try{
        if(param.id){
          setLoading(true)
          const response = await axios.get(`http://localhost:8000/api/user/${param.id}/cart`)
          setCart(response.data)
          console.log(response.data)
          setLoading(false)
        }

      }catch(err){
        console.log(err.response.data.msg)

      }

    }

    fetchUserCart()
  },[param.id])

  return (
    <>
      <Navbar />
      {/* <Title>Your Shopping Cart</Title> */}
      <Top >
        <TopTexts>
          <TopText>Product</TopText>
          <TopText>Title</TopText>
          <TopText>Description</TopText>
          <TopText>Total</TopText>
        </TopTexts>
        <CartItems>
        {cart.map(items => (
  <CartItem key={items._id}>
    <ProductImage src={items.image.url} alt="Chicken Breast" />
    <ItemDetails>
      <Column>
        <ItemName>{items.title}</ItemName>
      </Column>
      <Column>
        <ItemQuantity>{items.desc}</ItemQuantity>
      </Column>
      <Column>
        <ItemTotal>{items.price}</ItemTotal>
      </Column>
    </ItemDetails>
  </CartItem>
))}

          
        </CartItems>
      </Top>
    </>
  );
};

export default ViewCart;
