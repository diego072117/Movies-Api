import { useState } from "react";
import { Link } from "react-router-dom";
import { getSearchMovies } from "../../services/Api";
import "./Search.scss";

const MAX_CHARACTERS_TITLE = 11;

export const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const DEFAULT_IMG =
    "https://i.pinimg.com/564x/c5/4d/e5/c54de5aa13ce2bff9e49225919f9bbd9.jpg";

  const searchMovie = async () => {
    const result = await getSearchMovies(searchKey);
    setSearchResult(result);
  };

  return (
    <>
      <div className="title">Hi, Hoang</div>
      <div className="container-search">
        <input
          className="input-form"
          type="text"
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Buscar"
        />
        <button className="icon-search" onClick={searchMovie}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="container-search-movie">
        {searchResult.map((movies) => (
          <div key={movies.id} className="card-search">
            <div className="container-image-search">
              <img
                className="img-search"
                src={
                  movies.backdrop_path
                    ? `${IMAGE_PATH}${movies.backdrop_path}`
                    : DEFAULT_IMG
                }
                alt=""
              />
            </div>

            <div className="content-card-search">
              <div className="header-content">
                {movies.title.length > MAX_CHARACTERS_TITLE
                  ? `${movies.title.slice(0, MAX_CHARACTERS_TITLE)}...`
                  : movies.title}
                <div className="save-search">
                  <i className="fa-regular fa-bookmark"></i>
                </div>
              </div>
              <div className="lan-date-search">{`${movies.original_language} | ${movies.release_date}`}</div>

              <div className="votation-play-search">
                <div className="votation">
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <div className="votation-value-search">
                    {(movies.vote_average / 2).toFixed(1)}
                  </div>
                </div>
                <Link className="play-search" to={`/movieDetails/${movies.id}`}>
                  <i className="fa-solid fa-play"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
