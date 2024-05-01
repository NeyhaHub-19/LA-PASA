import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); // Slightly darker for better focus on form
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px; // More rounded corners for modern look
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  width: 350px; // Slightly wider for better layout
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px; // Rounded corners for inputs
  font-size: 16px; // Larger font size for better readability
`;

const Button = styled.button`
  padding: 12px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const DangerButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
  color: #aaaaaa;
  font-size: 20px;

  &:hover {
    color: #777;
  }
`;

function UserForm({ isOpen, initialUserData, onSaveUser, onDeleteUser, onClose }) {
  const [user, setUser] = useState({ username: '', email: '', lastAccess: '' });

  useEffect(() => {
    setUser(initialUserData || { username: '', email: '', lastAccess: '' });
  }, [initialUserData]);

  if (!isOpen) return null;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Modal>
      <ModalContent>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <Form onSubmit={(e) => {
          e.preventDefault();
          onSaveUser(user);
          onClose();
        }}>
          <label>
            <Input name="username" value={user.username} onChange={handleInputChange} placeholder="Enter username" required />
          </label>
          <label>
            <Input name="email" value={user.email} onChange={handleInputChange} placeholder="Enter email" required />
          </label>
          <label>Last Accessed:
          <Input type="date" name="lastAccess" value={user.lastAccess} onChange={handleInputChange} required />
          </label>
          <Button type="submit">{user.id ? 'Update User' : 'Add User'}</Button>
          {user.id && (
            <DangerButton type="button" onClick={() => {
              if (window.confirm('Are you sure you want to delete this user?')) {
                onDeleteUser(user.id);
                onClose();
              }
            }}>Delete User</DangerButton>
          )}
        </Form>
      </ModalContent>
    </Modal>
  );
}

export default UserForm;
