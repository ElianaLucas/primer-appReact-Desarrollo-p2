// pages/componentes/Euros.jsx
import React, { useState } from 'react';

function ConversorEuros() {
  const [euros, setEuros] = useState('');
  const [dolares, setDolares] = useState(null);

  const convertir = () => {
    const valor = parseFloat(euros);
    if (!isNaN(valor)) {
      setDolares((valor * 1.07).toFixed(2));
    } else {
      setDolares('Introduce un número válido');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={euros}
        onChange={(e) => setEuros(e.target.value)}
        placeholder="Euros"
      />
      <button onClick={convertir}>Convertir</button>
      {dolares && <p>Dólares: {dolares}</p>}
    </div>
  );
}

function Euros() {
  return (
    <div>
      <h2>Componentes - Euros a Dólares</h2>
      <ConversorEuros />
    </div>
  );
}

export default Euros;
