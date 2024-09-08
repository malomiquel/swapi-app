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