import { 
  useState, useEffect, useCallback, useContext
} from 'react';

import { SwapiServiceContext } from "../../contexts";
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import { Record, ItemView} from "../item-details";

import './random-planet.css';
import imgNotFound from '../../images/not_found.jpg';

const statuses = {
  loading: 'loading',
  success: 'success',
  error: 'error',
}

const RandomPlanet = () => {
  const [status, setStatus] = useState(statuses.loading);
  const [planet, setPlanet] = useState();
  const [image, setImage] = useState();

  const { getPlanet, getPlanetImage } = useContext(SwapiServiceContext);

  const updatePlanet = useCallback(() => {
    const id  = Math.floor(Math.random() * 25) + 3;

    getPlanet(id)
      .then(onPlanetLoaded)
      .catch(onError);
  }, []);

  useEffect(() => {
    updatePlanet();

    const interval = setInterval(updatePlanet, 15000);

    return () => {
      clearInterval(interval);
    }
  }, [updatePlanet]);

  const onPlanetLoaded = (planet) => {
    setPlanet(planet);
    setStatus(statuses.success);
    setImage(getPlanetImage(planet))
  }

  const onError = (err) => {
    setStatus(statuses.error)
  }

  const onImageError = () => {
    setImage(imgNotFound);
  }

  const spinner = status === statuses.loading && <Spinner />
  const content = status === statuses.success && (
    <ItemView item={planet} image={image} onImageError={onImageError}>
      <Record item={planet} field='population' label='Population' />
      <Record item={planet} field='rotationPeriod' label='Rotation Period' />
      <Record item={planet} field='diameter' label='Diameter' />
    </ItemView>
  );
  const errorContent = status === statuses.error && <ErrorIndicator />

  return (
    <div className="random-planet jumbotron rounded">
      {spinner}
      {content}
      {errorContent}
    </div>
  );
}


export default RandomPlanet;