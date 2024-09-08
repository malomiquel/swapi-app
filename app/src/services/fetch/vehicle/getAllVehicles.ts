export const fetchGetVehicles = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_GET_ALL_VEHICLES_URL
    );

    const vehicles = await response.json();

    if (response.status !== 200) {
      return Promise.reject(new Error(vehicles.message));
    }

    return vehicles.results
  } catch (error) {
    return Promise.reject(error);
  }
};