import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './addBook';

function BooksPage() {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div style={{
      backgroundColor: '#fafafa;',
      padding: '0 5%',
    }}
    >
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            genre={book.category}
            title={book.title}
            author={book.author}
            completed={book.completed}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
}

export default BooksPage;
