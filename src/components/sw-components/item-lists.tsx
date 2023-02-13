import ErrorBoundary from '../error-boundary';
import ItemList from "../item-list";
import { loadPlanets, LoadPlanetsAction } from 'futures/planets/planet-actions';
import { loadPeople, LoadPeopleAction } from 'futures/people/people-actions';
import { loadStarships, LoadStarshipsAction } from 'futures/starships/starship-actions';
import { loadVehicles, LoadVehiclesAction } from 'futures/vehicles/vehicle-actions';
import { 
  selectPlanetListState, 
  SelectPlanetListState, 
  selectPlanetPagination, 
  SelectPlanetPagination 
} from 'futures/planets/planet-selectors';
import { 
  selectPeopleListState, 
  SelectPeopleListState, 
  selectPeoplePagination, 
  SelectPeoplePagination 
} from 'futures/people/people-selectors';
import { 
  selectStarshipListState,
  SelectStarshipListState, 
  selectStarshipPagination, 
  SelectStarshipPagination 
} from 'futures/starships/starship-selector';
import { 
  selectVehicleListState, 
  SelectVehicleListState, 
  selectVehiclePagination, 
  SelectVehiclePagination 
} from 'futures/vehicles/vehicle-selector';
import { Person, Planet, Starship, Vehicle } from 'types';
import Pagination from 'components/pagination';


export type RenderNameParams = { name: string };
export type RenderModelAndNameParams = { model: string, name: string };
export type RenderClassAndNameParams = { vehicleClass: string, name: string };

const renderName = ({ name }: RenderNameParams) => name;
const renderModelAndName = ({ model, name}: RenderModelAndNameParams) => `${name} (${model})`;
const renderClassAndName = ({ vehicleClass, name}: RenderClassAndNameParams) => `${name} (${vehicleClass})`;


export type RenderFunction = typeof renderName | typeof renderModelAndName | typeof renderClassAndName;

const PersonList = () => {
  const ItemPersonList = ItemList<LoadPeopleAction, SelectPeopleListState, Person>;
  const PersonPagination = Pagination<SelectPeoplePagination>;

  return (
    <ErrorBoundary>
      <ItemPersonList
        actionCreator={loadPeople}
        selector={selectPeopleListState}
        renderItem={renderName} />
      <PersonPagination selector={selectPeoplePagination} />
    </ErrorBoundary>
  )
}

const PlanetList = () => {
  const ItemPlanetList = ItemList<LoadPlanetsAction, SelectPlanetListState, Planet>;
  const PlanetPagination = Pagination<SelectPlanetPagination>;

  return (
    <ErrorBoundary>
      <ItemPlanetList
        actionCreator={loadPlanets}
        selector={selectPlanetListState}
        renderItem={renderName} />
      <PlanetPagination selector={selectPlanetPagination} />
    </ErrorBoundary>
  );
}

const StarshipList = () => {
  const ItemStarshipList = ItemList<LoadStarshipsAction, SelectStarshipListState, Starship>;
  const StarshipPagination = Pagination<SelectStarshipPagination>;
  
  return (
    <ErrorBoundary>
      <ItemStarshipList
        actionCreator={loadStarships}
        selector={selectStarshipListState}
        renderItem={renderModelAndName} />
      <StarshipPagination selector={selectStarshipPagination} />
    </ErrorBoundary>
  );
}

const VehicleList = () => {
  const ItemVehicleList = ItemList<LoadVehiclesAction, SelectVehicleListState, Vehicle>;
  const VehiclePagination = Pagination<SelectVehiclePagination>;

  return (
    <ErrorBoundary>
      <ItemVehicleList
        actionCreator={loadVehicles}
        selector={selectVehicleListState}
        renderItem={renderClassAndName} />
      <VehiclePagination selector={selectVehiclePagination} />
    </ErrorBoundary>
  )
}

export {
  PersonList,
  PlanetList,
  StarshipList,
  VehicleList,
}
