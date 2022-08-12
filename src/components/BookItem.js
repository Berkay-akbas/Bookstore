import React from 'react';

const BookItem = (bookProps) => {
  const { book } = bookProps;
  // eslint-disable-next-line
  const deletes = bookProps.deleteBookProps;
  return (
    <li>
      title:
      {book.title}
      , author:
      {book.author}
      <button type="button" onClick={() => deletes(book.id)}>Remove</button>
    </li>
  );
};

export default BookItem;
