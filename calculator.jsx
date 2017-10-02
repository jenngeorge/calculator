import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import App from './components/app';

import { receiveResult, removeResult} from './actions'; //testing

document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();

  //testing
  window.store = store;
  window.receiveResult = receiveResult;
  window.removeResult = removeResult;

  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
});
