import React, { useRef, useState } from 'react';

function Superficie() {
  const altoRef = useRef();
  const anchoRef = useRef();
  const [superficie, setSuperficie] = useState(null);

  const calcular = () => {
    const alto = parseFloat(altoRef.current.value);
    const ancho = parseFloat(anchoRef.current.value);

    if (isNaN(alto) || isNaN(ancho)) {
      setSuperficie('Introduce valores válidos');
    } else {
      setSuperficie(`${(alto * ancho).toFixed(2)} m²`);
    }
  };

  return (
    <div>
      <h2>Superficie de un Rectángulo </h2>
      <input type="number" ref={altoRef} placeholder="Alto (m)" />
      <input type="number" ref={anchoRef} placeholder="Ancho (m)" />
      <button onClick={calcular}>Calcular</button>
      {superficie && <p>Superficie: {superficie}</p>}
    </div>
  );
}

export default Superficie;
