import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './BookList';
import './BookContainer.css';
import { removeBook, addBook } from '../redux/books/books';

const selectBook = (state) => state.books;

const BookContainer = () => {
  const books = useSelector(selectBook);

  const dispatch = useDispatch();

  const delBook = (id) => {
    dispatch(removeBook(id));
  };

  const addsBook = (bookItem) => {
    dispatch(addBook(bookItem));
  };

  return (
    <div>
      <BookList books={books.books} deleteBookProps={delBook} addBookProps={addsBook} />
    </div>
  );
};
export default BookContainer;
