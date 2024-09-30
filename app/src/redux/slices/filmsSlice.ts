import { fetchGetFilms } from "@/services/fetch/film/getAllFilms";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  films: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

```
/**
 * Asynchronously fetches films using Redux Toolkit's createAsyncThunk
 * @param {void} - This function doesn't take any parameters
 * @returns {Promise<Film[]>} A promise that resolves to an array of Film objects
 */
```
const getFilms = createAsyncThunk("films/getFilms", async () => {
  const response = await fetchGetFilms();
  return response as Film[];
});

const initialState: {
  films: Film[];
  loading: boolean;
  error: string | null;
} = {
  films: [],
  loading: false,
  error: null,
}

export const filmsSlice = createSlice({
  /**
   * Handles the fulfilled state of the getFilms action in a Redux slice
   * @param {object} state - The current state of the Redux store
   * @param {object} action - The action object containing the payload
   * @param {Array} action.payload - The array of films fetched from the API
   * @returns {void} This reducer doesn't return anything, it mutates the state directly
   */
  name: "films",
  initialState,
  reducers: {},
  /**
   /**
    ```
    /**
     * Handles the rejected state of the getFilms async thunk
     * @param {Object} state - The current state object
     * @param {Object} action - The action object containing the error
     * @param {Error} action.error - The error object from the rejected promise
     * @returns {void} This reducer doesn't return anything, it updates the state directly
     */
    ```
    * Reducer case for handling the pending state of the getFilms action
    * @param {Object} state - The current state of the Redux store
    * @returns {void} This case modifier doesn't return anything, it updates the state in place
    */
   * Configures extra reducers for handling asynchronous film fetching actions
   * @param {Object} builder - The builder object for adding case reducers
   * @returns {void} This function doesn't return a value, it mutates the state
   */
  extraReducers: (builder) => {
    builder.addCase(getFilms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFilms.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.films = payload
      state.error = "";
    });
    builder.addCase(getFilms.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "";
    })
  }
});

export { getFilms };

export default filmsSlice.reducer;
