import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <div className="App-header">
          <h2>{'Welcome to React'}</h2>
        </div>
        <p className="App-intro">
          {'some text'}
          <Link
            to='/'
          >{'index'}</Link>
          {'or'}
          <Link
            to='/about'
          >{'about'}</Link>
        </p>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
