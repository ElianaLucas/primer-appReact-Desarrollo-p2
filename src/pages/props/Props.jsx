// pages/props/Props.jsx
import React from 'react';
import Texto from '../../components/Texto';

function Props() {
  return (
    <div>
      <h2>¿Qué son las Props?</h2>
      <Texto>
        Las <strong>props</strong> son parámetros que se pasan a los componentes. Permiten reutilizar componentes enviando datos distintos.
      </Texto>
    </div>
  );
}

export default Props;
