import React from 'react';

const ExplicacionBackend = () => {
  return (
    <div className='container'>
      <div className="triangulo-izquierdo"></div>
      <div className="triangulo-derecho"></div>
      <div className="circulo-izquierdo"></div>
      <div className="circulo-derecho"></div>
      <div className="explicacion">
        <h2 className="explicacion__title">Explicación de los Endpoints del Backend</h2>

        <p className="explicacion__text">
          En el backend, utilizamos Express y MongoDB para gestionar los datos de los Pokémon. A continuación, se describen los endpoints y se proporcionan ejemplos de respuestas.
        </p>

        <h3 className="explicacion__subtitle">Endpoint: Obtener todos los Pokémon</h3>

        <pre className="explicacion__code">
          <code>
            {`GET /api/pokemon

// Respuesta de ejemplo
[
  {
    "_id": "613e8a2a1a34e78d283da618",
    "nombre": "Pikachu",
    "type": ["Electric"],
    "evolution": "Raichu",
    "img": "https://example.com/pikachu.jpg",
    "createdAt": "2023-12-13T12:34:56.789Z",
    "updatedAt": "2023-12-13T12:34:56.789Z"
  },
  // ... (otros Pokémon)
]`}
          </code>
        </pre>

        <h3 className="explicacion__subtitle">Endpoint: Crear un nuevo Pokémon</h3>

        <pre className="explicacion__code">
          <code>
            {`POST /api/pokemon

// Solicitud de ejemplo
{
  "nombre": "Bulbasaur",
  "type": ["Grass", "Poison"],
  "evolution": "Ivysaur",
  "img": "https://example.com/bulbasaur.jpg"
}

// Respuesta de ejemplo
{
  "message": "El Pokémon ha sido creado"
}`}
          </code>
        </pre>

        <h3 className="explicacion__subtitle">Endpoint: Obtener un Pokémon por ID</h3>

        <pre className="explicacion__code">
          <code>
            {`GET /api/pokemon/:id

// Respuesta de ejemplo
{
  "_id": "613e8a2a1a34e78d283da618",
  "nombre": "Pikachu",
  "type": ["Electric"],
  "evolution": "Raichu",
  "img": "https://example.com/pikachu.jpg",
  "createdAt": "2023-12-13T12:34:56.789Z",
  "updatedAt": "2023-12-13T12:34:56.789Z"
}`}
          </code>
        </pre>

        <h3 className="explicacion__subtitle">Endpoint: Eliminar un Pokémon por ID</h3>

        <pre className="explicacion__code">
          <code>
            {`DELETE /api/pokemon/:id

// Respuesta de ejemplo
{
  "message": "El Pokémon ha sido eliminado"
}`}
          </code>
        </pre>

        <h3 className="explicacion__subtitle">Endpoint: Actualizar datos de un Pokémon por ID</h3>

        <pre className="explicacion__code">
          <code>
            {`PUT /api/pokemon/:id

// Solicitud de ejemplo
{
  "nombre": "Bulbasaur",
  "type": ["Grass", "Poison"],
  "evolution": "Ivysaur",
  "img": "https://example.com/bulbasaur.jpg"
}

// Respuesta de ejemplo
{
  "message": "El Pokémon ha sido actualizado"
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ExplicacionBackend;
