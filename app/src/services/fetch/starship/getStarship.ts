export const fetchGetStarship = async (id: string) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_GET_STARSHIP_URL.replace(":id", id)
    );

    const starship = await response.json();

    if (response.status !== 200) {
      return Promise.reject(new Error(starship.message));
    }

    if (starship.detail === "Not found") {
      return Promise.reject(new Error("Character not found"));
    }

    return starship;
  } catch (error) {
    return Promise.reject(error);
  }
};
