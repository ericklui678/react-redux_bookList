import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// this file keeps track of all of applications state
const rootReducer = combineReducers({
  books: BooksReducer, // this reducer gets state of books
  activeBook: ActiveBook
});

export default rootReducer;
