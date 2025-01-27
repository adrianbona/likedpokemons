import React from "react";
import { Pokemon } from "../types";

interface PokemonLikedListProps {
  likedPokemons: Array<Pokemon>;
}

const PokemonLikedList: React.FC<PokemonLikedListProps> = ({
  likedPokemons,
}) => {
  return (
    <>
      <h2>Liked Pokémon</h2>
      <ul>
        {likedPokemons.map((likedPokemon: Pokemon) => (
          <li key={likedPokemon.name}>{likedPokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PokemonLikedList;
