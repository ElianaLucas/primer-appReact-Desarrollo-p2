// pages/props/Post.jsx
import React from 'react';

function Post({ autor, contenido }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h4>{autor}</h4>
      <p>{contenido}</p>
    </div>
  );
}

function PostScreen() {
  return (
    <div>
      <h2>Props - Componente Post</h2>
      <Post autor="Eliana Lucas" contenido="¡Hola, estoy aprendiendo React, es mi primer programa!" />
      <Post autor="Amelie Grob" contenido="¡Las props son súper útiles!" />
    </div>
  );
}

export default PostScreen;
