// action when book is selected
// you can't just call this function on an onClick event, must be connected
  // through redux

export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  // actions have 2 values: type and payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
