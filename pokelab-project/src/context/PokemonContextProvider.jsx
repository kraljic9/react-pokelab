import { useState } from "react";
import { PokemonContext } from "./PokemonContext";

function PokemonContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemonList, setPokemonList] = useState(null);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  console.log(offset);

  async function fetchPokemonList() {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
      );

      console.log(response);

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

      setCurrentPokemon(data);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <PokemonContext.Provider
      value={{
        loading,
        error,
        fetchPokemon,
        fetchPokemonList,
        pokemonList,
        offset,
        setOffset,
        currentPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContextProvider;
