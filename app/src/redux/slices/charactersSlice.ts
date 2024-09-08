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

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => {
      state.loading = true;
    });
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