import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLoading3Quarters as Loading } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  id, title, author, genre, completed,
}) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(id));
  };
  return (
    <section style={{
      width: '100%',
      height: '17rem',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      background: '#ffff',
      margin: '0.5rem',
    }}
    >
      <div>
        <span style={{ color: '#121212' }}>{genre}</span>
        <h2>{title}</h2>
        <p>{author}</p>
        <ul>
          <li><button type="button">Comments</button></li>
          <li><button type="button" onClick={handleRemove}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div>
        <Loading />
        <div>
          <span>
            {completed}
            %
          </span>
          <span>completed</span>
        </div>
      </div>
      <div>
        <button type="button">update progress</button>
      </div>
    </section>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
};

export default Book;
