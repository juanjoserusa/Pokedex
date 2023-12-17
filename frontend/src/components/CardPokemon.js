import React, { useState, useEffect } from 'react';

const CardPokemon = () => {
  // Estado para almacenar la lista completa de Pokémon
  const [pokemonList, setPokemonList] = useState([]);

  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Efecto para cargar la lista de Pokémon al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Hacer la solicitud a la PokeAPI para obtener la lista de Pokémon
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await response.json();
        const results = data.results;

        // Obtener detalles adicionales para cada Pokémon
        const detailedPokemonList = await Promise.all(results.map(async (pokemon) => {
          const pokemonDetailsResponse = await fetch(pokemon.url);
          const pokemonDetails = await pokemonDetailsResponse.json();

          // Obtener información de la evolución, si está disponible
          const speciesResponse = await fetch(pokemonDetails.species.url);
          const speciesData = await speciesResponse.json();
          const evolutionChainResponse = await fetch(speciesData.evolution_chain.url);
          const evolutionChainData = await evolutionChainResponse.json();
          const evolutionChain = evolutionChainData.chain;

          // Obtener nombre de la evolución (si existe)
          const evolutionName = getEvolutionName(evolutionChain);

          // Devolver la información combinada
          return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            image: pokemonDetails.sprites.front_default,
            type: pokemonDetails.types.map(type => <p className='type__card'>{type.type.name}</p>),
            evolution: evolutionName,
          };
        }));

        setPokemonList(detailedPokemonList);
      } catch (error) {
        console.error('Error al obtener datos de la PokeAPI', error);
      }
    };

    fetchData();
  }, []); // El segundo parámetro vacío asegura que useEffect se ejecute solo una vez al montar el componente

  // Función para obtener el nombre de la evolución correctamente
  const getEvolutionName = (evolution) => {
    if (evolution && evolution.species) {
      return evolution.species.name;
    }
    return null;
  };

  // Filtrar la lista de Pokémon según el término de búsqueda
  const filteredPokemonList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      

      {/* Barra de búsqueda */}
      <div className="d-flex justify-content-center mb-4 w-100">
      <input
                className="form-control  input__search me-2 w-100"
                type="search"
                placeholder="Introduce el nombre de un pokemon"
                aria-label="Search"
                value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
              />
      </div>

      {/* Renderizar la lista de Pokémon filtrada */}
      <div className="row row-cols-1 row-cols-md-3 g-5">
  {filteredPokemonList.map(pokemon => (
    <div className="col-12 col-md-4" key={pokemon.id}>
      <div className="card h-100">
        {/* Renderizar la imagen y el ID del Pokémon */}
        <div className="img__card">
          <img
            src={pokemon.image}
            className="card-img-top img__pokemon"
            alt={pokemon.name}
          />
          <div className="pokemon__id">
            <p>ID / {pokemon.id}</p>
          </div>
        </div>

        {/* Renderizar el nombre y los tipos del Pokémon */}
        <div className="card-body">
          <h5 className="card-title pokemon__name">{pokemon.name}</h5>
          <div className="pokemon__type">{pokemon.type}</div>

          {/* Renderizar información de evolución si existe y no es el mismo Pokémon */}
          {pokemon.evolution && pokemon.evolution !== pokemon.name ? (
            <div className="pokemon__evolution">
              <p className="pokemon__evolution--titulo">Evoluciona de: </p>
              <p className="pokemon__evolution--evolucion">{pokemon.evolution}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default CardPokemon;
