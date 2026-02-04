function NavBar() {
  return (
    <>
      <nav className="NavBar">
        <div className="side-logo">PokeLab</div>

        <div className="main-logo">PokeLab Main</div>

        <div className="button-container">
          <button className="home-btn">Home</button>
          <button className="about">About</button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
