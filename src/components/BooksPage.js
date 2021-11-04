import React from 'react';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import Book from './Book';
import AddBook from './addBook';

function BooksPage() {
  const books = useSelector((state) => state.booksReducer);

  if (!books) {
    return <div>no Books</div>;
  }

  return (
    <div style={{ background: '#f5f6fa' }}>
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            genre={book.genre} // guestion2
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
