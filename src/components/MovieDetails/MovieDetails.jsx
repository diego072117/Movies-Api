import "./MovieDetails.scss";

const MAX_CHARACTERS_DESCRIPTION = 300;

export const MovieDetails = ({ data }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  console.log("soy la data desde el hijo", data);

  const start = (data.vote_average / 2).toFixed(1);

  const runtime = () => {
    const hours = Math.floor(data.runtime / 60);
    const minutes = data.runtime % 60;

    return `${hours}h${minutes}m`;
  };

  const detailsMovie = `${data.original_language} | ${
    data.genres[0].name
  } | ${runtime()}`;

  return (
    <>
      <div className="container-card-details">
        <div
          className="container-details"
          style={{ backgroundImage: `url(${IMAGE_PATH}${data.backdrop_path})` }}
        >
          <div className="content-details">
            <div className="star">
              <i className="fa-sharp fa-solid fa-star"></i>
              <div className="vote-average">{start}</div>
            </div>
            <div className="container-play-details">
              <div className="button-play-details">
                <i className="fa-solid fa-play"></i>
              </div>
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
        <p className="title-description-details">Story line</p>
        <p className="description-details">
          {data.overview.length > MAX_CHARACTERS_DESCRIPTION
            ? `${data.overview.slice(0, MAX_CHARACTERS_DESCRIPTION)}...`
            : data.overview}
        </p>
      </div>
    </>
  );
};
