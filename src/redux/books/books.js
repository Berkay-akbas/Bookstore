const ADD = 'ADD_BOOK';
const REMOVE = 'REMOVE_BOOK';

// function nextBookId(books) {
//   const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1)
//   return maxId + 1
// }

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
    case ADD:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE:
      return { books: state.books.filter((book) => book.id !== action.payload) };
    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD, payload: book });

export const removeBook = (id) => ({ type: REMOVE, payload: id });

export default bookReducer;
