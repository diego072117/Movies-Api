import React, { useEffect, useState } from "react";
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

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  const currentMovie = data[currentMovieIndex];

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
        </div>
        <div className="play">
          <i className="fa-solid fa-play"></i>
        </div>
      </div>
    </div>
    </>
  );
};
