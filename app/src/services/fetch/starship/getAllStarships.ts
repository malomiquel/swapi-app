export const fetchGetStarships = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_GET_ALL_STARSHIPS_URL
    );

    const starships = await response.json();

    if (response.status !== 200) {
      return Promise.reject(new Error(starships.message));
    }

    return starships.results;
  } catch (error) {
    return Promise.reject(error);
  }
};