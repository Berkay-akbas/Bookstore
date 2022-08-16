import React from 'react';
// import { addBook } from '../redux/books/books';

const InputBook = (bookProps) => {
  // eslint-disable-next-line
  const adds = bookProps.addBookProps;
  // console.log(bookProps);
  return (
    <form>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Author" />
      <button type="button" onClick={() => adds({ book: { id: 4, title: 'asd', author: 'bl' } })}>Add Book</button>
    </form>
  );
};

export default InputBook;
