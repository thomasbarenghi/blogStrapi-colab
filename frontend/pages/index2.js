import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostsList() {
  const [posts, setPosts] = useState([]); // Estado para almacenar los posts

  // Ejecutar la solicitud HTTP GET cuando se monte el componente
  useEffect(() => {
    axios.get('http://127.0.0.1:1337/api/blogs')
      .then(response => {
        // Si la solicitud se realiza con éxito, almacenar los posts en el estado
        setPosts(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Ejecutar la solicitud una vez al montar el componente

  // Mostrar los posts en una lista utilizando el método map
  console.log(posts)
  return (
    <ul>
      {posts.map(post => (
 <li key={post.id}>
 <h3>{post.attributes.titulo}</h3>
 <p>{post.attributes.contenido}</p>
</li>
      ))}
    </ul>
  );
}

export default PostsList;
