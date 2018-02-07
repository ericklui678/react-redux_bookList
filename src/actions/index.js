// action when book is selected
// you can't just call this function on an onClick event, must be connected
  // through redux

export function selectBook(book) {
  console.log('book has been selected ', book.title);
}
