import { RootState } from "store";
import { planetsAdapter } from "./planetSlice";

export const {
  selectAll: selectAllPlanets,
  selectById: selectPlanetById,
  selectTotal: selectTotalPlanets,
  selectIds: selectPlanetIds,
} = planetsAdapter.getSelectors((state: RootState) => state.planets);

export const selectStatus = ((state: RootState) => state.planets.status);
export const selectError = ((state: RootState) => state.planets.error);

export type SelectAllPlanets = typeof selectAllPlanets;
export type SelectPlanetById = typeof selectPlanetById;