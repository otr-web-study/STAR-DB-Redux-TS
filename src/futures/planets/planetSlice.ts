import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { Planet } from "types";
import { loadPlanets } from "./planet-actions";
import { defaultState, DefaultState } from "futures/state";

export const planetsAdapter = createEntityAdapter<Planet>();

const initialState = planetsAdapter.getInitialState<DefaultState>(defaultState);

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
        const { items, next, previous, page } = action.payload;
        state.status = 'received';
        state.next = next;
        state.previous = previous;
        state.currPage = page;
        planetsAdapter.setAll(state, items);
      })
  }
});

export default planetSlice.reducer;

export type PlanetSlice = typeof initialState;
