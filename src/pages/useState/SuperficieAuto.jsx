// pages/useState/SuperficieAuto.jsx
import React, { useState, useEffect } from 'react';

function SuperficieAuto() {
  const [alto, setAlto] = useState('');
  const [ancho, setAncho] = useState('');
  const [superficie, setSuperficie] = useState(null);

  useEffect(() => {
    const a = parseFloat(alto);
    const b = parseFloat(ancho);
    if (!isNaN(a) && !isNaN(b)) {
      setSuperficie(`${(a * b).toFixed(2)} m²`);
    } else {
      setSuperficie(null);
    }
  }, [alto, ancho]);

  return (
    <div>
      <h2>Superficie Automática </h2>
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
      {superficie && <p>Superficie: {superficie}</p>}
    </div>
  );
}

export default SuperficieAuto;
