import { RootState } from "store";
import { randomPlanetsAdapter } from "./randomPlanetSlice";

export const {
  selectById: selectRandomPlanetById,
  selectIds: selectRandomPlanetIds,
} = randomPlanetsAdapter.getSelectors((state: RootState) => state.randomPlanet);

export const selectStatus = ((state: RootState) => state.randomPlanet.status);
export const selectError = ((state: RootState) => state.randomPlanet.error);

export type SelectRandomPlanetIds = typeof selectRandomPlanetIds;
export type SelectPlanetById = typeof selectRandomPlanetById;