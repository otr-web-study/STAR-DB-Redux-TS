import ErrorBoundary from '../error-boundary';
import ItemList from "../item-list";
import { loadPlanets, LoadPlanetsAction } from 'futures/planets/planet-actions';
import { selectAllPlanets, SelectAllPlanets } from 'futures/planets/planet-selectors';
import { Planet } from 'types';
import Pagination from 'components/pagination';

type RenderNameParams = { name: string };
type RenderModelAndNameParams = { model: string, name: string };
type RenderClassAndNameParams = { vehicleClass: string, name: string };

const renderName = ({ name }: RenderNameParams) => name;
const renderModelAndName = ({ model, name}: RenderModelAndNameParams) => `${name} (${model})`;
const renderClassAndName = ({ vehicleClass, name}: RenderClassAndNameParams) => `${name} (${vehicleClass})`;

 export type ItemListProps = {
  onItemSelected: (itemId: string) => void,
}

export type RenderFunction = typeof renderName;

const PersonList = (props: ItemListProps) => {

  return (
    <ErrorBoundary>
      {/* <ItemList 
        renderItem={renderName} 
        {...props} /> */}
    </ErrorBoundary>
  )
}

const PlanetList = (props: ItemListProps) => {
  const  ItemPlanetList = ItemList<LoadPlanetsAction, SelectAllPlanets, Planet>;

  return (
    <ErrorBoundary>
      <ItemPlanetList
        actionCreator={loadPlanets}
        selector={selectAllPlanets}
        renderItem={renderName}
        {...props} />
      <Pagination />
    </ErrorBoundary>
  );
}

const StarshipList = (props: ItemListProps) => {
  
  return (
    <ErrorBoundary>
      {/* <ItemList
        renderItem={renderModelAndName}
        {...props} /> */}
    </ErrorBoundary>
  );
}

const VehicleList = (props: ItemListProps) => {

  return (
    <ErrorBoundary>
      {/* <ItemList
        renderItem={renderClassAndName}
        {...props} /> */}
    </ErrorBoundary>
  )
}

export {
  PersonList,
  PlanetList,
  StarshipList,
  VehicleList,
}
