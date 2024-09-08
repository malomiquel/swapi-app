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