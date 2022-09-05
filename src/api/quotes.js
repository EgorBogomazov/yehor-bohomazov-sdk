import axios from "axios";
import { URL } from "../config/constants";
import { headers } from "../config";

export const getQuotes = async (params = null) => {
  try {
    const response = await axios.get(URL.QUOTES, { headers, params });
    return response.data;
  } catch (e) {
    return e;
  }
};

export const getQuoteItem = async (id) => {
  try {
    const response = await axios.get(URL.QUOTES_ITEM(id), { headers });
    return response.data;
  } catch (e) {
    return e;
  }
};
