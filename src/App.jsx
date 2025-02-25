import React, { useState } from "react";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetails";
import "./App.css";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  return (
    <div className="App">
      <h1>Pokedex App</h1>
      {selectedPokemon ? (
        <PokemonDetail
          pokemon={selectedPokemon}
          onBack={() => setSelectedPokemon(null)}
        />
      ) : (
        <PokemonList onSelectPokemon={setSelectedPokemon} />
      )}
    </div>
  );
}

export default App;
