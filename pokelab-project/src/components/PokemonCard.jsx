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

        console.log(data);

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

  console.log(pokemonData);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error accured: {error}</p>;

  return <h1>{pokemonData.name}</h1>;
}

export default PokemonCard;
