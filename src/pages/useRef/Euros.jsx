import React, { useRef, useState } from 'react';

function Euros() {
  const inputRef = useRef();
  const [resultado, setResultado] = useState(null);

  const convertir = () => {
    const valor = parseFloat(inputRef.current.value);
    if (isNaN(valor)) {
      setResultado('Introduce un número válido');
    } else {
      setResultado((valor * 2).toFixed(2) + ' dólares');
    }
  };

  return (
    <div>
      <h2>Conversor Euros a Dólares (useRef)</h2>
      <input type="number" ref={inputRef} placeholder="Introduce euros" />
      <button onClick={convertir}>Convertir</button>
      {resultado && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default Euros;
