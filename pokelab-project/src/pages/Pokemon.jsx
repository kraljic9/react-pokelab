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
      <li key={type.type.name} className="current-pokemon-type">
        {type.type.name}
      </li>
    ));
  }

  function fetchStats() {
    return currentPokemon?.stats.map((stat) => (
      <li key={stat.stat.name} className="current-pokemon-stats">
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
      <div className="current-pokemon-container">
        <div className="current-pokemon-box">
          <img
            src={`${currentPokemon?.sprites.front_default}`}
            alt=""
            className="current-pokemon-img"
          />
          <h1 className="current-pokemon-name">{currentPokemon?.name}</h1>
        </div>

        <div className="pokemon-info-boxes">
          <div className="pokemon-info-box box-one ">
            <h3 className="current-pokemon-info">Info</h3>
            <p className="current-pokemon-txt">
              Height: {currentPokemon.height / 10}m
            </p>
            <p className="current-pokemon-txt">
              Weight: {currentPokemon.weight / 10}kg
            </p>
            <p className="current-pokemon-txt">
              Base XP: {currentPokemon.base_experience}xp
            </p>
          </div>

          <div className="pokemon-info-box box-two">
            <h3 className="current-pokemon-type-title">Type</h3>
            <ul className="current-pokemon-types">{fetchTypes()}</ul>
          </div>

          <div className="pokemon-info-box box-three">
            <h3 className="current-pokemon-stats-title">Stats</h3>
            <ul className="current-pokemon-stats-list">{fetchStats()}</ul>
          </div>
        </div>
      </div>
      <img
        src={`${currentPokemon?.sprites.front_shiny}`}
        alt=""
        className="current-pokemon-big-img"
      />
    </>
  );
}

export default Pokemon;
