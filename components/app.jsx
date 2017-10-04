import React from 'react';
import { Provider } from 'react-redux';
import CalculatorInterface from './calculator_interface_container';

const App = ({ store }) => (
  <Provider store={ store }>
    <CalculatorInterface />
  </Provider>
)

export default App;
