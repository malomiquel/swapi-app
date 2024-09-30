import { fetchGetStarships } from "@/services/fetch/starship/getAllStarships";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

/**
 * Creates an async thunk action to fetch starships
 * @returns {Promise<Starship[]>} A promise that resolves to an array of Starship objects
 */
const getStarships = createAsyncThunk("starships/getStarships", async () => {
  const response = await fetchGetStarships();
  return response as Starship[];
});

const initialState: {
  starships: Starship[];
  loading: boolean;
  error: string | null;
} = {
  starships: [],
  loading: false,
  error: null,
};

/**
 * Defines extra reducers for handling asynchronous actions related to fetching starships
 * @param {Object} builder - The Redux Toolkit builder object
 * @returns {void} This function doesn't return a value, it mutates the state
 */
export const starshipsSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {},
  /**
   * Handles the fulfilled state of the getStarships async thunk
   * @param {object} state - The current state of the Redux store
   * @param {object} action - The action object containing the payload
   * @param {Array} action.payload - The array of starships fetched from the API
   * @returns {void} This function doesn't return anything, it mutates the state directly
   */
  extraReducers: (builder) => {
    /**
     * Handles the pending state of the getStarships async thunk
     * @param {Object} state - The current state of the Redux store
     * @returns {void} This case reducer doesn't return anything
     */
    builder.addCase(getStarships.pending, (state) => {
      state.loading = true;
    });
    /**
     * Handles the rejected state of the getStarships async thunk
     * @param {Object} state - The current state of the Redux store
     * @param {Object} action - The rejected action object
     * @param {Error} action.error - The error object from the rejected action
     * @returns {void} This reducer doesn't return anything, it mutates the state directly
     */
    builder.addCase(getStarships.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.starships = payload;
      state.error = "";
    });
    builder.addCase(getStarships.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "";
    });
  },
});

export { getStarships };

export default starshipsSlice.reducer;
