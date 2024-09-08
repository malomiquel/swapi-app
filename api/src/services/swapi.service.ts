export const SwapiService = {
  async getAll(resource: string) {
    try {
      const response = await fetch(`https://swapi.dev/api/${resource}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to fetch ${resource}`);
    }
  },

  async getById(resource: string, id: string) {
    try {
      const response = await fetch(`https://swapi.dev/api/${resource}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to fetch ${resource} with ID: ${id}`);
    }
  }
}