/**
 * Fetches planet data by ID from an external API
 * @param {string} id - The unique identifier of the planet to fetch
 * @returns {Promise<Object>} A promise that resolves to the planet data object or rejects with an error
 */
export const fetchGetPlanet = async (id: string) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_GET_PLANET_URL.replace(":id", id)
    );

    const planet = await response.json();

    if (response.status !== 200) {
      return Promise.reject(new Error(planet.message));
    }

    if (planet.detail === "Not found") {
      return Promise.reject(new Error("Character not found"));
    }

    return planet;
  } catch (error) {
    return Promise.reject(error);
  }
};