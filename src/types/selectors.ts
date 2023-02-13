import { SelectAllPlanets, SelectPlanetById } from "futures/planets/planet-selectors";
import { SelectAllPeople, SelectPersonById } from "futures/people/people-selectors";
import { SelectAllStarships, SelectStarshipById } from "futures/starships/starship-selector";
import { SelectAllVehicles, SelectVehicleById } from "futures/vehicles/vehicle-selector";

export type SelectAllItems = SelectAllPlanets | SelectAllPeople | SelectAllStarships | SelectAllVehicles;
export type SelectItemById = SelectPlanetById | SelectPersonById | SelectStarshipById | SelectVehicleById;