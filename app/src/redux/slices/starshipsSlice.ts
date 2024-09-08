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

export const starshipsSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStarships.pending, (state) => {
      state.loading = true;
    });
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
