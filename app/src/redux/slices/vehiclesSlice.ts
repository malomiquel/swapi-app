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

/**
 * Asynchronously fetches vehicles using Redux Toolkit's createAsyncThunk
 * @returns {Promise<Vehicle[]>} A promise that resolves to an array of Vehicle objects
 */
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

/**
 * Configures extra reducers for handling the getVehicles async thunk
 * @param {Object} builder - The builder object for adding case reducers
 * @returns {void} This function does not return a value
 */
export const vehicleSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * Handles the pending state of the getVehicles action in the Redux toolkit slice
     * @param {Object} state - The current state of the slice
     /**
      * Handles the fulfilled state of the getVehicles async thunk
      * @param {object} state - The current state of the Redux store
      * @param {object} action - The action object containing the payload
      * @param {Array} action.payload - The array of vehicles retrieved from the API
      * @returns {void} This reducer doesn't return anything, it mutates the state directly
      */
     * @returns {void} This case reducer doesn't return anything, it mutates the state directly
     */
    builder.addCase(getVehicles.pending, (state) => {
      state.loading = true;
    });
    /**
     * Handles the rejected state of the getVehicles async thunk
     * @param {object} state - The current state of the Redux store
     * @param {object} action - The rejected action object
     * @param {Error} action.error - The error object from the rejected action
     * @returns {void} This reducer doesn't return anything, it mutates the state directly
     */
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