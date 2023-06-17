import { useEffect, useState } from "react";
import { CardMovie } from "../../components/CardMovie/CardMovie";
import { SwiperCards } from "../../components/SwiperCards/SwiperCards";
import { Nav } from "../../components/Nav/Nav";
import { getAllMovies } from "../../services/Api";
import "./Home.scss";
import { Loading } from "../Loading/Loading";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    const dataFromAPI = async () => {
      const data = await getAllMovies();
      setMovies(data.results);
    };

    dataFromAPI();
  }, []);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  if (!movies || movies.length === 0) {
    return <Loading/>
  }

  return (
    <>
      <div className="title">Hi, Hoang</div>
      <div className="filters">
        <div
          className={`filterOption ${
            selectedFilter === "All" ? "selected" : ""
          }`}
          onClick={() => handleFilterClick("All")}
        >
          All
        </div>
        <div
          className={`filterOption ${
            selectedFilter === "Action" ? "selected" : ""
          }`}
          onClick={() => handleFilterClick("Action")}
        >
          Action
        </div>
        <div
          className={`filterOption ${
            selectedFilter === "Comedy" ? "selected" : ""
          }`}
          onClick={() => handleFilterClick("Comedy")}
        >
          Comedy
        </div>
        <div
          className={`filterOption ${
            selectedFilter === "Horor" ? "selected" : ""
          }`}
          onClick={() => handleFilterClick("Horor")}
        >
          Horor
        </div>
        <div>
          <i className="fa-solid fa-filter"></i>
        </div>
      </div>
      <CardMovie data={movies} />
      <div className="container-popular">
        <div className="title-popular">Popular</div>
        <div className="icon-ellipsis">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <SwiperCards data={movies} />
      <div className="container-popular">
        <div className="title-popular">You may like</div>
        <div className="icon-ellipsis">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <SwiperCards data={movies} />
      <Nav />
      <Nav />
    </>
  );
};
