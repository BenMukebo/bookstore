import React from 'react';
import AddNewBook from './addNewBook';

const BooksPage = () => (
  <>
    {/* <div className="books-container d-flex">
      <h2>Book List</h2>
      <button type="button">Remove</button>
    </div>
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" name="addBooks" placeholder="Book Title" />
      <button type="button">Add Book</button>
    </form> */}
    <AddNewBook />
  </>
);

export default BooksPage;
