import axios from 'axios';
import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { GlobalState } from '../GlobalState';

function ResetPasswordPage() {
  const state = useContext(GlobalState);
  const [id, setId] = state.userAPI.id;
  const [passwords, setPasswords] = useState({
    newPassword: "",
    newconfirmPassword: ""
  });

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setPasswords(prevPasswords => ({
      ...prevPasswords,
      [name]: value
    }));
  };

  const handleSubmit = async(event)=>{
    event.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8000/api/resetPass/${id}`, {...passwords});
      alert(res.data.msg);
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <label style={{ fontSize: '50px', padding: '1rem' }}>Reset Password</label>
      <form onSubmit={handleSubmit} style={{ width: '500px', background: 'white', margin: '50px auto', padding: '1rem', border: '2px solid #ccc' }}>
        <div style={{ marginBottom: '1rem', padding: '1rem' }}>
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={passwords.newPassword}
            onChange={handlePasswordChange}
            style={{ padding: '5px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '1rem', padding: '1rem' }}>
          <input
            type="password"
            name="newconfirmPassword"
            placeholder="Confirm Password"
            value={passwords.newconfirmPassword}
            onChange={handlePasswordChange}
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
