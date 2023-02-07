import { Routes, Route } from 'react-router-dom';

import { SwapiServiceContext } from '../../contexts'
import SwapiService from '../../services/swapi-service';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {
  PeoplePage,
  PlanetPage,
  StarshipPage,
  WelcomePage,
  VehiclesPage,
  NotFound,
} from '../pages';
import ErrorBoundary from '../error-boundary/error-boundary';

import './app.css';

const swapiservice = new SwapiService();


const App = () => {

  return (
    <div>
      <ErrorBoundary>
        <Header />
        <SwapiServiceContext.Provider value={swapiservice}>
          <RandomPlanet />
          <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/people' element={<PeoplePage />} />
            <Route path='/starships'>
              <Route path=':id' element={<StarshipPage />} />
              <Route path='' element={<StarshipPage />} />
            </Route>
            <Route path='/planets'>
              <Route path=':id' element={<PlanetPage />} />
              <Route path='' element={<PlanetPage />} />
            </Route>
            <Route path='vehicles'>
              <Route path=':id' element={<VehiclesPage />} />
              <Route path='' element={<VehiclesPage />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </SwapiServiceContext.Provider>
      </ErrorBoundary>
    </div>
  );
};

export default App;