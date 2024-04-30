import React, { useState } from 'react';
import UserForm from '../Components/UserForm';
import UserList from '../Components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = user => {
    user.id = users.length + 1;
    user.lastAccess = new Date().toISOString();
    setUsers([...users, user]);
  };

  const updateUser = (id, updatedUser) => {
    updatedUser.lastAccess = new Date().toISOString();
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <h1>User Management System</h1>
      <UserForm addUser={addUser} updateUser={updateUser} currentUser={currentUser} />
      <UserList users={users} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default App;
