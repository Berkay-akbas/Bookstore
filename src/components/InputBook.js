import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const InputBook = (bookProps) => {
  // eslint-disable-next-line
  const adds = bookProps.addBookProps;

  const [book, setBook] = useState({ title: '', author: '' });

  const bookInput = (e) => {
    e.preventDefault();
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const addBook = (e) => {
    e.preventDefault();
    const bookItem = { id: uuidv4(), title: book.title, author: book.author };
    adds(bookItem);
    setBook({ title: '', author: '' });
  };

  return (
    <form onSubmit={addBook}>
      <input type="text" placeholder="Book Title" onChange={bookInput} value={book.title} name="title" />
      <input type="text" placeholder="Author" onChange={bookInput} value={book.author} name="author" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default InputBook;
