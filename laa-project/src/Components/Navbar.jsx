import React, { useContext } from 'react';
import styled from 'styled-components';
import { Search, AddShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import {mobile} from "../responsive"
import { useSelector } from 'react-redux';
import { logout } from "../redux/userRedux";
import { useDispatch } from 'react-redux';
import { GlobalState } from '../GlobalState';
import { Link } from 'react-router-dom';
import axios from 'axios';


// Styled components
const Container = styled.div`
  max-width: 100%;
  height: 60px;
  margin: 0;
  ${mobile(`
  height:50px;
  padding: 20px;
`)}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items:flex-start;
  justify-content: space-between;
  ${mobile(`
  padding: 20px;
`)}
`;

const StyledLinkItem = styled.li`
  list-style: none; 
  margin-right: 25px;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 5px;
  top:-5px;

  ${mobile(`
  margin-left: -10px; 
`)}
  
`;

const Input = styled.input`
  border: none;
  ${mobile(`
  width: 50px;
 
`)}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile(`
  margin-left: 10px; 
`)}
  
`;

const Logo = styled.h1`
  font-weight: bold;
  position: relative;
  top: -10px;
  ${mobile({fontSize:"20px"})}
  
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent:"center"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
  ${mobile({flex:2,fontSize:"12px", marginLeft:"20px"})}
`;

// Navbar component
const Navbar = () => {
  const state = useContext(GlobalState)
  const [isLogged, setIsLogged] = state.userAPI.isLogged
  const [username, setUsername] = state.userAPI.username
  const [isAdmin, setIsAdmin] = state.userAPI.isAdmin
  const [cart] = state.userAPI.cart

  const logoutUser = async()=>{
    await axios.get('http://localhost:8000/api/logout')
    localStorage.removeItem('firstLogin')
    window.location.href = "/"
  }

  const adminRouter = () =>{
    return (
      <>
      <StyledLinkItem><Link>Add Products</Link></StyledLinkItem>
      <StyledLinkItem><Link>Categories</Link></StyledLinkItem>
      </>
    )
  }

  const loggedRouter = () =>{
    return(
      <>
      <StyledLinkItem><Link to="/" onClick={logoutUser}>Logout</Link></StyledLinkItem>
      </>
    )
  }
  return (
    <Container>
      <Wrapper>
        <Left>
        <h1>Welcome,<span style={{color:'#008080'}}>{isLogged && username ? username : "Guest"}</span> </h1>
        </Left>
        <Center>
          <Logo style={{margin:'10px'}}>{isAdmin? 'Admin' : 'LA-PASA'}</Logo>
        </Center>
        <Right>
          
            <>
              <MenuItem>{isAdmin? 'Users':'Profile'}</MenuItem>
              {
                isAdmin && adminRouter()}{
                  isLogged?loggedRouter():
              <MenuItem><Link to="/login">Login ✥ Register</Link></MenuItem>
}    
            </>
          
          {
            isAdmin? '':
          <MenuItem>
            <Badge badgeContent={cart.length} color="secondary">
              <AddShoppingCartOutlined/>
            </Badge>
          </MenuItem>
         }
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;