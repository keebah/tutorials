import React from 'react';
import './App.css';
import './index.css';

var CollapsibleBlock = React.createClass({
  render: function () {
    return (
      <div className=
        {this.props.toggleState ? 'open' :
          'closed'}>
        <h3 onClick=
          {this.props
            .toggleHandler
            .bind(null, this.props.book.slug)}>
          {this.props.book.title}
        </h3>
        <p>{this.props.book.body}</p>
      </div>
    );
  }
});

var App = React.createClass({

  getInitialState: function () {
    return {
      ulysses: true,
      seizeTheDay: false
    }
  },

  toggleAll: function () {
    this.setState({ ulysses: !this.state.ulysses, seizeTheDay: !this.state.seizeTheDay });
  },

  toggleHandler: function (slug) {
    var newState = {};
    newState[slug] = !this.state[slug];
    this.setState(newState);
  },

  toggableBooks: function (data) {
    var that = this;
    return Object.keys(data).map(function (el) {
      var slug = data[el].slug;
      return (
        <CollapsibleBlock key={slug} book={that.props.books[slug]}
          toggleHandler={that.toggleHandler}
          toggleState={that.state[slug]} />
      )
    });
  },

  render: function () {
    return (
      <div>
        <h1>Toggable Content</h1>
        <button onClick={this.toggleAll}>Toggle all</button> {/* (4) */}
        <div>
          {this.toggableBooks(this.props.books)}
        </div>
      </div>
    )
  }
});

export default App;
