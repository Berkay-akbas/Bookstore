import React from 'react';
import BookList from './BookList';
import InputBook from './InputBook';
import './BookContainer.css';

class BookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          title: 'Book number one',
          author: 'author one',
        },
        {
          id: 2,
          title: 'Book number two',
          author: 'author two',
        },
        {
          id: 3,
          title: 'Book number three',
          author: 'author three',
        },
      ],
    };
  }

  delBook = (id) => {
    // eslint-disable-next-line
    console.log('deleted', id);
  };

  render() {
    const { books } = this.state; // destructuring
    return (
      <div>
        <BookList books={books} deleteBookProps={this.delBook} />
        <InputBook />
      </div>
    );
  }
}
export default BookContainer;
