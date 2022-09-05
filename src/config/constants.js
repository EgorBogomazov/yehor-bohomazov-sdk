export const token = "TH8XWwGCVYL79On4ZMau";
export const apiUrl = "https://the-one-api.dev/v2";

export const URL = {
  // books
  BOOKS: `${apiUrl}/book`,
  BOOKS_ITEM: (id = '') => `${apiUrl}/book/${id}`,
  BOOK_CHAPTERS: (id = '') => `${apiUrl}/book/${id}/chapter`,

  // movies
  MOVIES: `${apiUrl}/movie`,
  MOVIES_ITEM: (id) => `${apiUrl}/movie/${id}`,
  MOVIE_QUOTES: (id) => `${apiUrl}/movie/${id}/quote`,

  // characters
  CHARACTERS: `${apiUrl}/character`,
  CHARACTERS_ITEM: (id) => `${apiUrl}/character/${id}`,
  CHARACTER_QUOTE: (id) => `${apiUrl}/character/${id}/quote`,

  // chapters

  CHAPTERS: `${apiUrl}/chapter`,
  CHAPTERS_ITEM: (id) => `${apiUrl}/chapter/${id}`,

  // quotes

  QUOTES: `${apiUrl}/quote`,
  QUOTES_ITEM: (id) => `${apiUrl}/quote/${id}`,
};



