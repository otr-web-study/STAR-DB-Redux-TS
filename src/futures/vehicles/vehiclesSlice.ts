import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { Vehicle } from "types";
import { loadVehicles } from "./vehicle-actions";
import { defaultState, DefaultState } from "futures/state";

export const vehiclesAdapter = createEntityAdapter<Vehicle>();

const initialState = vehiclesAdapter.getInitialState<DefaultState>(defaultState);

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadVehicles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadVehicles.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Unknown error';
        state.currPage = '1';
      })
      .addCase(loadVehicles.fulfilled, (state, action) => {
        const { items, next, previous, page } = action.payload;
        state.status = 'received';
        state.next = next;
        state.previous = previous;
        state.currPage = page;
        vehiclesAdapter.setAll(state, items);
      })
  }
});

export default vehicleSlice.reducer;