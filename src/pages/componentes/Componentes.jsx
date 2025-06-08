// pages/componentes/Componentes.jsx
import React from 'react';
import Texto from '../../components/Texto';

function Componentes() {
  return (
    <div>
      <h2>¿Qué son los Componentes?</h2>
      <Texto>
        Un componente en React es una función que devuelve JSX. Puedes reutilizarlo múltiples veces.
      </Texto>
    </div>
  );
}

export default Componentes;
