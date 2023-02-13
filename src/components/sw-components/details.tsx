import ErrorBoundary from '../error-boundary';
import ItemDetails, { Record } from "../item-details/item-details";
import { SelectPlanetById, selectPlanetById } from 'futures/planets/planet-selectors';
import { SelectPersonById, selectPersonById } from 'futures/people/people-selectors';
import { Person, Planet } from 'types';


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
  return (
    <ErrorBoundary>
      {/* <ItemDetails>
        <Record field='model' label='Model' />
        <Record field='manufacturer' label='Manufacturer' />
        <Record field='crew' label='Crew' />
        <Record field='passengers' label='Passengers' />
        <Record field='costInCredits' label='Cost' />
      </ItemDetails> */}
    </ErrorBoundary>
  );
}

const VehicleDetails = () => {
  return (
    <ErrorBoundary>
      {/* <ItemDetails>
        <Record field='model' label='Model' />
        <Record field='manufacturer' label='Manufacturer' />
        <Record field='length' label='Length' />
        <Record field='maxSpeed' label='Max Speed' />
        <Record field='passengers' label='Passengers' />
        <Record field='costInCredits' label='Cost' />
      </ItemDetails> */}
    </ErrorBoundary>
  );
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  VehicleDetails
}