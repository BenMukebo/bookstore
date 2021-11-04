import React from 'react';
import { ImUser } from 'react-icons/im';
import { Link } from 'react-router-dom';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const Header = () => (
  <div style={headerStyle}>
    <nav style={headerStyle}>
      <h1>Bookstore</h1>
      <ul style={headerStyle}>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
    <ImUser />
  </div>
);

export default Header;
