/**
 * Fetches character data from an external API
 * @returns {Promise<Array>} A promise that resolves to an array of character objects
 * @throws {Error} If the API request fails or returns a non-200 status code
 */
export const fetchGetCharacters = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_GET_ALL_PEOPLE_URL
    );

    const characters = await response.json();

    if (response.status !== 200) {
      return Promise.reject(new Error(characters.message));
    }

    return characters.results;
  } catch (error) {
    return Promise.reject(error);
  }
};