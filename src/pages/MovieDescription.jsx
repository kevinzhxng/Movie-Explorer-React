import axios from "axios";
import React, { useEffect, useState } from "react";
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
  }, []);

  return (
    <>
      <div className="bg-[linear-gradient(_#6ab8c4,#fa8c2b,#fa8c2b,#fa8c2b,#fa8c2b,#fa8c2b,#fa8c2b,#fc4863_)] flex flex-col justify-center w-full">
        <div className="w-full h-full max-w-[1000px] mx-auto my-0 border-4 border-solid border-[black]">
          {movieDescription.map((movie) => (
            <div className="flex w-full">
              <div className="w-2/5">
                <img className="w-full p-[15%]" src={movie.Poster} alt="" />
              </div>
              <div className="w-3/5 flex flex-col justify-center">
                <h2>{movie.Title}</h2>
                <h3>Rating: </h3>
                <h3>Type: </h3>
                <h3>Genre: </h3>
                <h3>Runtime: </h3>
                <h3>Language: </h3>
                <h3>Plot: </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieDescription;
