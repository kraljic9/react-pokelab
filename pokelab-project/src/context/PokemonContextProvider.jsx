import { useState } from "react";
import { PokemonContext } from "./PokemonContext";

function PokemonContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemonList, setPokemonList] = useState(null);

  async function fetchPokemonList(limit, offset) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
      );

      if (!response.ok)
        throw new Error("Error accured while fetching pokemon list");

      const data = await response.json();

      setPokemonList(data.results);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  async function fetchPokemon(name) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}/`,
      );

      if (!response.ok) throw new Error("Error accured while fetching pokemon");

      const data = await response.json();

      return data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <PokemonContext.Provider
      value={{ loading, error, fetchPokemon, fetchPokemonList, pokemonList }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContextProvider;
