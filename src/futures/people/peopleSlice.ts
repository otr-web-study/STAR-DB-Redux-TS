import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { Person } from "types";
import { loadPeople } from "./people-actions";
import { defaultState, DefaultState } from "futures/state";

export const peopleAdapter = createEntityAdapter<Person>();

const initialState = peopleAdapter.getInitialState<DefaultState>(defaultState);

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPeople.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadPeople.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Unknown error';
        state.currPage = '1';
      })
      .addCase(loadPeople.fulfilled, (state, action) => {
        const { items, next, previous, page } = action.payload;
        state.status = 'received';
        state.next = next;
        state.previous = previous;
        state.currPage = page;
        peopleAdapter.setAll(state, items);
      })
  }
});

export default peopleSlice.reducer;
