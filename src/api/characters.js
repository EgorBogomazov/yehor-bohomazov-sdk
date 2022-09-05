import axios from "axios";
import { URL } from "../config/constants";
import { headers } from "../config";

export const getCharacters = async (params = null) => {
  try {
    const response = await axios.get(URL.CHARACTERS, { headers, params });
    return response.data;
  } catch (e) {
    return e;
  }
};

export const getCharacterItem = async (id) => {
  try {
    const response = await axios.get(URL.CHARACTERS_ITEM(id), { headers });
    return response.data;
  } catch (e) {
    return e;
  }
};

export const getCharacterQuotes = async (id, params) => {
  try {
    const response = await axios.get(URL.CHARACTER_QUOTE(id), { headers, params  });
    return response.data;
  } catch (e) {
    return e;
  }
};


