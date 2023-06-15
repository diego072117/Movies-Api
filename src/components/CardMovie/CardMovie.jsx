import React, { useEffect, useState } from 'react';
import './CardMovie.scss';

export const CardMovie = ({ data }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [data]);

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  const currentMovie = data[currentMovieIndex];

const fondo = IMAGE_PATH+currentMovie.backdrop_path
console.log('fondo', fondo);
  // console.log('data desde el hijo',data);

  return (
    <>
    <div className='container-card' style={{ backgroundImage: `url(${fondo})`}}>hola</div>
      {/* <h1 className="hola">{currentMovie.title}</h1> */}
    </>
  );
};
