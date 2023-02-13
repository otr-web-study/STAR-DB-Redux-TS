import { createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "store";
import { Extra, Vehicle } from "types";
import { MultipleResponse } from "services/swapi-service";


export const loadVehicles = createAsyncThunk<
  MultipleResponse<Vehicle>,
  string,
  {
    state: RootState,
    extra: Extra,
  }
>(
  'vehicle/fetchVehicles',
  async (page, {
    extra: { client },
  }) => {
    return await client.getVehicles(page);
  },
  {
    condition: (page, { getState }) => {
      const { vehicles: {status, currPage} } = getState();

      if (status === 'loading' || page === currPage) {
        return false;
      }
    }
  }
);

export type LoadVehiclesAction = typeof loadVehicles;
