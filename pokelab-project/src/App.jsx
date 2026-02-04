import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import PokemonList from "./pages/PokemonList";
import Pokemon from "./pages/Pokemon";
import NotFound from "./NotFound";
import NavBar from "./components/NavBar";
import PokemonContextProvider from "./context/PokemonContextProvider";

function App() {
  return (
    <>
      <NavBar />
      <PokemonContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<PokemonList />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PokemonContextProvider>
    </>
  );
}

export default App;
