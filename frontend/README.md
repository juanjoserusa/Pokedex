# Pokémon App

¡Bienvenido a la aplicación Pokémon! Esta aplicación MERN (MongoDB, Express.js, React, Node.js) te permite gestionar información sobre Pokémon. A continuación, encontrarás información detallada sobre la configuración y funcionalidades de la aplicación.

## BACKEND


### Tecnologías utilizadas:

- **Cors:** Middleware para habilitar el manejo de solicitudes HTTP entre distintos dominios.
- **Dotenv:** Carga variables de entorno desde un archivo `.env`.
- **Express:** Framework de servidor para Node.js.
- **Mongoose:** ODM (Object Data Modeling) para MongoDB y Node.js.
- **Nodemon:** Herramienta que ayuda a desarrollar aplicaciones basadas en Node.js reiniciando automáticamente la aplicación cuando se detectan cambios en el código fuente.


### Ejecutar el backend:

Desde la carpeta `/backend`, ejecuta el siguiente comando en la consola:

```
npm run dev
```


### Configuración de los Endpoints::

En el archivo /backend/routes/pokemon.js, se encuentran los endpoints de la aplicación. A continuación, se detalla la configuración de los mismos:

```
// Endpoint para la gestión de Pokémon
router.route('/')
  .get(getAllPokemon)  // Obtener todos los Pokémon
  .post(createPoke);   // Crear un nuevo Pokémon o lista de Pokémon


// Endpoint para operaciones individuales de Pokémon
router.route('/:id')
  .get(getPokemon)     // Obtener información de un Pokémon por ID
  .delete(deletePoke)  // Eliminar un Pokémon por ID
  .put(updatePoke);    // Actualizar los datos de un Pokémon por ID

module.exports = router;

```

## FRONTEND

### Tecnologías utilizadas:

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.

- **Bootstrap 5.3**: Marco de diseño para un desarrollo web rápido y fácil, me gusta trabajar mas en CSS puro y SASS pero por tiempos de entrega he tenido que utilizarlo para poder tenerlo cuanto antes.

- **Sass y CSS con metodología BEM**: Estilos y diseño para una experiencia visual mejorada.


### Ejecutar el frontend:

Desde la raíz del proyecto, ejecuta el siguiente comando en la consola:

```
npm run start
```


### Funcionalidades visuales:

-**Animación de inicio**: Pequeña animación de 3 segundos al cargar la aplicación.

-**Carga de Pokémon**: La aplicación carga los primeros 150 Pokémon desde la PokeAPI oficial.

-**Enlaces en el navbar**: Acceso a una explicación con código sobre el funcionamiento y enlaces a las rutas del backend.