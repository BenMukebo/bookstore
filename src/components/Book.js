import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLoading3Quarters as Loading } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import styles from './scss/Book.module.scss';

const Book = ({
  id, title, genre, completed,
}) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(id));
  };
  return (
    <section className={styles.bookSection}>
      <div className={styles.article}>
        <span>{genre}</span>
        <h2>{title}</h2>
        {/* <p>{author}</p> */}
        <ul>
          <li className={styles.btn}><button type="button">Comments</button></li>
          <li className={styles.btn}><button type="button" onClick={handleRemove}>Remove</button></li>
          <li className={styles.btn}><button type="button">Edit</button></li>
        </ul>
      </div>
      <article>
        <div className={styles.pourcentage}>
          <Loading className={styles.loading} />
          <div>
            <span>
              {completed}
              %
            </span>
            <p>completed</p>
          </div>
        </div>
        <div className={styles.update}>
          <button type="button">update progress</button>
        </div>

      </article>
    </section>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  completed: PropTypes.number,
};
Book.defaultProps = {
  // author: '',
  completed: 30,
};

export default Book;
