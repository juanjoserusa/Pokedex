import React, { useState, useEffect } from 'react';
import CardPokemon from './CardPokemon';
import Animation from './Animation';

const ListaUsuario = () => {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    // Mostrar el CardPokemon después de 10 segundos
    const timeoutId = setTimeout(() => {
      setShowCard(true);
    }, 3000); // 10 segundos en milisegundos

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timeoutId);
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return (
    <div className='container'>
      {showCard ? (
        // Muestra el componente CardPokemon cuando showCard es verdadero
        <>
          <div className="triangulo-izquierdo"></div>
          <div className="triangulo-derecho"></div>
          <div className="circulo-izquierdo"></div>
          <div className="circulo-derecho"></div>
          <CardPokemon />
        </>
      ) : (
        // Muestra la animación de Pokemon durante los primeros 10 segundos
        <Animation />
      )}
    </div>
  );
};

export default ListaUsuario;
