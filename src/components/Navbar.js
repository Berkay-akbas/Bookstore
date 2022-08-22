import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <div className="navbar">
    <div className="navlinks">
      <h1> Bookstore CMS</h1>
      <ul className="holder">
        <li>
          <Link to="/" className="link">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories" className="link">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <FontAwesomeIcon icon={faUser} />
  </div>
);

export default Navbar;
