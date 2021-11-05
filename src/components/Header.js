import React from 'react';
import { ImUser } from 'react-icons/im';
import { Link } from 'react-router-dom';
import styles from './css/Header.module.scss';

// const headerStyle = {
//   display: 'flex',
//   justifyContent: 'space-around',
//   alignItems: 'center',
// };

const Header = () => (
  <div className={styles.header}>
    <nav className={styles.nav}>
      <h1>Bookstore</h1>
      <ul className={styles.items}>
        <li>
          <Link className={styles.itemLink} to="/">BOOKS</Link>
        </li>
        <li>
          <Link className={styles.itemLink} to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
    <div className={styles.icon}>
      <ImUser />
    </div>
  </div>
);

export default Header;
