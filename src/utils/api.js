import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// API HEADERS
const headers = {
  Authorization: 'bearer ' + TMDB_TOKEN,
};

// Api Calling Method

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
