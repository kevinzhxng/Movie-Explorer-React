import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    console.log("test")
    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=1e94ff26&s=naruto`
    );
    console.log(response)
    setMovies(response);
  }

  return (
    <>
      <section
        id="movie__page"
        className="bg-[linear-gradient(_#6ab8c4,#fa8c2b,#fa8c2b,#fa8c2b,#fa8c2b,#fa8c2b,#fa8c2b,#fc4863_)] flex flex-col w-full h-full"
      >
        <div className="w-full mx-auto">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-6xl font-bold m-[24px]">Movie Explorer</h1>
            <form
              action=""
              className="relative w-full max-w-[500px] flex items-center justify-end"
            >
              <input
                type="text"
                className="w-[500px] rounded-[24px] bg-input_blue p-[12px] text-2xl shadow-lg focus:outline-none focus:shadow-inner-2xl"
                placeholder="Browse..."
              />
              <button
                className="absolute text-4xl bg-[#6ab8c4] w-20 transition-all duration-200 ease-[ease] mr-[5px] rounded-3xl border-[none] hover:brightness-[110%] active:brightness-[70%]"
                onClick={() => fetchMovies()}
              >
                <FontAwesomeIcon icon={faSearch} className="p-[6px]" />
              </button>
            </form>
            {/* TODO filter movies */}
            <select
              id="filter"
              onchange="filterMovies(event)"
              className="text-base mt-6 p-2 rounded-lg border-[none] bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              <option value="" disabled selected>
                Sort
              </option>
              <option value="Latest-Movies">Latest Movies</option>
              <option value="Oldest-Movies">Oldest Movies</option>
            </select>
            <div className="flex-wrap flex w-full max-w-[1000px]">
              
              <div className="w-3/12">
                <div className="p-[18px]">
                  <img
                    className="w-8/10"
                    src="https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
                    alt=""
                  />
                  <h3 className="w-full">
                    <b>movie.title</b>
                  </h3>
                  <p className="w-full">movie.year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Movies;
