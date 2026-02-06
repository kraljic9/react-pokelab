import { useContext } from "react";
import PokemonList from "./pages/PokemonList";
import { PokemonContext } from "./context/PokemonContext";

function Home() {
  const { setOffset } = useContext(PokemonContext);

  return (
    <>
      <PokemonList />

      <div className="button-container">
        <button
          onClick={() => setOffset((prev) => prev - 20)}
          className="switch-page-btn"
        >
          Previous Page
        </button>
        <button
          onClick={() => setOffset((prev) => prev + 20)}
          className="switch-page-btn"
        >
          Next Page
        </button>
      </div>
    </>
  );
}

export default Home;
