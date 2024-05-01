import React from 'react';
import { NotFound } from '../data';


const NotFoundPage = () => {
  const { img } = NotFound[0];
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '50px', color: '#008080' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <img src={img} alt="404 Not Found" style={{ width: '50%', marginBottom: '20px' }} />
    </div>
  );
};

export default NotFoundPage;
