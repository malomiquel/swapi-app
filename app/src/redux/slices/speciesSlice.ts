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

const getSpecies = createAsyncThunk("species/getSpecies", async () => {
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
};

export const speciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpecies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSpecies.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.species = payload;
      state.error = "";
    });
    builder.addCase(getSpecies.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "";
    });
  },
});

export { getSpecies };

export default speciesSlice.reducer;