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

export const getMovieById = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
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

export const getSearchMovies = async (searchKey) => {
  try {
    const { data: {results} } = await axios.get(`${API_URL}/search/movie`, {
      params: {
        api_key: VITE_RAPID_API_KEY,
        query: searchKey,
      },
    });
    return results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMovieVidio = async (id) => {
  try {
    const { data: {results} } = await axios.get(`${API_URL}/movie/${id}/videos`, {
      params: {
        api_key: VITE_RAPID_API_KEY,
      },
    });
    return results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
