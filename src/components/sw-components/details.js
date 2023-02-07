import { useContext } from "react";
import { useParams } from "react-router-dom";

import ErrorBoundary from '../error-boundary';
import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiServiceContext } from "../../contexts";


const PersonDetails = (props) => {
  const { getPerson, getPersonImage } = useContext(SwapiServiceContext);

  return (
    <ErrorBoundary>
      <ItemDetails
        getData={getPerson}
        getImageUrl={getPersonImage}
        {...props}>
        <Record field='gender' label='Gender' />
        <Record field='birthYear' label='Birth Year' />
        <Record field='eyeColor' label='Eye Color' />
      </ItemDetails>
    </ErrorBoundary>
  );
};

const PlanetDetails = (props) => {
  const { getPlanet, getPlanetImage } = useContext(SwapiServiceContext);

  const { id: itemId } = useParams();

  return (
    <ErrorBoundary>
      <ItemDetails
        getData={getPlanet}
        getImageUrl={getPlanetImage}
        itemId={itemId}
        {...props}>
        <Record field='population' label='Population' />
        <Record field='rotationPeriod' label='Rotation Period' />
        <Record field='diameter' label='Diameter' />
      </ItemDetails>
    </ErrorBoundary>
  );
}

const StarshipDetails = (props) => {
  const { getStarship, getStarshipImage } = useContext(SwapiServiceContext);

  const { id: itemId } = useParams();
  
  return (
    <ErrorBoundary>
      <ItemDetails
        getData={getStarship}
        getImageUrl={getStarshipImage}
        itemId={itemId}
        {...props}>
        <Record field='model' label='Model' />
        <Record field='manufacturer' label='Manufacturer' />
        <Record field='crew' label='Crew' />
        <Record field='passengers' label='Passengers' />
        <Record field='costInCredits' label='Cost' />
      </ItemDetails>
    </ErrorBoundary>
  );
}

const VehicleDetails = (props) => {
  const { getVehicle, getVehicleImage } = useContext(SwapiServiceContext);

  const { id: itemId } = useParams();

  return (
    <ErrorBoundary>
      <ItemDetails
        getData={getVehicle}
        getImageUrl={getVehicleImage}
        itemId={itemId}
        {...props}>
        <Record field='model' label='Model' />
        <Record field='manufacturer' label='Manufacturer' />
        <Record field='length' label='Length' />
        <Record field='maxSpeed' label='Max Speed' />
        <Record field='passengers' label='Passengers' />
        <Record field='costInCredits' label='Cost' />
      </ItemDetails>
    </ErrorBoundary>
  );
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  VehicleDetails
}