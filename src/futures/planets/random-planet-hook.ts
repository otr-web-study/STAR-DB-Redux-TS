import { useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'redux-hooks';

import { loadPlanets } from 'futures/planets/planet-actions';
import { selectPlanetById, selectStatus, selectTotalPlanets } from 'futures/planets/planet-selectors';

import imgNotFound from 'images/not_found.jpg';
import { Planet, Status } from 'types';

type RandomPlanetHook = [
  Planet | undefined,
  string | undefined,
  Status | undefined,
  () => void,
]

const randomPlanetId = (totalPlanets: number): number => (Math.floor(Math.random() * totalPlanets) + 1);

const useRandomPlanet = (): RandomPlanetHook => {
  const totalPlanets = useAppSelector(selectTotalPlanets);
  const [image, setImage] = useState<string>();
  const [id, setId] = useState(randomPlanetId(totalPlanets))
  const planet = useAppSelector((state) => selectPlanetById(state, id));
  const status = useAppSelector(selectStatus);


  const dispatch = useAppDispatch();

  useEffect(() => {
    if (planet) {
      setImage(planet.image);
    }
  }, [planet])

  const updatePlanet = useCallback(() => {
    setId(randomPlanetId(totalPlanets));
  }, [totalPlanets]);

  useEffect(() => {
    if (!planet)
      dispatch(loadPlanets());
  }, [planet, dispatch]);

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