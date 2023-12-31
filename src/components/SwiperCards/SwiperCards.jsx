import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SwiperCards.scss";
import { Link } from "react-router-dom";

const MAX_CHARACTERS_TITLE = 11;

export const SwiperCards = ({ data }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  const settings = {
    dots: false,
    fade: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="list-card-container">
      {data.map((movie) => (
        <div
          key={movie.id}
          className="card-list"
          // style={{ backgroundImage: `url(${IMAGE_PATH}${movie.backdrop_path})` }}
        >
          <img
            className="img"
            src={`${IMAGE_PATH}${movie.backdrop_path}`}
            alt=""
          />
          <div className="content-card-list">
            <p className="title-swiper-card">
              {movie.title.length > MAX_CHARACTERS_TITLE
                ? `${movie.title.slice(0, MAX_CHARACTERS_TITLE)}...`
                : movie.title}
            </p>
            <Link className="play" to={`/movieDetails/${movie.id}`}>
              <i className="fa-solid fa-play"></i>
            </Link>
            <div className="swiper-votation">
              <i className="fa-sharp fa-solid fa-star"></i>
              <div className="vote">{(movie.vote_average / 2).toFixed(1)}</div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
