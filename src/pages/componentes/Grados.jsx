// pages/componentes/Grados.jsx
import React, { useState } from 'react';

function ConversorGrados() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState(null);

  const convertir = () => {
    const valor = parseFloat(celsius);
    if (!isNaN(valor)) {
      setFahrenheit(((valor * 9) / 5 + 32).toFixed(2));
    } else {
      setFahrenheit('Introduce un número válido');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        placeholder="Celsius"
      />
      <button onClick={convertir}>Convertir</button>
      {fahrenheit && <p>Fahrenheit: {fahrenheit}</p>}
    </div>
  );
}

function Grados() {
  return (
    <div>
      <h2>Componentes - Grados a Fahrenheit</h2>
      <ConversorGrados />
    </div>
  );
}

export default Grados;
