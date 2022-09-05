import axios from "axios";
import { URL } from "../config/constants";
import { headers } from "../config";

export const getCharacters = async () => {
  try {
    const response = await axios.get(URL.CHARACTERS, { headers });
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

export const getCharacterQuotes = async (id) => {
  try {
    const response = await axios.get(URL.CHARACTER_QUOTE(id), { headers });
    return response.data;
  } catch (e) {
    return e;
  }
};


