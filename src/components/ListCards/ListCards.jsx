import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ListCards.scss";

const MAX_CHARACTERS_TITLE = 11;

export const ListCards = ({ data }) => {
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

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
      <Slider {...settings} className="list-card-container">
        {data.map((data) => (
          <div
            key={data.id}
            className="card-list"
            // style={{ backgroundImage: `url(${IMAGE_PATH}${data.backdrop_path})` }}
          >
            <img
              className="img"
              src={`${IMAGE_PATH}${data.backdrop_path}`}
              alt=""
            />
            <div className="content-card-list">
              <p>
                {data.title.length > MAX_CHARACTERS_TITLE
                  ? `${data.title.slice(0, MAX_CHARACTERS_TITLE)}...`
                  : data.title}
              </p>
              <div className="play">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
          </div>
        ))}
      </Slider>
   
  );
};
