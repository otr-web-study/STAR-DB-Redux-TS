import useRandomPlanet from 'components/hooks/uesRandomPlanet';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import { Record, ItemView} from "../item-details";

import './random-planet.css';


const RandomPlanet = () => {

  const [planet, image, status, onImageError] = useRandomPlanet();

  const spinner = status === 'loading' && <Spinner />
  const content = status === 'received' && planet && (
    <ItemView item={planet} image={image as string} onImageError={onImageError}>
      <Record item={planet} field='population' label='Population' />
      <Record item={planet} field='rotationPeriod' label='Rotation Period' />
      <Record item={planet} field='diameter' label='Diameter' />
    </ItemView>
  );
  const errorContent = status === 'rejected' && <ErrorIndicator />

  return (
    <div className="random-planet jumbotron rounded">
      {spinner}
      {content}
      {errorContent}
    </div>
  );
}


export default RandomPlanet;