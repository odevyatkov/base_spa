import React, { Component } from 'react';
import {connect} from 'react-redux';

class About extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div>
        {'About'}
      </div>
    );
  }
}

function mapStateToProps() {
  return {
  };
}

function mergeProps(stateProps, dispatchProps, props) {
  return {
    ...stateProps,
    ...props
  };
}

export default connect(mapStateToProps, {
}, mergeProps)(About);
