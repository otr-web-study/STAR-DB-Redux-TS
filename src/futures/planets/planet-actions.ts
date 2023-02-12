import { createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "store";
import { Extra, Planet } from "types";
import { MultipleResponse } from "services/swapi-service";


export const loadPlanets = createAsyncThunk<
  MultipleResponse<Planet>,
  string,
  {
    state: RootState,
    extra: Extra,
  }
>(
  'planet/fetchPlanets',
  async (page, {
    extra: { client },
  }) => {
    return await client.getPlanets(page);
  },
  {
    condition: (page, { getState }) => {
      const { planets: {status, currPage} } = getState();

      if (status === 'loading' || page === currPage) {
        return false;
      }
    }
  }
);

export type LoadPlanetsAction = typeof loadPlanets;
