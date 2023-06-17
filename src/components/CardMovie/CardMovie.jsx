import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CardMovie.scss";

export const CardMovie = ({ data }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 8000);

    return () => {
      clearInterval(timer);
    };
  }, [data]);
  

  const currentMovie = data[currentMovieIndex];

  const start = (currentMovie.vote_average / 2).toFixed(1);

  const fondo = IMAGE_PATH + currentMovie.backdrop_path;

  return (
    <>
      <div className="container-card-principal">
        <div
          className="container-card"
          style={{ backgroundImage: `url(${fondo})` }}
        >
          <div className="content-movie">
            <div>
              <h1 className="title-movie">{currentMovie.title}</h1>
            </div>
            <div className="calification">
              <i className="fa-sharp fa-solid fa-star"></i>
              <div className="vote">{start}</div>
            </div>
          </div>
          <Link className="play" to={`/movieDetails/${currentMovie.id}`}>
            <i className="fa-solid fa-play"></i>
          </Link>
        </div>
      </div>
    </>
  );
};
