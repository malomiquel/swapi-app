import { fetchGetPlanets } from "@/services/fetch/planet/getAllPlanets";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

```
/**
 * Asynchronously fetches and returns a list of planets
 * @returns {Promise<Planet[]>} A promise that resolves to an array of Planet objects
 */

```const getPlanets = createAsyncThunk("planets/getPlanets", async () => {
  const response = await fetchGetPlanets();
  return response as Planet[];
});

const initialState: {
  planets: Planet[];
  loading: boolean;
  error: string | null;
} = {
  planets: [],
  loading: false,
  error: null,
/**
 /**
  * Reducer case for handling the pending state of the getPlanets action
  * @param {Object} state - The current state object
  * @returns {void} This case modifier doesn't return a value, it updates the state in-place
  */
 * Configures extra reducers for handling the getPlanets async thunk
 * @param {Object} builder - The builder object from createSlice
 * @returns {void} This function doesn't return anything
 */
};

export const planetsSlice = createSlice({
  name: "planets",
  ```
  /**
   * Handles the fulfilled state of the getPlanets action in the Redux slice.
   * @param {object} state - The current state of the slice.
   * @param {object} action - The action object containing the payload.
   * @param {Array} action.payload - The array of planets fetched from the API.
   * @returns {void} This case reducer doesn't return anything, it mutates the state directly.
   */
  ```
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlanets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPlanets.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.planets = payload;
      state.error = "";
    });
    /**
     * Handles the rejected state of the getPlanets async thunk
     * @param {Object} state - The current state of the Redux store
     * @param {Object} action - The rejected action object
     * @param {Error} action.error - The error object from the rejected action
     * @returns {void} This function doesn't return anything, it mutates the state
     */
    builder.addCase(getPlanets.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "";
    });
  },
});

export { getPlanets };

export default planetsSlice.reducer;
