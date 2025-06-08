// pages/props/Grados.jsx
import React, { useState } from 'react';

function Conversor({ convertir, label }) {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState(null);

  const manejarConversion = () => {
    const num = parseFloat(valor);
    if (!isNaN(num)) {
      setResultado(convertir(num));
    } else {
      setResultado('Valor inválido');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder={label}
      />
      <button onClick={manejarConversion}>Convertir</button>
      {resultado && <p>Resultado: {resultado}</p>}
    </div>
  );
}

function Grados() {
  const convertirAF = (c) => ((c * 9) / 5 + 32).toFixed(2);

  return (
    <div>
      <h2>Props - Grados a Fahrenheit</h2>
      <Conversor convertir={convertirAF} label="Celsius" />
    </div>
  );
}

export default Grados;
