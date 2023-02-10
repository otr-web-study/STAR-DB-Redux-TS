import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { Status, Planet } from "types";
import { loadPlanets } from "./planet-actions";

export const planetsAdapter = createEntityAdapter<Planet>();

const initialState = planetsAdapter.getInitialState<
  {status:Status, error: string | null}
>({
  status: 'idle',
  error: null,
});

const planetSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPlanets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadPlanets.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Unknown error';
      })
      .addCase(loadPlanets.fulfilled, (state, action) => {
        state.status = 'received';
        planetsAdapter.setAll(state, action.payload);
      })
  }
});

export default planetSlice.reducer;

export type PlanetSlice = typeof initialState;
