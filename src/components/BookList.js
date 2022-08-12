import React from 'react';
import BookItem from './BookItem';

const BookList = (propBooks) => {
  const { books } = propBooks;
  // eslint-disable-next-line
  const deletes = propBooks.deleteBookProps;
  return (
    <ul>
      {books.map((book) => (
        <BookItem key={book.id} book={book} deleteBookProps={deletes} />
      ))}
    </ul>
  );
};

export default BookList;
