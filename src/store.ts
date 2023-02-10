import {configureStore} from '@reduxjs/toolkit';

import swapiService from 'services/swapi-service';
import planetReducer from 'futures/planets/planetSlice';

export const store = configureStore({
  reducer: {
    planets: planetReducer,
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
export type AppDispatch = typeof store.dispatch;