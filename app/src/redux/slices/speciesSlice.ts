import { fetchGetspecies } from "@/services/fetch/specie/getAllSpecies";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Species {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string | null;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

```
/**
 * Asynchronous thunk action creator to fetch species data
 * @returns {Promise<Species[]>} A promise that resolves to an array of Species objects
 */

```const getSpecies = createAsyncThunk("species/getSpecies", async () => {
  const response = await fetchGetspecies();
  return response as Species[];
});

const initialState: {
  species: Species[];
  loading: boolean;
  error: string | null;
} = {
  species: [],
  loading: false,
  error: null,
/**
 * Defines extra reducers for handling asynchronous actions related to fetching species data
 * @param {Object} builder - The Redux Toolkit builder object used to define reducers
 * @returns {void} This function doesn't return a value, it mutates the state directly
 */
};

export const speciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * Handles the pending state of the getSpecies async thunk
     * @param {Object} state - The current state of the Redux store
     /**
      * Handles the fulfilled state of the getSpecies action in a Redux slice
      * @param {object} state - The current state of the Redux store
      * @param {object} action - The action object containing the payload
      * @param {Array} action.payload - The array of species data fetched from the API
      * @returns {void} This case reducer doesn't return anything, it mutates the state directly
      */
     * @returns {void} This case reducer doesn't return anything
     */
    builder.addCase(getSpecies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSpecies.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.species = payload;
      state.error = "";
    });
    /**
     * Handles the rejected state of the getSpecies async thunk in a Redux slice
     * @param {Object} state - The current state of the slice
     * @param {Object} action - The rejected action object
     * @param {Error} action.error - The error object from the rejected action
     * @returns {void} This case reducer doesn't return anything, it mutates the state directly
     */
    builder.addCase(getSpecies.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "";
    });
  },
});

export { getSpecies };

export default speciesSlice.reducer;