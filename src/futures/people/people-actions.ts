import { createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "store";
import { Extra, Person } from "types";
import { MultipleResponse } from "services/swapi-service";


export const loadPeople = createAsyncThunk<
  MultipleResponse<Person>,
  string,
  {
    state: RootState,
    extra: Extra,
  }
>(
  'people/fetchPeople',
  async (page, {
    extra: { client },
  }) => {
    return await client.getPeople(page);
  },
  {
    condition: (page, { getState }) => {
      const { people: {status, currPage} } = getState();

      if (status === 'loading' || page === currPage) {
        return false;
      }
    }
  }
);

export type LoadPeopleAction = typeof loadPeople;
