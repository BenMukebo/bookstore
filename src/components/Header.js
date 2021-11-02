import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="header-nav">
      <div className="header-title">
        <h1>Bookstore CMS</h1>
      </div>
      <ul className="items flex-center">
        <li className="nav-item">
          <Link className="nav-item-link active" to="/">
            BOOKS
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-item-link" to="/calculator">
            CATEGORIES
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
