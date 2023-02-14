import ErrorBoundary from '../error-boundary';
import ItemDetails, { Record } from "../item-details/item-details";
import { SelectPlanetById, selectPlanetById } from 'futures/planets/planet-selectors';
import { SelectPersonById, selectPersonById } from 'futures/people/people-selectors';
import { SelectStarshipById, selectStarshipById } from 'futures/starships/starship-selector';
import { selectVehicleById, SelectVehicleById } from 'futures/vehicles/vehicle-selector';
import { Person, Planet, Starship, Vehicle } from 'types';



const PersonDetails = () => {
  const PersonDetails = ItemDetails<Person, SelectPersonById>;
  const RecordPerson = Record<Person>;

  return (
    <ErrorBoundary>
      <PersonDetails
        selector={selectPersonById}>
        <RecordPerson field='gender' label='Gender' />
        <RecordPerson field='birthYear' label='Birth Year' />
        <RecordPerson field='eyeColor' label='Eye Color' />
      </PersonDetails>
    </ErrorBoundary>
  );
};

const PlanetDetails = () => {
  const PlanetDetails = ItemDetails<Planet, SelectPlanetById>;
  const RecordPlanet = Record<Planet>;

  return (
    <ErrorBoundary>
      <PlanetDetails
        selector={selectPlanetById}>
        <RecordPlanet field='population' label='Population' />
        <RecordPlanet field='rotationPeriod' label='Rotation Period' />
        <RecordPlanet field='diameter' label='Diameter' />
      </PlanetDetails>
    </ErrorBoundary>
  );
}

const StarshipDetails = () => {
  const StarshipDetail = ItemDetails<Starship, SelectStarshipById>;
  const RecordStarship = Record<Starship>;

  return (
    <ErrorBoundary>
      <StarshipDetail
        selector={selectStarshipById} >
        <RecordStarship field='model' label='Model' />
        <RecordStarship field='manufacturer' label='Manufacturer' />
        <RecordStarship field='crew' label='Crew' />
        <RecordStarship field='passengers' label='Passengers' />
        <RecordStarship field='costInCredits' label='Cost' />
      </StarshipDetail>
    </ErrorBoundary>
  );
}

const VehicleDetails = () => {
  const VehicleDetail = ItemDetails<Vehicle, SelectVehicleById>;
  const RecordVehicle = Record<Vehicle>;

  return (
    <ErrorBoundary>
      <VehicleDetail
        selector={selectVehicleById}>
        <RecordVehicle field='model' label='Model' />
        <RecordVehicle field='manufacturer' label='Manufacturer' />
        <RecordVehicle field='length' label='Length' />
        <RecordVehicle field='maxSpeed' label='Max Speed' />
        <RecordVehicle field='passengers' label='Passengers' />
        <RecordVehicle field='costInCredits' label='Cost' />
      </VehicleDetail>
    </ErrorBoundary>
  );
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  VehicleDetails
}