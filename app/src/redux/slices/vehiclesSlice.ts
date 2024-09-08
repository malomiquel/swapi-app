import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchGetVehicles } from '@/services/fetch/vehicle/getAllVehicles';

export interface Vehicle {
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
  vehicle_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

const getVehicles = createAsyncThunk("vehicles/getVehicles", async () => {
  const response = await fetchGetVehicles();
  return response as Vehicle[];
});

const initialState: {
  vehicles: Vehicle[];
  loading: boolean;
  error: string | null;
} = {
  vehicles: [],
  loading: false,
  error: null,
}

export const vehicleSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVehicles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVehicles.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.vehicles = payload
      state.error = "";
    });
    builder.addCase(getVehicles.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "";
    });
  }
})

export { getVehicles }

export default vehicleSlice.reducer