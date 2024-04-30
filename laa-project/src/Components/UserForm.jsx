import React, { useState, useEffect } from 'react';

function UserForm({ addUser, updateUser, currentUser }) {
  const [user, setUser] = useState({ id: null, username: '', email: '', lastAccess: '' });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!user.username || !user.email) return;
    if (user.id !== null) {
      updateUser(user.id, user);
    } else {
      addUser(user);
    }
    setUser({ id: null, username: '', email: '', lastAccess: '' });
  };

  return (
    <form>
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <label>Email</label>
      <input type="email" name="email" value= "email" onChange={handleInputChange} />
      <button onClick={handleSubmit}>{currentUser ? 'Update User' : 'Add User'}</button>
    </form>
  );
}

export default UserForm;
