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
    const bookItem = {
      item_id: uuidv4(), title: book.title, author: book.author, category: 'no_cat',
    };
    adds(bookItem);
    setBook({ title: '', author: '' });
  };

  return (
    <form className="formSubmit" onSubmit={addBook}>
      <input type="text" placeholder="Book Title" onChange={bookInput} value={book.title} name="title" className="titleInput" />
      <input type="text" placeholder="Author" onChange={bookInput} value={book.author} name="author" className="authorInput" />
      <button className="addButton" type="submit">Add Book</button>
    </form>
  );
};

export default InputBook;
