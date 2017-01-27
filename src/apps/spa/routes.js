import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';

import App from 'ui/spa/app/containers/App';
import DemoIndex from 'ui/demo/containers/Index';
import DemoAbout from 'ui/demo/containers/About';

export default function routes() {
  return (
    <Route
      path="/"
      component={App}
    >
      <IndexRoute
        component={DemoIndex}
      />
      <Route
        component={DemoAbout}
        path="/about"
      />
      <Redirect
        from="*"
        to="/"
      />
    </Route>
  );
}
