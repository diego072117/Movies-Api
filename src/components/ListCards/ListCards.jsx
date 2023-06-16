import "./ListCards.scss";

export const ListCards = ({ data }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="list-card-container">
      {/* <div className="container-card-list" style={{ backgroundImage: `url(${fondo})` }}>
        <h1>hola</h1>
      </div> */}
      {data.map((data) => (
        <div
          key={data.id}
          className="card-list"
          style={{ backgroundImage: `url(${IMAGE_PATH}${data.backdrop_path})` }}
        >
          <p>{data.title}</p>
        </div>
      ))}
    </div>
  );
};
