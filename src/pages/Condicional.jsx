// pages/Condicional.jsx
import React, { useState } from 'react';

function Condicional() {
  const [logueado, setLogueado] = useState(false);

  return (
    <div>
      <h2>Renderizado Condicional</h2>
      {logueado ? (
        <p>Bienvenido, usuario.</p>
      ) : (
        <p>Por favor, inicia sesión.</p>
      )}
      <button onClick={() => setLogueado(!logueado)}>
        {logueado ? 'Cerrar sesión' : 'Iniciar sesión'}
      </button>
    </div>
  );
}

export default Condicional;
