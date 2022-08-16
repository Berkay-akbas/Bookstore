import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import './BookContainer.css';
import { removeBook } from '../redux/books/books';
import store from '../redux/configureStore';

const selectBook = (state) => state.books;

const BookContainer = () => {
  const books = useSelector(selectBook);

  const delBook = (id) => {
    store.dispatch(removeBook(id));
  };

  const addsBook = () => {
  };

  return (
    <div>
      <BookList books={books.books} deleteBookProps={delBook} addBookProps={addsBook} />
    </div>
  );
};
export default BookContainer;
