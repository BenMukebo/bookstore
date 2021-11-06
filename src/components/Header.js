import React from 'react';
import { ImUser } from 'react-icons/im';
import { Link } from 'react-router-dom';
import styles from './scss/Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <nav className={styles.nav}>
      <h1>Bookstore</h1>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link className={styles.itemLink} to="/">BOOKS</Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.itemLink} to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
    <div className={styles.icon}>
      <ImUser className={styles.user} />
    </div>
  </div>
);

export default Header;
