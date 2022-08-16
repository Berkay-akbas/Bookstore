import React from 'react';
import BookItem from './BookItem';
import InputBook from './InputBook';

const BookList = (propBooks) => {
  const { books } = propBooks;
  // eslint-disable-next-line
  const deletes = propBooks.deleteBookProps;

  // eslint-disable-next-line
  const adds = propBooks.addBookProps;
  return (
    <>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} deleteBookProps={deletes} />
        ))}
      </ul>
      <InputBook addBookProps={adds} />
    </>
  );
};

export default BookList;
