export interface PokemonAPIResult {
  name: string;
  url: string;
}

export interface Pokemon {
  id: string;
  name: string;
  url: string;
  liked: boolean;
}
