/**
 * Fetches all planets from the API
 * @returns {Promise<Array>} A promise that resolves to an array of planet objects
 * @throws {Error} If the API request fails or returns a non-200 status code
 */
export const fetchGetPlanets = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_GET_ALL_PLANETS_URL
    );

    const planets = await response.json();

    if (response.status !== 200) {
      return Promise.reject(new Error(planets.message));
    }

    return planets.results;
  } catch (error) {
    return Promise.reject(error);
  }
};