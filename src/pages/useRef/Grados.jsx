import React, { useRef, useState } from 'react';

function Grados() {
  const inputRef = useRef();
  const [resultado, setResultado] = useState(null);

  const convertir = () => {
    const grados = parseFloat(inputRef.current.value);
    if (isNaN(grados)) {
      setResultado('Introduce un número válido');
    } else {
      const fahrenheit = grados * 9/5 + 32;
      setResultado(`${fahrenheit.toFixed(2)} °F`);
    }
  };

  return (
    <div>
      <h2>Convertir Grados Centígrados a Fahrenheit </h2>
      <input type="number" ref={inputRef} placeholder="Grados °C" />
      <button onClick={convertir}>Convertir</button>
      {resultado && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default Grados;
