/**
 * Fetches all films from the API asynchronously
 * @returns {Promise<Array>} A promise that resolves to an array of film objects
 * @throws {Error} If the API request fails or returns a non-200 status code
 */
export const fetchGetFilms = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_GET_ALL_FILMS_URL
    );

    const films = await response.json();

    if (response.status !== 200) {
      return Promise.reject(new Error(films.message));
    }

    return films.results;
  } catch (error) {
    return Promise.reject(error);
  }
};