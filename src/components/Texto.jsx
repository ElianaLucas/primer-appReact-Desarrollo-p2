// components/Texto.jsx
import React from 'react';

function Texto({ children }) {
  return <p style={{ fontSize: '18px', color: '#333' }}>{children}</p>;
}

export default Texto;
