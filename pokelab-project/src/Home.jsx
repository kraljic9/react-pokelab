import { useContext } from "react";
import PokemonList from "./pages/PokemonList";
import { PokemonContext } from "./context/PokemonContext";

function Home() {
  const { setOffset } = useContext(PokemonContext);

  return (
    <>
      <PokemonList />

      <button onClick={() => setOffset((prev) => prev - 20)}>
        Previous Page
      </button>
      <button onClick={() => setOffset((prev) => prev + 20)}>Next Page</button>
    </>
  );
}

export default Home;
