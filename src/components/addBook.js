import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import styles from './scss/addBook.module.scss';

const AddBook = () => {
  const [genre, setGenre] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const addNewBook = () => {
    if (!title || !author || !genre) return;
    const newBook = {
      category: genre,
      title,
      author,
      id: uuidv4(),
    };

    dispatch(addBook(newBook));
    setGenre('');
    setTitle('');
    setAuthor('');
  };

  return (
    <section className={styles.AddSection}>
      <div className={styles.title}>
        <h2>ADD NEW BOOK</h2>
      </div>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Book title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <input
          type="text"
          placeholder="Book auther"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          required
        />
        <input list="category" placeholder="Catery" onChange={(e) => setGenre(e.target.value)} />
        <datalist id="category">
          <option hidden value=""> Category </option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy" selected disabled hidden style={{ color: '#c4c4c4' }}>Economy</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
        </datalist>
        <button type="button" value="ADD BOOK" onClick={addNewBook}>
          Add Book
        </button>
      </div>
    </section>
  );
};

export default AddBook;
