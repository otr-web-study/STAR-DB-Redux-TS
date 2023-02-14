import { useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'redux-hooks';

import { loadRandomPlanets } from 'futures/random-planet/random-planet-actions';
import { 
  selectRandomPlanetById, selectRandomPlanetIds, selectStatus 
} from 'futures/random-planet/random-planet-selectors';
import imgNotFound from 'images/not_found.jpg';
import { Planet, Status } from 'types';

type RandomPlanetHook = [
  Planet | undefined,
  string | undefined,
  Status | undefined,
  () => void,
]

const randomPlanetId = (ids: string[]): string => {
  const totalPlanets = ids.length;
  return totalPlanets ?
    ids[Math.floor(Math.random() * totalPlanets)] :
    '';
};

const useRandomPlanet = (): RandomPlanetHook => {
  const ids = useAppSelector(selectRandomPlanetIds) as string[];
  const [image, setImage] = useState<string>();
  const [id, setId] = useState(randomPlanetId(ids))
  const planet = useAppSelector((state) => selectRandomPlanetById(state, id));
  const status = useAppSelector(selectStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (planet) {
      setImage(planet.image);
    }
  }, [planet])

  const updatePlanet = useCallback(() => {
    setId(randomPlanetId(ids));
  }, [ids]);

  useEffect(() => {
    if (!ids.length) {
      dispatch(loadRandomPlanets());
    } else {
      updatePlanet();
    }
  }, [ids, dispatch, updatePlanet]);

  useEffect(() => {
    const interval = setInterval(updatePlanet, 15000);

    return () => {
      clearInterval(interval);
    }
  }, [updatePlanet])

  const onImageError = () => {
    setImage(imgNotFound);
  }

  return [
    planet,
    image,
    status,
    onImageError,
  ]

};

export default useRandomPlanet;