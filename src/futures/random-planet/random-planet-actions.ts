import { createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "store";
import { Extra, Planet } from "types";


export const loadRandomPlanets = createAsyncThunk<
  Planet[],
  undefined,
  {
    state: RootState,
    extra: Extra,
  }
>(
  'randomPlanet/fetchPlanets',
  async (_, {
    extra: { client },
  }) => {
    return  [
      ...(await client.getPlanets('1')).items,
      ...(await client.getPlanets('2')).items,
    ];
  },
  {
    condition: (_, { getState }) => {
      const { randomPlanet: { status } } = getState();

      if (status === 'loading') {
        return false;
      }
    }
  }
);

export type LoadPlanetsAction = typeof loadRandomPlanets;
