import { createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "store";
import { Extra, Planet } from "types";


export const loadPlanets = createAsyncThunk<
  Planet[],
  undefined,
  {
    state: RootState,
    extra: Extra,
  }
>(
  'planet/fetchAllPlanets',
  async (_, {
    extra: { client },
  }) => {
    return await client.getAllPlanets();
  },
  {
    condition: (_, { getState }) => {
      const { planets: {status} } = getState();

      if (status === 'loading') {
        return false;
      }
    }
  }
);
