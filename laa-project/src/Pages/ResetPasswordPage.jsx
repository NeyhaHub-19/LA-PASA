import axios from 'axios';
import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { GlobalState } from '../GlobalState';

function ResetPasswordPage() {
  const state = useContext(GlobalState)
  const [userId, setUserId] = state.resetAPI.userId
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: ""
  });
  const[id, setID] = state.userAPI.id

  

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(event)=>{
    event.preventDefault()
    try{
      const res = await axios.post(`http://localhost:8000/api/reset-password/${id}/reset/aca00f798635842ae9fd50627768310a45e07efab55ad95b3ae13054eeaced38`)

    }catch(err){

    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <label style={{ fontSize: '50px', padding: '1rem' }}>Reset Password</label>
      <form onSubmit={handleSubmit} style={{ width: '500px', background: 'white', margin: '50px auto', padding: '1rem', border: '2px solid #ccc' }}>
        <div style={{ marginBottom: '1rem', padding: '1rem' }}>
          <input
            type="password"
            placeholder="New Password"
            style={{ padding: '5px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '1rem', padding: '1rem' }}>
          <input
            type="password"
            placeholder="Confirm Password"
            style={{ padding: '5px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
         <div style={{ color: 'red' }}></div>
        <button type="submit" style={{ marginTop: '1rem', background: '#006D5B', color: 'white', border: 'none', padding: '10px 20px' }}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
