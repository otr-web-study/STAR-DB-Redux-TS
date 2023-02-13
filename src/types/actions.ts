import { LoadPeopleAction } from "futures/people/people-actions";
import { LoadPlanetsAction } from "futures/planets/planet-actions";
import { LoadStarshipsAction } from "futures/starships/starship-actions";
import { LoadVehiclesAction } from "futures/vehicles/vehicle-actions";

export type AllLoadActions = LoadPlanetsAction | LoadPeopleAction | LoadStarshipsAction | LoadVehiclesAction;