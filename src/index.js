import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore.dev';
import {Provider} from 'react-redux';
import './index.css';
import '../node_modules/highlight.js/styles/atom-one-dark.css';
import Routes from './routes';
import {loadConcepts} from './actions/conceptActions';

const store=configureStore();

//Dispatch Actions
store.dispatch(loadConcepts());

ReactDOM.render(
  (<Provider store={store}>
    <Routes />
  </Provider>),
  document.getElementById('root'));
