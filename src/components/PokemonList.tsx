import React from "react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../types";

interface PokemonListProps {
  pokemons: Array<Pokemon>;
  onLike: (id: string) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onLike }) => {
  return (
    <>
      <h1>Pokémon List</h1>
      <div className="pokemon-list">
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            onLike={() => onLike(pokemon.id)}
          />
        ))}
      </div>
    </>
  );
};

export default PokemonList;
