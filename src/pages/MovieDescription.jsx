import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function MovieDescription() {
  const { id } = useParams();
  const [movieDescription, setMovieDescription] = useState([]);

  async function fetchDescription() {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=1e94ff26`
    );
    setMovieDescription(response.data);
  }

  useEffect(() => {
    fetchDescription();
  }, [id]);

  return (
    <>
      <div className="bg-[linear-gradient(_#6ab8c4,#fa8c2b,#fa8c2b,#fa8c2b,#fa8c2b,#fa8c2b,#fa8c2b,#fc4863_)] flex flex-col items-center w-full h-screen">
        <div>
          <div className="pt-[32px] pb-[32px]">
            <Link to="/movies">
              <button className="items-center appearance-none bg-[radial-gradient(100%_100%_at_100%_0,#5adaff_0,#5468ff_100%)] shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,rgba(58,65,111,0.5)_0_-3px_0_inset] box-border text-white cursor-pointer inline-flex h-12 justify-center leading-none overflow-hidden relative text-left no-underline transition-shadow duration-[0.15s,transform] delay-[0.15s] select-none touch-manipulation whitespace-nowrap will-change-[box-shadow,transform] text-lg px-4 rounded-md border-0 focus:shadow-[#3c4fe0_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#3c4fe0_0_-3px_0_inset] hover:-translate-y-0.5 active:shadow-[#3c4fe0_0_3px_7px_inset] active:translate-y-0.5 p-[32px] pl-[32px] pr-[32px]">
                ← Back
              </button>
            </Link>
          </div>
          {movieDescription && (
            <div className="w-full max-w-[1000px] mx-auto my-0 border-4 border-solid border-[#dd3737] flex rounded-lg">
              <div className="flex w-2/5">
                <img
                  className="w-full p-[15%]"
                  src={movieDescription.Poster}
                  alt={movieDescription.Title}
                />
              </div>
              <div className="w-3/5 flex flex-col justify-center pr-[15%] pt-[24px] pb-[24px]">
                <h2 className="font-bold text-6xl mb-7">
                  {movieDescription.Title}
                </h2>
                <div className="text-lg">
                  <h3>
                    <b>Rating:</b> {movieDescription.imdbRating} / 10
                  </h3>
                  <h3>
                    <b>Type:</b> {movieDescription.Type}
                  </h3>
                  <h3>
                    <b>Genre:</b> {movieDescription.Genre}
                  </h3>
                  <h3>
                    <b>Runtime:</b> {movieDescription.Runtime}
                  </h3>
                  <h3>
                    <b>Year:</b> {movieDescription.Year}
                  </h3>
                  <h3 className="mt-2">
                    <b>Plot:</b> {movieDescription.Plot}
                  </h3>
                </div>
                <div className="mt-8">
                    <Link to="/favorites">
                  <button className="bg-gray-900 border box-border text-white cursor-pointer flex-[0_0_auto] text-lg font-semibold leading-6 text-center decoration-auto duration-[0.2s] transition-[background-color,border-color,color,fill,stroke] ease-[cubic-bezier(.4,0,0.2,1)] select-none touch-manipulation w-auto px-[1.2rem] py-3 rounded-xl border-solid border-transparent hover:bg-gray-700 focus:shadow-none focus:outline-none focus:outline-offset-2 md:px-6 md:py-3">
                    Add to <FontAwesomeIcon icon="fa-bookmark" />
                  </button>
                    </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MovieDescription;
