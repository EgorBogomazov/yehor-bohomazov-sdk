import axios from "axios";
import { URL } from "../config/constants";
import { headers } from "../config";

export const getMovies = async () => {
  try {
    const response = await axios.get(URL.MOVIES, { headers })
    return response.data;
  } catch (e) {
    return e
  }
}

export const getMovieItem = async (id) => {
  try {
    const response = await axios.get(URL.MOVIES_ITEM(id), { headers })
    return response.data;
  } catch (e) {
    return e
  }
}

export const getMovieQuotes = async (id) => {
  try {
    const response = await axios.get(URL.MOVIE_QUOTES(id), { headers })
    return response.data;
  } catch (e) {
    return e
  }
}


