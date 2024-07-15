import React from "react";
import UndrawMovie from "../assets/undraw_movie_night_re_9umk (1).svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__row">
            <h2 className="font-semibold">Find your favorite movies with</h2>
            <h1 className="font-bold">Movie Explorer</h1>
            <div className="search">
              <Link to="/movies">
                <button className="button">SEARCH</button>
              </Link>
            </div>
            <img className="header__img" src={UndrawMovie} />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Landing;
