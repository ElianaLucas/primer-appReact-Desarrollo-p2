// pages/useState/Euros.jsx
import { useRef, useState } from 'react';

const Ej17EurosStates = () => {
    const eurosRef = useRef();  // Nombre más descriptivo (evita confusión con el estado)
    const [dolares, setDolares] = useState(0);

    const calcular = () => {
        const eurosValue = parseFloat(eurosRef.current.value); 
        const dolaresCalculados = eurosValue * 2; //fórmula
        setDolares(dolaresCalculados);
    };

    return (  // Paréntesis JSX
        <div>
            <input type="number" ref={eurosRef} placeholder="EUR" /> {/* type="number" para mejor UX */}
            <button onClick={calcular}>Convertir a USD</button>
            <p>${dolares.toFixed(2)} USD</p> {}
        </div>
    );
};

export default Ej17EurosStates;