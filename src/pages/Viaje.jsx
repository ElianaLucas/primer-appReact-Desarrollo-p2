import { useState } from "react";

const Ej29Viaje = () => {
    const [dias, setDias] = useState(0);

    return (
        <div>
            <label>
                Cantidad de días de viaje:
                <input
                    type="number"
                    onChange={(e) => setDias(Number(e.target.value))}
                    placeholder="Ej: 5"
                />
            </label>

            <hr />

            <ComponenteMultiple opcion={1} noches={dias} />
            <ComponenteMultiple opcion={2} noches={dias} />
        </div>
    );
};

const ComponenteMultiple = ({ opcion, noches }) => {
    const cambio = 0.93; // 1 USD = 0.93 EUR

    const formatearMoneda = (valor, moneda) =>
        `${valor.toFixed(2)} ${moneda}`;

    const calculaCosteHotel = () => {
        const usd = noches * 140;
        const eur = usd * cambio;

        return (
            <p>
                Coste alquiler hotel: {formatearMoneda(usd, 'USD')} / {formatearMoneda(eur, 'EUR')}
            </p>
        );
    };

    const calculaAlquilerCoche = () => {
        let coste = noches * 40;

        if (noches > 7) {
            coste -= 50;
        } else if (noches > 3) {
            coste -= 20;
        }

        const eur = coste * cambio;

        return (
            <p>
                Coste alquiler coche: {formatearMoneda(coste, 'USD')} / {formatearMoneda(eur, 'EUR')}
            </p>
        );
    };

    return (
        <div>
            {opcion === 1
                ? calculaCosteHotel()
                : opcion === 2
                ? calculaAlquilerCoche()
                : null}
        </div>
    );
};

export default Ej29Viaje;
