import {configureStore} from '@reduxjs/toolkit';

import swapiService from 'services/swapi-service';
import planetReducer from 'futures/planets/planetSlice';
import peopleReducer from 'futures/people/peopleSlice';
import starshipReducer from 'futures/starships/starshipsSlice';
import vehicleReducer from 'futures/vehicles/vehiclesSlice';
import randomPlanetReducer from 'futures/random-planet/randomPlanetSlice';

export const store = configureStore({
  reducer: {
    planets: planetReducer,
    people: peopleReducer,
    starships: starshipReducer,
    vehicles: vehicleReducer,
    randomPlanet: randomPlanetReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        client: swapiService,
      },
    },
  serializableCheck: false,
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export type Selector = (state: RootState) => any