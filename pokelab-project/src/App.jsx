import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import PokemonList from "./pages/PokemonList";
import Pokemon from "./pages/Pokemon";
import NotFound from "./NotFound";
import NavBar from "./components/NavBar";
import PokemonContextProvider from "./context/PokemonContextProvider";
import About from "./About";

function App() {
  return (
    <>
      <BrowserRouter>
        <PokemonContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<PokemonList />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PokemonContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
