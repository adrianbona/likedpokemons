import React from "react";
import { Pokemon } from "../types";

interface PokemonCardProps {
  pokemon: Pokemon;
  onLike: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onLike }) => {
  return (
    <div onClick={onLike} style={styles.card}>
      <h4>{pokemon.name}</h4>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      />
      <div style={styles.cardLike}>
        <span>{pokemon.liked ? "❤️" : "🤍"}</span>
        <span style={pokemon.liked ? styles.liked : styles.notLiked}>
          {pokemon.liked ? "Liked" : "Like"}
        </span>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    fontFamily: "arial",
    textAlign: "center",
    border: "1px solid lightgrey",
    borderRadius: "8px",
    padding: "12px",
    cursor: "pointer",
  },
  cardLike: {
    display: "block",
    margin: "0 auto",
  },
  liked: {
    color: "red",
    fontWeight: "bold",
  },
};

export default PokemonCard;
