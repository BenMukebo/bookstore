import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './addBook';

function BooksPage() {
  const books = useSelector((state) => state.booksReducer);
  // console.log(books);

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

      {/* <div className="books-container d-flex">
        <h2>Book List</h2>
        <button type="button">Remove</button>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="addBooks" placeholder="Book Title" />
        <button type="button">Add Book</button>
      </form> */}
    </div>
  );
}

export default BooksPage;
