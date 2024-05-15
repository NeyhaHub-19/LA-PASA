import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalState } from '../GlobalState';
import { Link } from 'react-router-dom';
import Announcement from './Announcement';
import Navbar from './Navbar';
import { Footer } from './Footer';

const ListContainer = styled.div`
  border: 1px solid #ccc;
  padding:20px;
`;

const UserRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  
`;

const ActionButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const HeaderRow = styled(UserRow)`
  background-color: #f1f1f1;
  font-weight: bold;
`;

const ProfilePic=styled.img` 
  object-fit: cover;
`;

const FooterContainer=styled.footer`
padding:70px 0px;
width:100%;
padding-bottom:0px;
`;

function UserList() {
  const state = useContext(GlobalState);
  const [users, setUsers] = state.allUsersAPI.allUsers;
  console.log(state.allUsersAPI.allUsers)


  // Check if users is defined and has length
  if (!users || users.length === 0) {
    return <div>Loading users...</div>; // Or handle loading or empty states appropriately
  }

  return (
    <>
    <Announcement/>
    <Navbar/>
    <ListContainer>
      <HeaderRow>
        <span>Profile Pic</span>
        <span>Username</span>
        <span>Email</span>
        <span>User createdAt</span>
        <span>User updateAt</span>
        <span>Actions</span>
      </HeaderRow>
      
      {users.map(user => (
        <UserRow key={user._id}>
          <ProfilePic src={user.image.url} alt='' style={{width:'180px',height:'150px', borderRadius:'20px'}}/>
          <span>{user.username}</span>
          <span>{user.email}</span>
          <span>{new Date(user.createdAt).toLocaleString()}</span>
          <span>{new Date(user.updatedAt).toLocaleString()}</span>
          <div>
            <Link to={`/updateUser/${user._id}`}>
            <ActionButton style={{ backgroundColor: 'teal', color: 'white' }}>Edit</ActionButton>
            </Link>
            <Link to={`/user/${user._id}/cart`}>
            <ActionButton style={{ backgroundColor: '#333', color: 'white' }}>View Cart</ActionButton>
            </Link>
          </div>
        </UserRow>
      ))}
    </ListContainer>
    <FooterContainer>
    <Footer/>
    </FooterContainer>
    </>
  );
}

export default UserList;