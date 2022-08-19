import axios from 'axios';

const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const ADD_BOOK_SUCCESS = 'bookstore/books/ADD_BOOK_SUCCESS';
const FETCH_BOOKS_SUCCESS = 'bookstore/books/FETCH_BOOKS_SUCCESS';

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return { books: state.books.filter((book) => book.id !== action.payload) };
    case FETCH_BOOKS_SUCCESS:
      return { ...state, books: [...state.books, ...action.payload] };
    default:
      return state;
  }
};

export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

const addBookSucces = (book) => ({
  type: ADD_BOOK_SUCCESS,
  payload: book,
});

const fetchBooksSucces = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const removeBooks = (id) => (dispatch) => {
  axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G48bYX7Khi592iUfZtCg/books/${id}`)
    .then(() => {
      dispatch(removeBook(id));
    })
    .catch((error) => error);
};

export const addBook = (bookItem) => (dispatch) => {
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G48bYX7Khi592iUfZtCg/books', bookItem)
    .then(() => {
      delete Object.assign(bookItem, { id: bookItem.item_id }).item_id;
      dispatch(addBookSucces(bookItem));
    })
    .catch((error) => error);
};

export const fetchBooks = () => (dispatch) => {
  axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G48bYX7Khi592iUfZtCg/books')
    .then((response) => {
      const books = response.data;
      const res = [];
      Object.keys(books).forEach((key) => {
        res.push({
          id: key,
          title: books[key][0].title,
          author: books[key][0].author,
        });
      });
      dispatch(fetchBooksSucces(res));
    })
    .catch((error) => error);
};
export default bookReducer;
