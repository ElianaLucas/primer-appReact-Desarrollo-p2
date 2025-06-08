import React, { useState } from 'react';
import Menu from './components/Menu';
import Conceptos from './pages/Conceptos';
import Euros from './pages/useRef/Euros';
import Grados from './pages/useRef/Grados';
import Superficie from './pages/useRef/Superficie';
import EurosState from './pages/useState/Euros';
import GradosState from './pages/useState/Grados';
import SuperficieState from './pages/useState/Superficie';
import SuperficieAuto from './pages/useState/SuperficieAuto';
import Componentes from './pages/componentes/Componentes';
import EurosComponentes from './pages/componentes/Euros';
import GradosComponentes from './pages/componentes/Grados';
import SuperficieComponentes from './pages/componentes/Superficie';
import Props from './pages/props/Props';
import Post from './pages/props/Post';
import EurosProps from './pages/props/Euros';
import GradosProps from './pages/props/Grados';
import SuperficieProps from './pages/props/Superficie';
import Condicional from './pages/Condicional';
import CompMultiple from './pages/CompMultiple';
import Viaje from './pages/Viaje';
import ArrayObjetos from './pages/ArrayObjetos';
import Speech from './pages/Speech';
import Minijuego from './pages/Minijuego';

function App() {
  const [pantalla, setPantalla] = useState('conceptos');

  const renderContenido = () => {
    switch (pantalla) {
      case 'conceptos':
        return <Conceptos />;
      case 'useref-euros':
        return <Euros />;
      case 'useref-grados':
        return <Grados />;
      case 'useref-superficie':
        return <Superficie />;
      case 'usestate-euros':
        return <EurosState />;
      case 'usestate-grados':
        return <GradosState />;
      case 'usestate-superficie':
        return <SuperficieState />;
      case 'usestate-superficie-auto':
        return <SuperficieAuto />;
      case 'componentes':
        return <Componentes />;
      case 'componentes-euros':
        return <EurosComponentes />;
      case 'componentes-grados':
        return <GradosComponentes />;
      case 'componentes-superficie':
        return <SuperficieComponentes />;
      case 'props':
        return <Props />;
      case 'props-post':
        return <Post />;
      case 'props-euros':
        return <EurosProps />;
      case 'props-grados':
        return <GradosProps />;
      case 'props-superficie':
        return <SuperficieProps />;
      case 'condicional':
        return <Condicional />;
      case 'comp-multiple':
        return <CompMultiple />;
      case 'viaje':
        return <Viaje />;
      case 'array':
        return <ArrayObjetos />;
      case 'speech':
        return <Speech />;
      case 'minijuego': // 🆕 Opción del minijuego
        return <Minijuego />;
      default:
        return <h2>Pantalla no encontrada</h2>;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Menu setPantalla={setPantalla} />
      <div style={{ marginLeft: '20px', padding: '20px', flex: 1 }}>
        {renderContenido()}
      </div>
    </div>
  );
}

export default App;
