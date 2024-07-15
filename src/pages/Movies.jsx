import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true)

  async function fetchMovies(event) {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=1e94ff26&s=${searchTerm}`
      );
      setLoading()
      if (response.data.Response === "True" && response.data.Search) {
        setSearchMovies(response.data.Search);
        setErrorMessage("");
      } else {
        setSearchMovies([]);
        setErrorMessage("No movies found :( TRY AGAIN");
      }
    } catch (error) {
      console.error("Error fetching movies: ", error);
      setSearchMovies([]);
      setErrorMessage("failed to fetch movies, please try again later");
    }
  }

  function sortMovies(filter) {
    const sortedMovies = [...searchMovies];

    if (filter === "Latest-Movies") {
      sortedMovies.sort(
        (a, b) =>
          parseInt(b.Year.substring(0, 4)) - parseInt(a.Year.substring(0, 4))
      );
    } else if (filter === "Oldest-Movies") {
      sortedMovies.sort(
        (a, b) =>
          parseInt(a.Year.substring(0, 4)) - parseInt(b.Year.substring(0, 4))
      );
    }

    setSearchMovies(sortedMovies);
  }

  return (
    <>
      <section
        id="movie__page"
        className="bg-[linear-gradient(_#6ab8c4,#fa8c2b,#fa8c2b,#fa8c2b,#fa8c2b,#fa8c2b,#fc4863,#fc4863_)] flex flex-col w-full min-h-screen"
      >
        <div className="w-full mx-auto">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-6xl font-bold m-[24px]">Movie Explorer</h1>
            <form
              action=""
              className="relative w-full max-w-[500px] flex items-center justify-end"
              onSubmit={fetchMovies}
            >
              <input
                type="text"
                className="w-[500px] rounded-[24px] bg-input_blue p-[12px] text-2xl shadow-lg focus:outline-none focus:shadow-inner-2xl"
                placeholder="Browse..."
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <button
                type="submit"
                className="absolute text-4xl bg-[#6ab8c4] w-20 transition-all duration-200 ease-[ease] mr-[5px] rounded-3xl border-[none] hover:brightness-[110%] active:brightness-[70%]"
              >
                <FontAwesomeIcon icon={faSearch} className="p-[6px]" />
              </button>
            </form>
            <select
              id="filter"
              onChange={(event) => sortMovies(event.target.value)}
              className="text-base mt-6 p-2 rounded-lg border-[none] bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              <option value="" disabled selected>
                Sort
              </option>
              <option value="Latest-Movies">Latest Movies</option>
              <option value="Oldest-Movies">Oldest Movies</option>
            </select>
            {errorMessage && <h2 className="">{errorMessage}</h2>}
            <div className="flex-wrap flex w-full max-w-[1000px] ">
              {searchMovies.map((movie) => (
                <div className="w-3/12 ">
                  <div className="p-[18px]">
                    <div className="hover:cursor-pointer">
                      <Link to={`/movies/${movie.imdbID}`}>
                        <img className="w-8/10" src={movie.Poster} alt="" />
                        <h3 className="w-full">
                          <b>{movie.Title}</b>
                        </h3>
                        <p className="w-full">{movie.Year}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Movies;
