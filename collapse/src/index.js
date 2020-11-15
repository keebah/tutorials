import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var BOOKS = {
  ulysses: {
    slug: 'ulysses',
    title: 'Ulysses',
    body: 'YES BECAUSE HE NEVER DID...'
  },
  seizeTheDay: {
    slug: 'seizeTheDay',
    title: 'Seize the Day',
    body: 'Seize the Day, first published in 1956...'
  }
};

function CollapsibleBlock(props) {
  return (
    <div className=
      {props.toggleState ? 'open' :
        'closed'}>
      <h3 onClick={() => props.toggleHandler(props.book.slug)}>{props.book.title} {props.toggleState ? '' : '[...]'}</h3>
      <p>{props.book.body}</p>
      
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ulysses: true,
      seizeTheDay: false,
    }
  }

  toggleAll() {
    this.setState(
      {
        ulysses: !this.state.ulysses,
        seizeTheDay: !this.state.seizeTheDay,
      }
    )
  }

  toggleHandler(thisBook) {
    var newState = {};
    newState[thisBook.slug] = !this.state[thisBook.slug];
    this.setState(newState)
  }

  toggableBooks(data) {
    var that = this;
    return Object.keys(data).map(function (el) {
      var slug = data[el].slug;
      return (
        <CollapsibleBlock key={slug} book={that.props.books[slug]}
          toggleHandler={() => that.toggleHandler(that.props.books[slug])}
          toggleState={that.state[slug]} />
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Toggable content</h1>
        <button onClick={() => this.toggleAll()}>ToggleAll</button>
        <div>
          {this.toggableBooks(this.props.books)}
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App books={BOOKS} />,
  document.getElementById('root')
);