/**
 * Fetches film data from an API based on the provided ID.
 * @param {string} id - The unique identifier of the film to fetch.
 * @returns {Promise<Object>} A promise that resolves to the film data object or rejects with an error.
 */
export const fetchGetFilm = async (id: string) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_GET_FILM_URL.replace(":id", id)
    );

    const film = await response.json();

    if (response.status !== 200) {
      return Promise.reject(new Error(film.message));
    }

    if (film.detail === "Not found") {
      return Promise.reject(new Error("Character not found"));
    }

    return film;
  } catch (error) {
    return Promise.reject(error);
  }
};