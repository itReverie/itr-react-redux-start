import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import App from './App';
import Docs from './docs/Docs';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/documentation" component={Docs} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
