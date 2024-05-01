import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  border: 1px solid #ccc;
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

function UserList({ users, onEdit, onDelete }) {
  return (
    <ListContainer>
      <HeaderRow>
        <span>Username</span>
        <span>Email</span>
        <span>Last Accessed</span>
        <span>Actions</span>
      </HeaderRow>
      {users.map(user => (
        <UserRow key={user.id}>
          <span>{user.username}</span>
          <span>{user.email}</span>
          <span>{new Date(user.lastAccess).toLocaleString()}</span>
          <div>
            <ActionButton onClick={() => onEdit(user)} style={{ backgroundColor: 'blue', color: 'white' }}>Edit</ActionButton>
            <ActionButton onClick={() => onDelete(user.id)} style={{ backgroundColor: 'red', color: 'white' }}>Delete</ActionButton>
          </div>
        </UserRow>
      ))}
    </ListContainer>
  );
}

export default UserList;
