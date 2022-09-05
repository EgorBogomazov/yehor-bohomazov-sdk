import axios from "axios";
import { URL } from "../config/constants";
import { headers } from "../config";

export const getChapters = async (params = null) => {
  try {
    const response = await axios.get(URL.CHAPTERS, { headers, params });
    return response.data;
  } catch (e) {
    return e;
  }
};

export const getChapterItem = async (id) => {
  try {
    const response = await axios.get(URL.CHAPTERS_ITEM(id), { headers });
    return response.data;
  } catch (e) {
    return e;
  }
};
