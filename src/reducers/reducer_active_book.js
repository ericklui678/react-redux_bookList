// State argument is not application state,
// only the state that this reducer is responsible for
// state set to null for first time application runs and nothing is clicked
export default function(state = null, action) {
  // switch statement to check for action type
  // if don't care about any action, return same state
  switch (action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}
