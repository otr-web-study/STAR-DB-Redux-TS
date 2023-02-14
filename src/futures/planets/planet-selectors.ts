import { RootState } from "store";
import { planetsAdapter } from "./planetSlice";

export const {
  selectById: selectPlanetById,
  selectIds: selectPlanetIds,
} = planetsAdapter.getSelectors((state: RootState) => state.planets);

export const selectPlanetPagination = ((state: RootState) => {
  return {
    next: state.planets.next,
    previous: state.planets.previous,
    currPage: state.planets.currPage
  }
});

export const selectPlanetListState = ((state: RootState) => {
  const { planets: { status, error, entities, currPage } } = state;

  return {
    status,
    error,
    currPage,
    items: Object.values(entities),
  }
});

export type SelectPlanetById = typeof selectPlanetById;
export type SelectPlanetPagination = typeof selectPlanetPagination;
export type SelectPlanetListState = typeof selectPlanetListState;