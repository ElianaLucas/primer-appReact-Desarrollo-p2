import React, { useState } from 'react';
const personas = [
  { id: 1, nombre: 'Lu_k', edad: 25, ciudad: 'Quito', profesion: 'Hacker Ético' },
  { id: 2, nombre: 'Mily', edad: 22, ciudad: 'Cuenca', profesion: 'Especialista en IA' },
  { id: 3, nombre: 'Kael', edad: 28, ciudad: 'Cuenca', profesion: 'Desarrollador Blockchain' },
  { id: 4, nombre: 'Zoe', edad: 31, ciudad: 'Loja', profesion: 'Ingeniera de Realidad Virtual' },
  { id: 5, nombre: 'Ryu', edad: 24, ciudad: 'Ambato', profesion: 'Diseñador UX/UI' },
  { id: 6, nombre: 'Nova', edad: 27, ciudad: 'Quito', profesion: 'Científica de Datos' },
  { id: 7, nombre: 'Axel', edad: 29, ciudad: 'Guayaquil', profesion: 'Especialista en Ciberseguridad' },
  { id: 8, nombre: 'Luna', edad: 23, ciudad: 'Cuenca', profesion: 'Desarrolladora de Videojuegos' },
  { id: 9, nombre: 'Leo', edad: 30, ciudad: 'Loja', profesion: 'Arquitecto Cloud' },
  { id: 10, nombre: 'Maya', edad: 26, ciudad: 'Ambato', profesion: 'Especialista en Marketing Digital' },
  { id: 11, nombre: 'Kira', edad: 32, ciudad: 'Quito', profesion: 'Ingeniera DevOps' },
  { id: 12, nombre: 'Finn', edad: 21, ciudad: 'Guayaquil', profesion: 'Programador de IoT' },
  { id: 13, nombre: 'Eva', edad: 35, ciudad: 'Cuenca', profesion: 'Directora de Innovación' },
  { id: 14, nombre: 'Ian', edad: 28, ciudad: 'Loja', profesion: 'Especialista en Machine Learning' },
  { id: 15, nombre: 'Lia', edad: 24, ciudad: 'Ambato', profesion: 'Diseñadora 3D' },
  { id: 16, nombre: 'Noah', edad: 33, ciudad: 'Quito', profesion: 'Ingeniero de Robótica' },
  { id: 17, nombre: 'Emma', edad: 29, ciudad: 'Guayaquil', profesion: 'Analista de Big Data' },
  { id: 18, nombre: 'Dante', edad: 27, ciudad: 'Cuenca', profesion: 'Desarrollador Full Stack' },
  { id: 19, nombre: 'Vega', edad: 31, ciudad: 'Loja', profesion: 'Especialista en Realidad Aumentada' },
  { id: 20, nombre: 'Sage', edad: 22, ciudad: 'Ambato', profesion: 'Estudiante de Inteligencia Artificial' },
  { id: 21, nombre: 'Rex', edad: 36, ciudad: 'Quito', profesion: 'Ingeniero de Sistemas Embebidos' },
  { id: 22, nombre: 'Cleo', edad: 25, ciudad: 'Guayaquil', profesion: 'Diseñadora de Experiencias Inmersivas' },
  { id: 23, nombre: 'Nico', edad: 30, ciudad: 'Cuenca', profesion: 'Especialista en Automatización' },
  { id: 24, nombre: 'Thea', edad: 26, ciudad: 'Loja', profesion: 'Investigadora en Neurotecnología' },
  { id: 25, nombre: 'Jett', edad: 23, ciudad: 'Ambato', profesion: 'Desarrollador de Apps Móviles' },
  { id: 26, nombre: 'Wren', edad: 34, ciudad: 'Quito', profesion: 'Arquitecta de Soluciones Digitales' },
  { id: 27, nombre: 'Kai', edad: 28, ciudad: 'Guayaquil', profesion: 'Especialista en Computación Cuántica' },
  { id: 28, nombre: 'Zara', edad: 21, ciudad: 'Cuenca', profesion: 'Estudiante de Bioinformática' },
  { id: 29, nombre: 'Onyx', edad: 37, ciudad: 'Loja', profesion: 'Experto en Redes Neuronales' },
  { id: 30, nombre: 'Neo', edad: 29, ciudad: 'Ambato', profesion: 'Ingeniero de Sistemas Inteligentes' }
];


function ArrayObjetos() {
  const [busqueda, setBusqueda] = useState('');

  const resultados = personas.filter((persona) =>
    persona.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h2>Recorrer un Array de Objetos</h2>

      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <ul>
        {resultados.length > 0 ? (
          resultados.map((item) => (
            <li key={item.id}>
              <strong>{item.nombre}</strong> ({item.edad} años) - {item.profesion} en {item.ciudad}
            </li>
          ))
        ) : (
          <li>No se encontraron resultados.</li>
        )}
      </ul>
    </div>
  );
}

export default ArrayObjetos;
