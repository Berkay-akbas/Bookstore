import React from 'react';

const BookItem = (bookProps) => {
  const { book } = bookProps;
  // eslint-disable-next-line
  const deletes = bookProps.deleteBookProps;
  return (
    <li className="bookItem">
      <div className="bookInfo">
        <div className="bookCategory">Fiction</div>
        <div className="bookTitle">{book.title}</div>
        <div className="bookAuthor">{book.author}</div>
        <div className="buttons">
          <button type="button" className="comments button">Comments</button>
          <div className="line-1" />
          <button className="remove button" type="button" onClick={() => deletes(book.id)}>Remove</button>
          <div className="line-1" />
          <button type="button" className="edit button">Edit</button>
        </div>
      </div>
      <div className="progchapContainer">
        <div className="progressInfo">
          <div className="progressCircle" />
          <div className="percentageContainer">
            <div className="percentage">0%</div>
            <div className="completed">Completed</div>
          </div>
        </div>
        <div className="line-2" />
        <div className="chapterContainer">
          <div className="currentChapter">CURRENT CHAPTER</div>
          <div className="chapter">Chapter 1</div>
          <button className="progressButton" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
};

export default BookItem;
