import 'babel-polyfill';

// Stylesheet
import './assets/less/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import reducer from './reducers';
import routes from './routes';

const store = createStore(
  reducer
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes()}
    </Router>
  </Provider>,
  document.getElementById('root')
);
