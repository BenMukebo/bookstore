import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [genre, setGenre] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const addNewBook = () => {
    if (!title || !author || !genre) return;
    const newBook = {
      genre,
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
    <div style={{ marginBottom: '90px' }}>
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
      <select name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option hidden value=""> Category </option>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
      </select>
      <button type="button" value="ADD BOOK" onClick={addNewBook}>
        Add Book
      </button>
    </div>
  );
};

export default AddBook;
