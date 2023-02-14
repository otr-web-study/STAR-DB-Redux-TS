import {  SelectPlanetById } from "futures/planets/planet-selectors";
import {  SelectPersonById } from "futures/people/people-selectors";
import {  SelectStarshipById } from "futures/starships/starship-selector";
import {  SelectVehicleById } from "futures/vehicles/vehicle-selector";

export type SelectItemById = SelectPlanetById | SelectPersonById | SelectStarshipById | SelectVehicleById;