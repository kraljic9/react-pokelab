import { useNavigate } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="NavBar">
        <div className="side-logo">
          <img
            src="/src/assets/pokelab-logomini.png"
            alt="poke-lab mini logo"
            className="mini-logo"
          />
        </div>

        <div className="main-logo">
          <img
            src="/src/assets/pokelab-logomain.png"
            alt=""
            className="main-logo"
          />
        </div>

        <div className="button-container">
          <button className="nav-btn">Home</button>
          <button className="nav-btn">About</button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
