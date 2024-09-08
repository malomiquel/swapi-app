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

const getPlanets = createAsyncThunk("planets/getPlanets", async () => {
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
};

export const planetsSlice = createSlice({
  name: "planets",
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
    builder.addCase(getPlanets.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "";
    });
  },
});

export { getPlanets };

export default planetsSlice.reducer;
