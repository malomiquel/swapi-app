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
  name: "films",
  initialState,
  reducers: {},
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
