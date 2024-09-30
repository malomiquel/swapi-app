/**
 * Fetches all species data from the API
 * @returns {Promise<Array>} A promise that resolves to an array of species objects
 * @throws {Error} If the API request fails or returns a non-200 status code
 */
export const fetchGetspecies = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_GET_ALL_SPECIES_URL
    );

    const species = await response.json();

    if (response.status !== 200) {
      return Promise.reject(new Error(species.message));
    }

    return species.results;
  } catch (error) {
    return Promise.reject(error);
  }
};