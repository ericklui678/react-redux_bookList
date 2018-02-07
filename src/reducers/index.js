import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// this file keeps track of all of applications state
const rootReducer = combineReducers({
  books: BooksReducer // this reducer gets state of books
});

export default rootReducer;
