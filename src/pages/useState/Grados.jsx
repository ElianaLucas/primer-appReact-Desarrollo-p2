// pages/useState/Grados.jsx
import { useRef, useState } from 'react';

const Ej18GradosState = () => {
    // Conversor de temperatura
    const gradosCRef = useRef();
    const [gradosF, setGradosF] = useState(0);

    const calcularTemperatura = () => {
        const gradosC = parseFloat(gradosCRef.current.value) || 0;
        setGradosF((gradosC * 9/5 + 32).toFixed(2));
    };

    // Imágenes de paisajes marinos
    const PAISAJES_MARINOS = {
        playa1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
        playa2: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600",
        playa3: "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=600"
    };

    const [imagenActual, setImagenActual] = useState(PAISAJES_MARINOS.playa1);

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            {/* Conversor de temperatura */}
            <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
                <h2 style={{ color: '#1a73e8' }}>Conversor de Temperatura</h2>
                <input 
                    type='number' 
                    ref={gradosCRef} 
                    placeholder="Ingrese °C"
                    style={{ padding: '8px', marginRight: '10px', width: '150px' }}
                />
                <button 
                    onClick={calcularTemperatura}
                    style={{ 
                        padding: '8px 15px', 
                        backgroundColor: '#1a73e8', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Convertir a °F
                </button>
                <div style={{ marginTop: '10px', fontSize: '18px' }}>
                    Resultado: {gradosF} °F
                </div>
            </div>

            {/* Galería de paisajes marinos */}
            <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
                <h2 style={{ color: '#1a73e8' }}>Paisajes Marinos</h2>
                
                <div style={{ margin: '20px 0' }}>
                    <img 
                        src={imagenActual} 
                        alt="Paisaje marino" 
                        style={{ 
                            width: '100%', 
                            maxHeight: '400px', 
                            objectFit: 'cover',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }} 
                    />
                </div>
                
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button 
                        onClick={() => setImagenActual(PAISAJES_MARINOS.playa1)}
                        style={botonEstilo}
                    >
                        Playa tropical
                    </button>
                    <button 
                        onClick={() => setImagenActual(PAISAJES_MARINOS.playa2)}
                        style={botonEstilo}
                    >
                        Atardecer en el mar
                    </button>
                    <button 
                        onClick={() => setImagenActual(PAISAJES_MARINOS.playa3)}
                        style={botonEstilo}
                    >
                        Olas cristalinas
                    </button>
                </div>
            </div>
        </div>
    );
};

// Estilo reutilizable para los botones
const botonEstilo = {
    padding: '8px 15px',
    backgroundColor: '#34a853',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
};

export default Ej18GradosState;