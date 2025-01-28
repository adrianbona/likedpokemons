import React from "react";
import { Pokemon } from "../types";

interface PokemonLikedListProps {
  likedPokemons: Array<Pokemon>;
}

const PokemonLikedList: React.FC<PokemonLikedListProps> = ({
  likedPokemons,
}) => {
  if (likedPokemons.length === 0) {
    return null;
  }

  return (
    <div className="liked-pokemon-list">
      <h2>Liked Pokémons</h2>
      <ul>
        {likedPokemons.map((likedPokemon: Pokemon) => (
          <li key={likedPokemon.name}>{likedPokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonLikedList;
