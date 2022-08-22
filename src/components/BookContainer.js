import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './BookList';
import './BookContainer.css';
import { removeBooks, addBook, fetchBooks } from '../redux/books/books';

const selectBook = (state) => state.books;

const BookContainer = () => {
  const books = useSelector(selectBook);

  const dispatch = useDispatch();

  const delBook = (id) => {
    dispatch(removeBooks(id));
  };

  useEffect(() => {
    if (books.books.length === 0) {
      dispatch(fetchBooks());
    }
  }, []);

  const addsBook = (bookItem) => {
    dispatch(addBook(bookItem));
  };

  return (
    <div className="bookList">
      <BookList books={books.books} deleteBookProps={delBook} addBookProps={addsBook} />
    </div>
  );
};
export default BookContainer;
