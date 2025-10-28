import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>

        {/* Dropdown Dashboard */}
        <li className="dropdown">
          <span>Dashboard ▼</span>
          <ul className="dropdown-content">
            <li><Link to="/dashboard">Main</Link></li>

            <li><Link to="/users">Users</Link></li>
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/subjects">Subjects</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
