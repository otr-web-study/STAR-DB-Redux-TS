import { RootState } from "store";
import { peopleAdapter } from "./peopleSlice";

export const {
  selectById: selectPersonById,
  selectIds: selectPeopleIds,
} = peopleAdapter.getSelectors((state: RootState) => state.people);

export const selectPeoplePagination = ((state: RootState) => {
  return {
    next: state.people.next,
    previous: state.people.previous,
    currPage: state.people.currPage
  }
});

export const selectPeopleListState = ((state: RootState) => {
  const { people: { status, error, entities, currPage } } = state;

  return {
    status,
    error,
    currPage,
    items: Object.values(entities),
  }
});

export type SelectPersonById = typeof selectPersonById;
export type SelectPeoplePagination = typeof selectPeoplePagination;
export type SelectPeopleListState = typeof selectPeopleListState;