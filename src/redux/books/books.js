import React from 'react';

const BooksPage = () => (
  <>
    <div className="books-container d-flex">
      <h2>Book List</h2>
      <button type="button">Remove</button>
    </div>
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" name="addBooks" placeholder="Book Title" />
      <button type="button">Add Book</button>
    </form>
  </>
);

export default BooksPage;
