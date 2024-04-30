import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    console.log('Password reset initiated:', password);
    setPassword('');
    setRepeatPassword('');
    setErrorMessage('');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <label style={{ fontSize: '50px', padding: '1rem' }}>Reset Password</label>
      <form onSubmit={handleSubmit} style={{ width: '500px', background: 'white', margin: '50px auto', padding: '1rem', border: '2px solid #ccc' }}>
        <div style={{ marginBottom: '1rem', padding: '1rem' }}>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="New Password"
            style={{ padding: '5px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '1rem', padding: '1rem' }}>
          <input
            type="password"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            placeholder="Confirm Password"
            style={{ padding: '5px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <button type="submit" style={{ marginTop: '1rem', background: '#006D5B', color: 'white', border: 'none', padding: '10px 20px' }}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
