import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


function Movies() {
  return (
    <>
      <section id="movie__page" className="bg-[linear-gradient(_#6ab8c4,#fa8c2b,#fa8c2b,#fa8c2b,#fa8c2b,#fa8c2b,#fa8c2b,#fc4863_)] h-full flex flex-col w-full h-screen">
        <div className="w-full mx-auto">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-6xl font-bold m-[24px]">Movie Explorer</h1>
            <form action="" className="relative w-full max-w-[500px] flex items-center justify-end">
              <input
                type="text"
                className="w-[500px] rounded-[24px] bg-input_blue p-[12px] text-2xl shadow-lg focus:outline-none focus:shadow-inner-2xl"
                placeholder="Browse..."
              />
              <button className="absolute text-4xl bg-[#6ab8c4] w-20 transition-all duration-200 ease-[ease] mr-[5px] rounded-3xl border-[none] hover:brightness-[110%] active:brightness-[70%]">
                <FontAwesomeIcon icon={faSearch} className="p-[6px]"/>
              </button>
            </form>
            {/* TODO filter movies */}
            <select id="filter" onchange="filterMovies(event)" className="text-base mt-6 p-2 rounded-lg border-[none] bg-gradient-to-r from-cyan-500 to-blue-500">
              <option value="" disabled selected>
                Sort
              </option>
              <option value="Latest-Movies">Latest Movies</option>
              <option value="Oldest-Movies">Oldest Movies</option>
            </select>
            <div className="flex-wrap flex w-full max-w-[1000px]">
              <div className="w-3/12">
                <a className="w-[600px] invisible">
                  <img
                    className="w-4/5 mt-6 mb-0 mx-6"
                    src="https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
                    alt=""
                  />
                </a>
                <h3 className="invisible">
                  <b>title</b>
                </h3>
                <p className="invisible">date</p>
              </div>
              <div className="w-3/12">
                <a className="w-[600px] invisible">
                  <img
                    className="w-4/5 mt-6 mb-0 mx-6"
                    src="https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
                    alt=""
                  />
                </a>
                <h3 className="invisible">
                  <b>title</b>
                </h3>
                <p className="invisible">date</p>
              </div>
              <div className="w-3/12">
                <a className="w-[600px] invisible">
                  <img
                    className="w-4/5 mt-6 mb-0 mx-6"
                    src="https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
                    alt=""
                  />
                </a>
                <h3 className="invisible">
                  <b>title</b>
                </h3>
                <p className="invisible">date</p>
              </div>
              <div className="w-3/12">
                <a className="w-[600px] invisible">
                  <img
                    className="w-4/5 mt-6 mb-0 mx-6"
                    src="https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
                    alt=""
                  />
                </a>
                <h3 className="invisible">
                  <b>title</b>
                </h3>
                <p className="invisible">date</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Movies;
