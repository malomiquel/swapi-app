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