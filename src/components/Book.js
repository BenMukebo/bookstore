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
    <section>
      <div>
        <span>{genre}</span>
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
