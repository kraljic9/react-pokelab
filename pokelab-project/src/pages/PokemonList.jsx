import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { Link } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

function PokemonList() {
  const { fetchPokemonList, loading, error, pokemonList } =
    useContext(PokemonContext);

  useEffect(() => {
    fetchPokemonList(20, 0);

    return () => console.log("Stopped fetching pokemon list");
  }, []);

  console.log(pokemonList);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{`Error accured: ${error}`}</p>;

  return (
    <>
      <h1>Pokemon list</h1>

      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>
              <PokemonCard url={pokemon.url} />
            </Link>
          </li>
        ))}
      </div>
    </>
  );
}

export default PokemonList;
