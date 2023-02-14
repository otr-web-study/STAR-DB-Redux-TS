import { RootState } from "store";
import { vehiclesAdapter } from "./vehiclesSlice";

export const {
  selectById: selectVehicleById,
  selectIds: selectVehicleIds,
} = vehiclesAdapter.getSelectors((state: RootState) => state.vehicles);

export const selectVehiclePagination = ((state: RootState) => {
  return {
    next: state.vehicles.next,
    previous: state.vehicles.previous,
    currPage: state.vehicles.currPage
  }
});

export const selectVehicleListState = ((state: RootState) => {
  const { vehicles: { status, error, entities, currPage } } = state;

  return {
    status,
    error,
    currPage,
    items: Object.values(entities),
  }
});

export type SelectVehicleById = typeof selectVehicleById;
export type SelectVehiclePagination = typeof selectVehiclePagination;
export type SelectVehicleListState = typeof selectVehicleListState;