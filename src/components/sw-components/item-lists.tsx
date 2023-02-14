import ErrorBoundary from '../error-boundary';
import ItemList from "../item-list";
import { loadPlanets } from 'futures/planets/planet-actions';
import { loadPeople } from 'futures/people/people-actions';
import { loadStarships } from 'futures/starships/starship-actions';
import { loadVehicles } from 'futures/vehicles/vehicle-actions';
import { 
  selectPlanetListState, 
  selectPlanetPagination, 
  SelectPlanetPagination 
} from 'futures/planets/planet-selectors';
import { 
  selectPeopleListState, 
  selectPeoplePagination, 
  SelectPeoplePagination 
} from 'futures/people/people-selectors';
import { 
  selectStarshipListState, 
  selectStarshipPagination, 
  SelectStarshipPagination 
} from 'futures/starships/starship-selector';
import { 
  selectVehicleListState, 
  selectVehiclePagination, 
  SelectVehiclePagination 
} from 'futures/vehicles/vehicle-selector';
import Pagination from 'components/pagination';
import { RenderName, RenderClassAndName, RenderModelAndName } from 'types';


const renderName: RenderName = ({ name }) => name;
const renderModelAndName: RenderModelAndName = ({ model, name}) => `${name} (${model})`;
const renderClassAndName: RenderClassAndName = ({ vehicleClass, name}) => `${name} (${vehicleClass})`;


const PersonList = () => {
  const PersonPagination = Pagination<SelectPeoplePagination>;

  return (
    <ErrorBoundary>
      <ItemList
        actionCreator={loadPeople}
        selector={selectPeopleListState}
        renderItem={renderName} />
      <PersonPagination selector={selectPeoplePagination} />
    </ErrorBoundary>
  )
}

const PlanetList = () => {
  const PlanetPagination = Pagination<SelectPlanetPagination>;

  return (
    <ErrorBoundary>
      <ItemList
        actionCreator={loadPlanets}
        selector={selectPlanetListState}
        renderItem={renderName} />
      <PlanetPagination selector={selectPlanetPagination} />
    </ErrorBoundary>
  );
}

const StarshipList = () => {
  const StarshipPagination = Pagination<SelectStarshipPagination>;
  
  return (
    <ErrorBoundary>
      <ItemList
        actionCreator={loadStarships}
        selector={selectStarshipListState}
        renderItem={renderModelAndName} />
      <StarshipPagination selector={selectStarshipPagination} />
    </ErrorBoundary>
  );
}

const VehicleList = () => {
  const VehiclePagination = Pagination<SelectVehiclePagination>;

  return (
    <ErrorBoundary>
      <ItemList
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
