import { useEffect, useState } from "react";
import { getAllMovies } from "../services/Api";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const dataFromAPI = async () => {
      const data = await getAllMovies();
      setMovies(data.results);
    };

    dataFromAPI();
  }, []);

  console.log("movies", movies);
  return (
    <>
      <h1>holiwis</h1>
    </>
  );
};
