import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to='/'>
          Star DB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to='/people/1'>People</Link>
        </li>
        <li>
          <Link to='/planets/1'>Planets</Link>
        </li>
        <li>
          <Link to='/starships/1'>Starships</Link>
        </li>
        <li>
          <Link to='/vehicles/1'>Vehicles</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;