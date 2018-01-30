import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import Docs from './docs/Docs';
import TableContainer from './components/TableContainer/TableContainer';
//import App from './App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TableContainer} />
      <Route path="/documentation" component={Docs} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
