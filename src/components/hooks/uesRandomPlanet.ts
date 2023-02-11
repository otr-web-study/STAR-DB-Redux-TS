import { useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'redux-hooks';
import { useParams } from 'react-router-dom';

import { loadPlanets } from 'futures/planets/planet-actions';
import { selectPlanetById, selectStatus, selectPlanetIds } from 'futures/planets/planet-selectors';

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
  const ids = useAppSelector(selectPlanetIds) as string[];
  const [image, setImage] = useState<string>();
  const [id, setId] = useState(randomPlanetId(ids))
  const planet = useAppSelector((state) => selectPlanetById(state, id));
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
      dispatch(loadPlanets('1'));
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