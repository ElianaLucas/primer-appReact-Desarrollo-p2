// pages/props/Superficie.jsx
import React, { useState } from 'react';

function SuperficieRectangulo({ unidad }) {
  const [alto, setAlto] = useState('');
  const [ancho, setAncho] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const a = parseFloat(alto);
    const b = parseFloat(ancho);
    if (!isNaN(a) && !isNaN(b)) {
      setResultado(`${(a * b).toFixed(2)} ${unidad}`);
    } else {
      setResultado('Valores inválidos');
    }
  };

  return (
    <div>
      <input type="number" value={alto} onChange={(e) => setAlto(e.target.value)} placeholder="Alto" />
      <input type="number" value={ancho} onChange={(e) => setAncho(e.target.value)} placeholder="Ancho" />
      <button onClick={calcular}>Calcular</button>
      {resultado && <p>Superficie: {resultado}</p>}
    </div>
  );
}

function Superficie() {
  return (
    <div>
      <h2>Props - Superficie Rectángulo</h2>
      <SuperficieRectangulo unidad="m²" />
    </div>
  );
}

export default Superficie;
