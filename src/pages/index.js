import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Driver from './Driver';
import NotFound from './NotFound';

function Pages() {
  return (
    <Switch>
      <Route path="/drivers" component={Driver}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  );
}

export default Pages;
