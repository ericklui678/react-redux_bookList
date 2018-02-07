import React, { Component } from 'react';
import { connect } from 'react-redux';
// import selectBook action
import { selectBook } from '../actions/index';
 // make sure action flows through all reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>{book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

// function that will literally map state to props
function mapStateToProps(state) {
  // books key name is just a name that's mapped to props.books
  // state.books refers to books in rootReducer from ./reducers/index.js
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  // selectBook key name is mapped to props.selectBook
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote BookList from a component to a container
// it needs to know about this new dispatch method, selectBook
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
