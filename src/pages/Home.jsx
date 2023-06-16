import { useEffect, useState } from "react";
import { CardMovie } from "../components/CardMovie/CardMovie";
import { ListCards } from "../components/ListCards/ListCards";
import { Nav } from "../components/Nav/Nav";
import { getAllMovies } from "../services/Api";
import "./Home.scss";

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

  return (
    <>
      <div className="title">Hi, Hoang</div>
      <div className="filters">
        <div
          className={`filterOption ${selectedFilter === "All" ? "selected" : ""}`}
          onClick={() => handleFilterClick("All")}
        >
          All
        </div>
        <div
          className={`filterOption ${selectedFilter === "Action" ? "selected" : ""}`}
          onClick={() => handleFilterClick("Action")}
        >
          Action
        </div>
        <div
          className={`filterOption ${selectedFilter === "Comedy" ? "selected" : ""}`}
          onClick={() => handleFilterClick("Comedy")}
        >
          Comedy
        </div>
        <div
          className={`filterOption ${selectedFilter === "Horor" ? "selected" : ""}`}
          onClick={() => handleFilterClick("Horor")}
        >
          Horor
        </div>
        <div>
          <i className="fa-solid fa-filter"></i>
        </div>
      </div>
      <CardMovie data={movies}/>
      <ListCards data={movies}/>

      <Nav />
    </>
  );
};
