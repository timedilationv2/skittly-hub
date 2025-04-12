import React from 'react';

const ATSButton = ({ text, onClick }) => (
  <button 
    style={{
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
    onClick={onClick}
  >
    {text}
  </button>
);

export default ATSButton;
