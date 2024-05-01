import React, { useState } from 'react';
import UserList from '../Components/UserList';
import UserForm from '../Components/UserForm';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 20px;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh; // Full height
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 20px; // Adjust margin as needed
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #369c91;
  }
`;

function App() {
  const initialUsers = [
    { id: 1, username: 'alice', email: 'alice@example.com', lastAccess: new Date().toISOString() },
    // Add other users as necessary
  ];

  const [users, setUsers] = useState(initialUsers);
  const [showForm, setShowForm] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleAddOrEditUser = (user) => {
    if (user.id) {
      setUsers(users.map(u => u.id === user.id ? user : u));
    } else {
      const newUser = { ...user, id: Math.max(...users.map(u => u.id)) + 1, lastAccess: new Date().toISOString() };
      setUsers([...users, newUser]);
    }
    setShowForm(false);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <AppContainer>
      <Header>
        <Title>User Management System</Title>
        <Button onClick={() => {
          setCurrentUser(null);
          setShowForm(true);
        }}>Add User</Button>
      </Header>
      <UserForm
        isOpen={showForm}
        initialUserData={currentUser}
        onSaveUser={handleAddOrEditUser}
        onDeleteUser={handleDeleteUser}
        onClose={() => setShowForm(false)}
      />
      <UserList
        users={users}
        onEdit={(user) => {
          setCurrentUser(user);
          setShowForm(true);
        }}
        onDelete={handleDeleteUser}
      />
    </AppContainer>
  );
}

export default App;
