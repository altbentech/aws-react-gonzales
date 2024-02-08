// Importing necessary dependencies from React and React Router
import React from "react";
import { Link } from "react-router-dom";

// Importing the styles for this component
import "./hobbies.css";

// Importing images for hobbies
import Computer from "../images/computer.jpg";
import Music from "../images/music.jpg";
import Book from "../images/book.jpg";
import Movies from "../images/movies.jpg";
import Travelling from "../images/travel.jpg";
import Eating from "../images/eat.jpg";

// Functional component for Hobbies
const Hobbies: React.FC = () => {
  return (
    <div className="container">
      {/* Page title for Hobbies */}
      <h1 className="page-title">Hobbies</h1>

      {/* Container for displaying hobby cards */}
      <div className="card__container">
        {/* Hobby card: Playing Computer Games */}
        <article className="card__article">
          <img src={Computer} alt="Computer" className="card__img" />
          <div className="card__data">
            <h2 className="card__title">Playing Computer Games</h2>
            <span className="card__description">
              I like to play computer games. My favorite game is Dota 2 but I
              seldom play now.
            </span>
          </div>
        </article>

        {/* Hobby card: Listening to Music */}
        <article className="card__article">
          <img src={Music} alt="Music" className="card__img" />
          <div className="card__data">
            <h2 className="card__title">Listening to Music</h2>
            <span className="card__description">
              I like listening to music. I like a wide range of genres -- rock,
              r&b, pop, instrumental, etc.
            </span>
          </div>
        </article>

        {/* Hobby card: Reading */}
        <article className="card__article">
          <img src={Book} alt="Book" className="card__img" />
          <div className="card__data">
            <h2 className="card__title">Reading</h2>
            <span className="card__description">
              I like reading books. I used to read a lot when I was young, but
              now I'm too busy to read for leisure.
            </span>
          </div>
        </article>

        {/* Hobby card: Watching Movies */}
        <article className="card__article">
          <img src={Movies} alt="Movies" className="card__img" />
          <div className="card__data">
            <h2 className="card__title">Watching Movies</h2>
            <span className="card__description">
              I like watching movies, may it be anime, series, cartoons,
              documentary, etc.
            </span>
          </div>
        </article>

        {/* Hobby card: Travelling */}
        <article className="card__article">
          <img src={Travelling} alt="Travelling" className="card__img" />
          <div className="card__data">
            <h2 className="card__title">Travelling</h2>
            <span className="card__description">
              I like going to places. I wish to travel the world when I have the
              time and money.
            </span>
          </div>
        </article>

        {/* Hobby card: Eating */}
        <article className="card__article">
          <img src={Eating} alt="Eating" className="card__img" />
          <div className="card__data">
            <h2 className="card__title">Eating</h2>
            <span className="card__description">
              I really love eating. I want to try different foods from different
              countries when I travel.
            </span>
          </div>
        </article>
      </div>

      {/* Back to Home button */}
      <Link to="/" className="back-button">
        Back to Home
      </Link>
    </div>
  );
};

// Exporting Hobbies component as the default export
export default Hobbies;
