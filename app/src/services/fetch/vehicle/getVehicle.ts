/**
 * Fetches vehicle data from an API based on the provided ID.
 * @param {string} id - The unique identifier of the vehicle to fetch.
 * @returns {Promise<Object>} A promise that resolves to the vehicle data object or rejects with an error.
 */
export const fetchGetVehicle = async (id: string) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_GET_VEHICLE_URL.replace(":id", id)
    );

    const vehicle = await response.json();

    if (response.status !== 200) {
      return Promise.reject(new Error(vehicle.message));
    }

    if (vehicle.detail === "Not found") {
      return Promise.reject(new Error("Character not found"));
    }

    return vehicle;
  } catch (error) {
    return Promise.reject(error);
  }
};