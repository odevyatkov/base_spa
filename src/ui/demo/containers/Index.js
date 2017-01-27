import React, { Component } from 'react';
import {connect} from 'react-redux';

//import {
//  STATUS_SUCCESS,
//  STATUS_ERROR,
//  STATUS_PENDING
//} from 'common/constants/ComponentConstants';

//import * as Selectors from 'modules/demo/selectors/index';

//import {
//  formInit,
//  formClose,
//  formChange,
//  formSubmit
//} from 'modules/sh/zohoExport/creators/index';
//import {
//  closeModal
//} from 'apps/sh/actions/modal/Actions';

class Index extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div>
        {'index'}
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
}, mergeProps)(Index);
