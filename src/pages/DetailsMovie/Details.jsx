import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieDetails } from "../../components/MovieDetails/MovieDetails";
import { Nav } from "../../components/Nav/Nav";
import { SwiperCards } from "../../components/SwiperCards/SwiperCards";
import { getMovieById, getAllMovies } from "../../services/Api";
import "./Details.scss";

export const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const dataFromAPI = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };

    dataFromAPI();
  }, []);

  useEffect(() => {
    const dataFromAPI = async () => {
      const data = await getAllMovies();
      setMovies(data.results);
    };

    dataFromAPI();
  }, []);

  if (!movie || (movie.length === 0 && !movies) || movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="options-detail">
        <Link to="/" className="arrow-exit">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <div className="save">
          <i className="fa-regular fa-bookmark"></i>
        </div>
      </div>
      <MovieDetails data={movie} />
      <div className="recomendation-details">Recommended</div>
      <div className="swiper-cards">
        <SwiperCards data={movies} />
      </div>
      <Nav />
    </>
  );
};
