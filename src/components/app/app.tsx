import { Routes, Route } from 'react-router-dom';


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


const App = () => {

  return (
    <div>
      <ErrorBoundary>
        <Header />
        <RandomPlanet />
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/people'>
            <Route path=':page?'>
              <Route path=':id' element={<PeoplePage />} />
              <Route path='' element={<PeoplePage />} />
            </Route>
          </Route>
          <Route path='/starships'>
            <Route path=':page?'>
              <Route path=':id' element={<StarshipPage />} />
              <Route path='' element={<StarshipPage />} />
            </Route>
          </Route>
          <Route path='/planets'>
            <Route path=':page?'>
              <Route path=':id' element={<PlanetPage />} />
              <Route path='' element={<PlanetPage />} />
            </Route>
          </Route>
          <Route path='vehicles'>
            <Route path=':page?'>
              <Route path=':id' element={<VehiclesPage />} />
              <Route path='' element={<VehiclesPage />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;