export const token = "TH8XWwGCVYL79On4ZMau";
export const apiUrl = "https://the-one-api.dev/v2"

export const URL = {
  BOOKS: `${apiUrl}/book`,
  BOOKS_ITEM: (id = '') => `${apiUrl}/book/${id}`,
  BOOK_CHAPTERS: (id = '') => `${apiUrl}/book/${id}/chapter`,
  MOVIES: `${apiUrl}/movie`,
  MOVIES_ITEM: (id) => `${apiUrl}/movie/${id}`,
  MOVIE_QUOTES: (id) => `${apiUrl}/movie/${id}/quote`,

}



