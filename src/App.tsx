import React from "react";
import { usePokemon } from "./hooks/usePokemon";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const { pokemons, toggleLike, likedPokemons } = usePokemon();

  return (
    <div>
      <h1>Pokémon List</h1>
      <div style={styles.listContainer}>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            onLike={() => toggleLike(pokemon.id)}
          />
        ))}
      </div>
      <h2>Liked Pokémon</h2>
      <ul>
        {likedPokemons.map((pokemon) => (
          <li key={pokemon.name} style={styles.likedItem}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  listContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
  },
  likedItem: {
    textTransform: "capitalize",
  },
};
