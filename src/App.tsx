import React from "react";
import { usePokemon } from "./hooks/usePokemon";
import PokemonLikedList from "./components/PokemonLikedList";
import PokemonList from "./components/PokemonList";

export default function App() {
  const { pokemons, toggleLike, likedPokemons } = usePokemon();

  return (
    <main>
      <PokemonList pokemons={pokemons} onLike={toggleLike} />
      <PokemonLikedList likedPokemons={likedPokemons} />
    </main>
  );
}
