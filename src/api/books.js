import axios from "axios";
import { URL } from "../config/constants";
import { headers } from "../config";

export const getBooks = async () => {
  try {
    const response = await axios.get(URL.BOOKS, { headers });
    return response.data;
  } catch (e) {
    return e;
  }
};

export const getBookItem = async (id) => {
  try {
    const response = await axios.get(URL.BOOKS_ITEM(id), { headers });
    return response.data;
  } catch (e) {
    return e;
  }
};

export const getBookChapters = async (id) => {
  try {
    const response = await axios.get(URL.BOOK_CHAPTERS(id), { headers });
    return response.data;
  } catch (e) {
    return e;
  }
};


