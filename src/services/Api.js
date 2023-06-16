import axios from "axios";
const { VITE_RAPID_API_KEY } = import.meta.env;

const API_URL = "https://api.themoviedb.org/3";


export const getAllMovies = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: VITE_RAPID_API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
