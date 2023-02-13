import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { Starship } from "types";
import { loadStarships } from "./starship-actions";
import { defaultState, DefaultState } from "futures/state";

export const starshipsAdapter = createEntityAdapter<Starship>();

const initialState = starshipsAdapter.getInitialState<DefaultState>(defaultState);

const starshipSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadStarships.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadStarships.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Unknown error';
        state.currPage = '1';
      })
      .addCase(loadStarships.fulfilled, (state, action) => {
        const { items, next, previous, page } = action.payload;
        state.status = 'received';
        state.next = next;
        state.previous = previous;
        state.currPage = page;
        starshipsAdapter.setAll(state, items);
      })
  }
});

export default starshipSlice.reducer;