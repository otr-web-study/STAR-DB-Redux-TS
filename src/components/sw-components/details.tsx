import ErrorBoundary from '../error-boundary';
import ItemDetails, { Record } from "../item-details/item-details";
import { SelectPlanetById, selectPlanetById } from 'futures/planets/planet-selectors';
import { Planet } from 'types';


const PersonDetails = () => {

  return (
    <ErrorBoundary>
      {/* <ItemDetails>
        <Record field='gender' label='Gender' />
        <Record field='birthYear' label='Birth Year' />
        <Record field='eyeColor' label='Eye Color' />
      </ItemDetails> */}
    </ErrorBoundary>
  );
};

const PlanetDetails = () => {
  const PlanetDetails = ItemDetails<Planet, SelectPlanetById>;

  return (
    <ErrorBoundary>
      <PlanetDetails
        selector={selectPlanetById}>
        <Record field='population' label='Population' />
        <Record field='rotationPeriod' label='Rotation Period' />
        <Record field='diameter' label='Diameter' />
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