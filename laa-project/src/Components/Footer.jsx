import styled from 'styled-components';
import { Facebook, Instagram, MailOutline, Phone, Room } from '@mui/icons-material';
import React from 'react';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  background-color: #008080; // Teal green for professional look
  color: white; // White text for contrast
  ${mobile`
    flex-direction: column;
    background-color: #008080;
  `}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``; // Text is already set to inherit white color from Container

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;



const Center = styled.div`

  flex: 1;
  padding: 20px;
  ${mobile`
    display: none;
  `}
`;

const Title = styled.h3`
`;
 // Text is already set to inherit white color from Container

const List = styled.ul`
  margin: 0;
  padding:10px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile`
    background-color: #fff8f8; // You may also want to change this for mobile to match the teal theme
  `}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding :10px;
`;

const StyledLink= styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;


export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LA_PASA.</Logo>
        <Desc>
        La Pasa offers a convenient online platform for meat enthusiasts to access high-quality, fresh meats delivered straight from the farm to their doorstep. Our mission is to provide discerning consumers with an unparalleled meat shopping experience, ensuring they enjoy the finest cuts and products with every order
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><StyledLink to={"/"}>Home</StyledLink></ListItem>
          <ListItem><StyledLink to={"/cart"}>Cart</StyledLink></ListItem>
          <ListItem><StyledLink to={"/products/pork"}>Pork</StyledLink></ListItem>
          <ListItem><StyledLink to={"/products/chicken"}>Chicken</StyledLink></ListItem>
          <ListItem><StyledLink to={"/products/frozen products"}>Frozen Products</StyledLink></ListItem>
          <ListItem><StyledLink to={"/recipes"}>Recipe</StyledLink></ListItem>
          <ListItem><StyledLink to={"/user/profile/:id"}>My Account</StyledLink></ListItem>
          {/* <ListItem><Link>Contact Us</Link></ListItem> */}
          <ListItem><StyledLink>About Us</StyledLink></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px"}} />
          Thati Tole, Lagankhel || Falful Chowk, Kathmandu.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +977 9851858589 || +977 9841246556
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          Thati@gmail.com || Fal@gmail.com
        </ContactItem>
        
      </Right>
    </Container>
  );
};
