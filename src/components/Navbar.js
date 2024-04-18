import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faChartBar } from '@fortawesome/free-solid-svg-icons'; // Import icons
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li>
          <Link to="/profile" className="nav-link">
            <FontAwesomeIcon icon={faUser} /> Profiles
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="nav-link">
            <FontAwesomeIcon icon={faChartBar} /> Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
