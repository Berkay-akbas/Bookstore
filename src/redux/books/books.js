const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = {
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

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return { books: state.books.filter((book) => book.id !== action.payload) };
    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

export default bookReducer;
