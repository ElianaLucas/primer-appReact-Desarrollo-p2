import { useRef, useState } from "react";

const Ej19RectanguloState = () => {
    const anchoRef = useRef();
    const alturaRef = useRef();
    const [area, setArea] = useState(0); // Inicializado con 0

    const calcular = () => {
        // Corregido: .value (no .valuee) y convertido a número
        const ancho = Number(anchoRef.current.value) || 0;
        const altura = Number(alturaRef.current.value) || 0;
        setArea(ancho * altura);
    };

    return (
        <div>
            <h2>Superficie de un Rectángulo (useState con botón)</h2>
            <input type="number" ref={anchoRef} placeholder="Ancho" />
            <input type="number" ref={alturaRef} placeholder="Altura" />
            <button onClick={calcular}>Calcular área</button>
            <p>Área: {area}</p>
        </div>
    );
};

export default Ej19RectanguloState;