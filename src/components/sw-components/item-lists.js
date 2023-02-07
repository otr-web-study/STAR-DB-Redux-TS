import { useContext } from "react";

import ErrorBoundary from '../error-boundary';
import ItemList from "../item-list";
import { SwapiServiceContext } from "../../contexts";


const renderName = ({ name }) => name;
const renderModelAndName = ({ model, name}) => `${name} (${model})`;
const renderClassAndName = ({ vehicleClass, name}) => `${name} (${vehicleClass})`;

const PersonList = (props) => {
  const { getAllPeople } = useContext(SwapiServiceContext);

  return (
    <ErrorBoundary>
      <ItemList 
        renderItem={renderName}
        getData={getAllPeople}
        {...props} />
    </ErrorBoundary>
  )
}

const PlanetList = (props) => {
  const { getAllPlanets } = useContext(SwapiServiceContext);

  return (
    <ErrorBoundary>
      <ItemList
        renderItem={renderName}
        getData={getAllPlanets}
        {...props} />
    </ErrorBoundary>
  );
}

const StarshipList = (props) => {
  const { getAllStarships } = useContext(SwapiServiceContext);
  
  return (
    <ErrorBoundary>
      <ItemList
        renderItem={renderModelAndName}
        getData={getAllStarships}
        {...props} />
    </ErrorBoundary>
  );
}

const VehicleList = (props) => {
  const { getAllVehicles } = useContext(SwapiServiceContext);

  return (
    <ErrorBoundary>
      <ItemList
        renderItem={renderClassAndName}
        getData={getAllVehicles}
        {...props} />
    </ErrorBoundary>
  )
}

export {
  PersonList,
  PlanetList,
  StarshipList,
  VehicleList,
}