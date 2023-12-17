import React from 'react';


const Explicacion = () => {
  return (
    <div className='container'>
      <div className="triangulo-izquierdo"></div>
      <div className="triangulo-derecho"></div>
      <div className="circulo-izquierdo"></div>
      <div className="circulo-derecho"></div>
    <div className="explicacion">
      <h2 className="explicacion__title">Explicación del Componente CardPokemon</h2>

      <p className="explicacion__text">
        En este componente, utilizamos el estado para almacenar la lista completa de Pokémon
        y el término de búsqueda introducido por el usuario.
      </p>

      <p className="explicacion__text">
        El useEffect se utiliza para realizar una solicitud a la PokeAPI al montar el componente
        y obtener la lista de Pokémon. Se limita a 150 Pokémon para mantener el ejemplo simple.
      </p>

      <pre className="explicacion__code">
        <code>
          {`useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
      const data = await response.json();
      const results = data.results;

      const detailedPokemonList = await Promise.all(results.map(async (pokemon) => {
        // ... (obtener detalles adicionales del Pokémon)
      }));

      setPokemonList(detailedPokemonList);
    } catch (error) {
      console.error('Error al obtener datos de la PokeAPI', error);
    }
  };

  fetchData();
}, []);`}
        </code>
      </pre>

      <p className="explicacion__text">
        La función <code className="explicacion__code">getEvolutionName</code> se encarga de obtener el nombre de la evolución
        de un Pokémon, si está disponible.
      </p>

      <pre className="explicacion__code">
        <code>
          {`const getEvolutionName = (evolution) => {
  if (evolution && evolution.species) {
    return evolution.species.name;
  }
  return null;
};`}
        </code>
      </pre>

      <p className="explicacion__text">
        Se filtra la lista de Pokémon según el término de búsqueda ingresado por el usuario.
      </p>

      <pre className="explicacion__code">
        <code>
          {`const filteredPokemonList = pokemonList.filter(pokemon =>
  pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
);`}
        </code>
      </pre>

      <p className="explicacion__text">
        Luego, renderizamos una barra de búsqueda y la lista de Pokémon filtrada con sus detalles.
      </p>

      <pre className="explicacion__code">
        <code>
          {`return (
  <div>
    <div className="d-flex justify-content-center mb-4 w-100">
      <input
        className="form-control input__search me-2 w-100"
        type="search"
        placeholder="Introduce el nombre de un pokemon"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>

    <div className="row row-cols-1 row-cols-md-3 g-5">
      {/* ... (renderizar detalles de cada Pokémon) */}
    </div>
  </div>
);`}
        </code>
      </pre>
    </div>
    </div>
  );
};

export default Explicacion;
