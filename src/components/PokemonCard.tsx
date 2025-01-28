import React from "react";
import { Pokemon } from "../types";

interface PokemonCardProps {
  pokemon: Pokemon;
  onLike: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onLike }) => {
  return (
    <div onClick={onLike} className="pokemon-card">
      <h4>{pokemon.name}</h4>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={`${pokemon.name}'s picture`}
      />
      <div className="like-button">
        <span>{pokemon.liked ? "❤️" : "🤍"}</span>
        <span className={pokemon.liked ? "liked" : ""}>
          {pokemon.liked ? "Liked" : "Like"}
        </span>
      </div>
    </div>
  );
};

export default PokemonCard;
