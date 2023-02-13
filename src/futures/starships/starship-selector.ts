import { RootState } from "store";
import { starshipsAdapter } from "./starshipsSlice";

export const {
  selectAll: selectAllStarships,
  selectById: selectStarshipById,
  selectTotal: selectTotalStarships,
  selectIds: selectStarshipIds,
} = starshipsAdapter.getSelectors((state: RootState) => state.starships);

export const selectStatus = ((state: RootState) => state.starships.status);
export const selectError = ((state: RootState) => state.starships.error);
export const selectStarshipPagination = ((state: RootState) => {
  return {
    next: state.starships.next,
    previous: state.starships.previous,
    currPage: state.starships.currPage
  }
});
export const selectStarshipListState = ((state: RootState) => {
  const { starships: { status, error, entities, currPage } } = state;

  return {
    status,
    error,
    currPage,
    items: Object.values(entities),
  }
}) 

export type SelectAllStarships = typeof selectAllStarships;
export type SelectStarshipById = typeof selectStarshipById;
export type SelectStarshipPagination = typeof selectStarshipPagination;
export type SelectStarshipListState = typeof selectStarshipListState;