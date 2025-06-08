import React, { useState } from 'react';

function Speech() {
  const [nombre, setNombre] = useState('');
  const [indice, setIndice] = useState(0);

  const discurso = [
  `¡Hola! Soy {{nombre}}, desarrollador frontend especializándome en React.`,
  'Con React, puedo crear SPA escalables mediante componentes modulares y reutilizables.',
  'Estoy profundizando en hooks avanzados, context API y integración con backends.',
  'Mi objetivo es dominar React para construir aplicaciones robustas y de alto rendimiento.',
  '¿Qué tecnologías te interesan a ti en el mundo del desarrollo web?'
];
  const fraseActual = discurso[indice].replace('{{nombre}}', nombre || '...');

  const avanzar = () => {
    if (indice < discurso.length - 1) {
      setIndice(indice + 1);
    }
  };

  const retroceder = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    }
  };

  return (
    <div>
      <h2>Memorizar Speech</h2>

      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <div style={{ margin: '20px 0', fontSize: '1.2em' }}>
        <p>{fraseActual}</p>
      </div>

      <button onClick={retroceder} disabled={indice === 0}>
        ◀ Anterior
      </button>

      <button onClick={avanzar} disabled={indice === discurso.length - 1} style={{ marginLeft: '10px' }}>
        Siguiente ▶
      </button>
    </div>
  );
}

export default Speech;
