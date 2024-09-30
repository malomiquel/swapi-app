/**
 * Fetches a species by its ID from an API
 * @param {string} id - The unique identifier of the species to fetch
 * @returns {Promise<Object>} A promise that resolves to the species data or rejects with an error
 */
export const fetchGetSpecie = async (id: string) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_GET_SPECIES_URL.replace(":id", id)
    );

    const specie = await response.json();

    if (response.status !== 200) {
      return Promise.reject(new Error(specie.message));
    }

    if (specie.detail === "Not found") {
      return Promise.reject(new Error("Character not found"));
    }

    return specie;
  } catch (error) {
    return Promise.reject(error);
  }
};