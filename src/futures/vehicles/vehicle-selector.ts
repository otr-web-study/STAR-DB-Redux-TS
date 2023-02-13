import { RootState } from "store";
import { vehiclesAdapter } from "./vehiclesSlice";

export const {
  selectAll: selectAllVehicles,
  selectById: selectVehicleById,
  selectTotal: selectTotalVehicles,
  selectIds: selectVehicleIds,
} = vehiclesAdapter.getSelectors((state: RootState) => state.vehicles);

export const selectStatus = ((state: RootState) => state.vehicles.status);
export const selectError = ((state: RootState) => state.vehicles.error);
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
}) 

export type SelectAllVehicles = typeof selectAllVehicles;
export type SelectVehicleById = typeof selectVehicleById;
export type SelectVehiclePagination = typeof selectVehiclePagination;
export type SelectVehicleListState = typeof selectVehicleListState;