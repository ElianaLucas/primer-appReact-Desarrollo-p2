import React from 'react';

function Conceptos() {
  return (
    <div>
      <h2>Conceptos Aprendidos</h2>
      <h3>¿Qué es React?</h3>
      <p>React es una biblioteca de JavaScript para construir interfaces de usuario...</p>

      <h3>¿Qué es una interfaz de usuario?</h3>
      <p>Es el conjunto de elementos gráficos que permiten al usuario interactuar...</p>

      <h3>¿Qué es un SPA?</h3>
      <p>SPA significa Single Page Application, es decir, toda la app carga en una sola página...</p>

      <h3>Programación funcional vs POO en React</h3>
      <p>React utiliza un enfoque funcional: funciones puras, inmutabilidad...</p>

      <h3>¿Qué es Node.js?</h3>
      <p>Es un entorno de ejecución para JavaScript del lado del servidor...</p>

      <h3>¿Qué es Git?</h3>
      <p>Git es un sistema de control de versiones para gestionar cambios en el código fuente...</p>

      <h3>Comandos para crear app React</h3>
      <pre>
        npx create-react-app nombre<br />
        cd nombre<br />
        npm start
      </pre>

      <h3>¿Qué es JSX?</h3>
      <p>Es una extensión de JavaScript que permite escribir código HTML dentro de JavaScript...</p>

      <h3>¿Qué es Babel?</h3>
      <p>Babel es un compilador que transforma el código moderno de JavaScript (JSX, ES6+) en código compatible con todos los navegadores...</p>
    </div>
  );
}

export default Conceptos;
