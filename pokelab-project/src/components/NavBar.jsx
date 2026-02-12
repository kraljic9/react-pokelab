import { useNavigate, Link } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  function goAbout() {
    navigate("/about");
  }

  return (
    <>
      <nav className="NavBar">
        <div className="side-logo">
          <Link to="/">
            <img
              src="/src/assets/pokelab-logomini.png"
              alt="poke-lab mini logo"
              className="mini-logo"
            />
          </Link>
        </div>

        <div className="main-logo">
          <Link to="/">
            <img
              src="/src/assets/pokelab-logomain.png"
              alt=""
              className="main-logo"
            />
          </Link>
        </div>

        <div className="button-container">
          <button className="nav-btn" onClick={goHome}>
            Home
          </button>
          <button className="nav-btn" onClick={goAbout}>
            About
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
