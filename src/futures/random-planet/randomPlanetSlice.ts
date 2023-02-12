import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { Planet } from "types";
import { loadRandomPlanets } from "./random-planet-actions";
import { defaultState, DefaultState } from "futures/state";

export const randomPlanetsAdapter = createEntityAdapter<Planet>();

const initialState = randomPlanetsAdapter.getInitialState<Pick<DefaultState, 'status' | 'error'>>(defaultState);

const randomPlanetSlice = createSlice({
  name: 'randomPlanet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadRandomPlanets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadRandomPlanets.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Unknown error';
      })
      .addCase(loadRandomPlanets.fulfilled, (state, action) => {
        const items = action.payload;
        state.status = 'received';
        randomPlanetsAdapter.setAll(state, items);
      })
  }
});

export default randomPlanetSlice.reducer;

export type RandomPlanetSlice = typeof initialState;
