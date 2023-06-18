import { Loading } from "../../pages/loading/Loading";
import "./MovieDetails.scss";

const MAX_CHARACTERS_DESCRIPTION = 300;

export const MovieDetails = ({ data, dataMovie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const DEFAULT_IMG =
    "https://i.pinimg.com/564x/c5/4d/e5/c54de5aa13ce2bff9e49225919f9bbd9.jpg";

  const start = (data.vote_average / 2).toFixed(1);

  const runtime = () => {
    const hours = Math.floor(data.runtime / 60);
    const minutes = data.runtime % 60;

    return `${hours}h${minutes}m`;
  };

  const detailsMovie = `${data.original_language} | ${
    data.genres[0].name
  } | ${runtime()}`;

  if (!Array.isArray(dataMovie)) {
    return <Loading />;
  }

  const findOficialTrailer = dataMovie.findIndex((item, currentIndex) => {
    return item.name === "Official Trailer";
  });

  const trailer = findOficialTrailer !== -1 ? findOficialTrailer : 0;

  const trailerUrl = `https://www.youtube.com/watch?v=${dataMovie[trailer]?.key}`;

  const completeImg = data.backdrop_path
    ? IMAGE_PATH + data.backdrop_path
    : DEFAULT_IMG;

  return (
    <>
      <div className="container-card-details">
        <div
          className="container-details"
          style={{ backgroundImage: `url(${completeImg}` }}
        >
          <div className="content-details">
            <div className="star">
              <i className="fa-sharp fa-solid fa-star"></i>
              <div className="vote-average">{start}</div>
            </div>
            <div className="container-play-details">
              <a
                href={trailerUrl}
                target="_blank"
                className="button-play-details"
              >
                <i className="fa-solid fa-play"></i>
              </a>
              <p className="watch-detail">Watch now</p>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-details">
        <div className="title-movie-detail">{data.title}</div>
        <div className="details-time">
          <div className="language">{detailsMovie}</div>
        </div>
      </div>
      <div className="desciption-movie-details">
        <div className="story-time">
          <p className="title-description-details">Story line</p>
          <p className="title-description-details">{data.release_date}</p>
        </div>

        <p className="description-details">
          {data.overview.length > MAX_CHARACTERS_DESCRIPTION
            ? `${data.overview.slice(0, MAX_CHARACTERS_DESCRIPTION)}...`
            : data.overview}
        </p>
      </div>
    </>
  );
};
