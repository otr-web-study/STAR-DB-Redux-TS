import { createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "store";
import { Extra, Starship } from "types";
import { MultipleResponse } from "services/swapi-service";


export const loadStarships = createAsyncThunk<
  MultipleResponse<Starship>,
  string,
  {
    state: RootState,
    extra: Extra,
  }
>(
  'starship/fetchStarships',
  async (page, {
    extra: { client },
  }) => {
    return await client.getStarships(page);
  },
  {
    condition: (page, { getState }) => {
      const { starships: {status, currPage} } = getState();

      if (status === 'loading' || page === currPage) {
        return false;
      }
    }
  }
);

export type LoadStarshipsAction = typeof loadStarships;
