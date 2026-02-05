import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useParams } from "react-router-dom";

function Pokemon() {
  const { loading, error, fetchPokemon, currentPokemon } =
    useContext(PokemonContext);

  const { name } = useParams();

  useEffect(() => {
    fetchPokemon(name);

    return () => console.log("Stopped fetching pokemon data");
  }, [name]);

  function fetchTypes() {
    return currentPokemon?.types.map((type) => (
      <li key={type.type.name}>{type.type.name}</li>
    ));
  }

  function fetchStats() {
    return currentPokemon?.stats.map((stat) => (
      <li key={stat.stat.name}>
        {stat.stat.name}: {stat.base_stat}
      </li>
    ));
  }

  console.log(currentPokemon);

  fetchStats();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error accured: {error}</p>;

  if (!currentPokemon) return null;

  return (
    <>
      <img src={`${currentPokemon?.sprites.front_default}`} alt="" />
      <h1>{currentPokemon?.name}</h1>

      <p>Height: {currentPokemon.height / 10}m</p>
      <p>Weight: {currentPokemon.weight / 10}kg</p>
      <p>Base XP: {currentPokemon.base_experience}xp</p>

      <p>Type</p>

      <ul>{fetchTypes()}</ul>

      <p>Stats</p>
      <ul>{fetchStats()}</ul>
    </>
  );
}

export default Pokemon;
