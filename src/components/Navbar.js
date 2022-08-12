import React from 'react';
import { Link } from 'react-router-dom';
// import BookContainer from './BookContainer';
// import Categories from './Categories';

const Navbar = () => (
  <div className="navbar">
    <h1> Bookstore CMS</h1>
    <ul className="holder">
      <li>
        <Link to="/" className="link">Home</Link>
      </li>
      <li>
        <Link to="/categories" className="link">Categories</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
