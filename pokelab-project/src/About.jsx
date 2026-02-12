import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <div className="about-txt">
        <h1 className="about-title">Welcome to my pokemon page</h1>
        <p className="about-intro">My name is Pavle Kraljic</p>
        <p className="about-main-txt">
          This is my pokelab project containing a display of different pokemon
          cards when a card is clicked it will display the information of the
          pokemon, such as the pokemon image, stats and shiny pokemon version
          image. This project was made using react, the project gave me the
          opertunity to practice fetching, routing and file architecture, hope
          you enjoy the style and information, you gotta know them all to catch
          them all. To continue your reasearch click the logo below or the home
          button abouve located in the navbar
        </p>
      </div>

      <div className="about-img-container">
        <Link to="/">
          <img
            src="/src/assets/pokelab-logomini.png"
            alt=""
            className="about-img"
          />
        </Link>
      </div>
    </div>
  );
}

export default About;
