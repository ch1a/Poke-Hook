//Displays details of the selected Pokémon.
//Includes a "Back" button to return to the list.
import React from "react";

const PokemonDetails = ({ pokemon, onBack }) => {
  return (
    <div className="pokemon-detail">
      <button onClick={onBack}>Back</button> {/* Calls onBack when clicked */}
      <h2 id="Card-Title">{pokemon.name}</h2>
      <img
        id="card-img"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p id="Poke-Type">Type: {pokemon.types[0].type.name}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base Experience: {pokemon.base_experience}</p>
    </div>
  );
};

export default PokemonDetails;
