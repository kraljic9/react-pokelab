import { useEffect, useState } from "react";

function PokemonCard({ url }) {
  const [pokemonData, setPokemonData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(url);

        if (!response.ok)
          throw new Error("Error accured while fetching pokemon data");

        const data = await response.json();

        setPokemonData(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();

    return () => console.log("Error accured while fetching pokemon data");
  }, []);

  function displayTypes() {
    return pokemonData?.types.map((type) => (
      <li key={type.type.name}>{type.type.name}</li>
    ));
  }

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error accured: {error}</p>;

  return (
    <div className="pokemon-card-container">
      <img
        src={pokemonData?.sprites.front_default}
        alt={pokemonData.name}
        className="pokemon-card-img"
      />
      <div className="pokemon-card-text-wrapper">
        <h1 className="pokemon-card-name">{pokemonData.name}</h1>
        <ul className="pokemon-card-types">{displayTypes()}</ul>
      </div>
    </div>
  );
}

export default PokemonCard;
