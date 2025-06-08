import { useState } from "react";

// Componente principal
const Ej28PropsRenderizadoCondicional = () => {
    const [datos1, setDatos1] = useState(0);
    const [datos2, setDatos2] = useState(0);

    return (
        <div>
          <h2>Renderizado Condicional Múltiple </h2>
            <label>
                Dato 1 (cm):{" "}
                <input
                    type="number"
                    placeholder="Dato 1 en cm"
                    onChange={(e) => setDatos1(Number(e.target.value))}
                />
            </label>
            <br />
            <label>
                Dato 2 (cm):{" "}
                <input
                    type="number"
                    placeholder="Dato 2 en cm"
                    onChange={(e) => setDatos2(Number(e.target.value))}
                />
            </label>

            <hr />
            <ComponenteMultiple opcion={1} datos1={datos1} />
            <ComponenteMultiple opcion={2} datos1={datos1} />
            <ComponenteMultiple opcion={3} datos1={datos1} datos2={datos2} />
        </div>
    );
};

// Componente reutilizable con unidades de medida
const ComponenteMultiple = ({ opcion, datos1, datos2 }) => {
    const calculaDolares = () => <p>Dólares: {(datos1 * 2).toFixed(2)} USD</p>;
    const calculaFahrenheit = () => (
        <p>Grados Fahrenheit: {(datos1 * 9 / 5 + 32).toFixed(2)} °F</p>
    );
    const calculaSuperficie = () => (
        <p>Superficie del rectángulo: {datos1 * datos2} cm²</p>
    );

    return (
        <div>
            {
                opcion === 1 ? calculaDolares() :
                opcion === 2 ? calculaFahrenheit() :
                opcion === 3 ? calculaSuperficie() :
                null
            }
        </div>
    );
};

export default Ej28PropsRenderizadoCondicional;
