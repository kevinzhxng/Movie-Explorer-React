import React from "react";


function Movies() {
  return (
    <>
      <section id="movie__page">
        <div class="header__container">
          <div class="header__row">
            <h1>Movie Explorer</h1>
            <form action="" class="search">
              <input
                type="text"
                class="search__input"
                placeholder="Browse..."
              />
              <button class="search__button click">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <select id="filter" onchange="filterMovies(event)">
              <option value="" disabled selected>
                Sort
              </option>
              <option value="Latest-Movies">Latest Movies</option>
              <option value="Oldest-Movies">Oldest Movies</option>
            </select>
            <div class="movies__list">
              <div class="movie">
                <a class="movie-card__container movie--disappear">
                  <img
                    class="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
                    alt=""
                  />
                </a>
                <h3 class="movie--disappear">
                  <b>title</b>
                </h3>
                <p class="movie--disappear">date</p>
              </div>
              <div class="movie">
                <a class="movie-card__container movie--disappear">
                  <img
                    class="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
                    alt=""
                  />
                </a>
                <h3 class="movie--disappear">
                  <b>title</b>
                </h3>
                <p class="movie--disappear">date</p>
              </div>
              <div class="movie">
                <a class="movie-card__container movie--disappear">
                  <img
                    class="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
                    alt=""
                  />
                </a>
                <h3 class="movie--disappear">
                  <b>title</b>
                </h3>
                <p class="movie--disappear">date</p>
              </div>
              <div class="movie">
                <a class="movie-card__container movie--disappear">
                  <img
                    class="movie__poster"
                    src="https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
                    alt=""
                  />
                </a>
                <h3 class="movie--disappear">
                  <b>title</b>
                </h3>
                <p class="movie--disappear">date</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Movies;
