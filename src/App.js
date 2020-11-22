import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Template from './template';
import routes from './routes';

import './app.css'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => 
          <Route path={route.path} render={props => <Template {...props} page={route.page} />} />
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
