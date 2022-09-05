import axios from "axios";
import { URL } from "../config/constants";
import { headers } from "../config";

export const getChapters = async () => {
  try {
    const response = await axios.get(URL.CHAPTERS, { headers });
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
