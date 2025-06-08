// pages/componentes/Superficie.jsx
import React, { useState } from 'react';

function CalculadoraSuperficie() {
  const [alto, setAlto] = useState('');
  const [ancho, setAncho] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const a = parseFloat(alto);
    const b = parseFloat(ancho);
    if (!isNaN(a) && !isNaN(b)) {
      setResultado((a * b).toFixed(2));
    } else {
      setResultado('Introduce valores válidos');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={alto}
        onChange={(e) => setAlto(e.target.value)}
        placeholder="Alto (m)"
      />
      <input
        type="number"
        value={ancho}
        onChange={(e) => setAncho(e.target.value)}
        placeholder="Ancho (m)"
      />
      <button onClick={calcular}>Calcular</button>
      {resultado && <p>Superficie: {resultado} m²</p>}
    </div>
  );
}

function Superficie() {
  return (
    <div>
      <h2>Componentes - Superficie Rectángulo</h2>
      <CalculadoraSuperficie />
    </div>
  );
}

export default Superficie;
