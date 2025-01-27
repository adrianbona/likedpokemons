import { useState, useEffect, useCallback, useMemo } from "react";

import { Pokemon } from "../types";

function extractIdFromUrl(url: string) {
  return url.slice(-2, url.length - 1);
}

export function usePokemon() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const likedPokemons = useMemo(
    () => pokemons.filter((pokemon) => pokemon.liked),
    [pokemons]
  );

  const fetchPokemons = useCallback(async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=9";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const { results } = await response.json();
      setPokemons(
        results.map((pokemon: Pokemon) => {
          return {
            ...pokemon,
            id: extractIdFromUrl(pokemon.url),
            liked: false,
          };
        })
      );
    } catch (error: any) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const toggleLike = (id: string) => {
    setPokemons((prev) => {
      return prev.map((pokemon) => {
        let liked: boolean = pokemon.liked;
        if (pokemon.id === id) {
          if (liked) {
            liked = false;
          } else {
            liked = true;
          }
        }

        return { ...pokemon, liked };
      });
    });
  };

  return { pokemons, likedPokemons, toggleLike };
}
