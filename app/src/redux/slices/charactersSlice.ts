import { fetchGetCharacters } from "@/services/fetch/character/getAllCharacters";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

/**
 * Asynchronous thunk action creator to fetch characters
 * @returns {Promise<Character[]>} A promise that resolves to an array of Character objects
 */
const getCharacters = createAsyncThunk("characters/getCharacters", async () => {
  const response = await fetchGetCharacters();
  return response as Character[];
});

const initialState: {
  characters: Character[];
  loading: boolean;
  error: string | null;
} = {
  characters: [],
  loading: false,
  error: null,
};

/**
 * Configures extra reducers for handling asynchronous actions related to fetching characters
 * @param {Object} builder - The builder object for adding case reducers
 * @returns {void} This function doesn't return a value, it mutates the state
 */
export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * Handles the pending state of the getCharacters async thunk action
     * @param {Object} state - The current state object
     * @returns {void} This case reducer doesn't return anything
     */
    builder.addCase(getCharacters.pending, (state) => {
      state.loading = true;
    });
    /**
     * Handles the fulfilled state of the getCharacters async thunk
     * @param {object} state - The current Redux state
     * @param {object} payload - The payload containing the fetched characters
     * @returns {void} This function doesn't return anything, it mutates the state
     /**
      * Handles the rejected state of the getCharacters async thunk
      * @param {object} state - The current state of the slice
      * @param {object} action - The rejected action object
      * @param {Error} action.error - The error object from the rejected action
      * @returns {void} This function doesn't return anything, it modifies the state directly
      */
     */
    builder.addCase(getCharacters.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.characters = payload;
      state.error = "";
    });
    builder.addCase(getCharacters.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "";
    });
  },
});

export { getCharacters };

export default charactersSlice.reducer;