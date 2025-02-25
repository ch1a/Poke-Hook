import React from "react";
import PokemonList from "./components/PokemonList";
import "./App.css";

function App() {
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
