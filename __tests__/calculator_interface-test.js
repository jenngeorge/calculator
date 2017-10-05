import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CalculatorInterface from '../components/calculator_interface';

configure({ adapter: new Adapter() });


describe('CalculatorInterface', () => {

  test('it should render 16 buttonLis', () => {
    const calculator = shallow(<CalculatorInterface />);
    expect(calculator.find('li.calc-button').length).toEqual(16);
  });

  test('it should update the current window value when a buttonLi is clicked',
  () => {
    const calculator = shallow(<CalculatorInterface />);
    calculator.find('li.calc-button').at(0).simulate('click');
    expect(calculator.find('.calculator-window').text()).toEqual('7');
  });

  test('it should clear the current window', () => {
    const calculator = shallow(<CalculatorInterface />);
    calculator.find('.calculator-buttons li').at(0).simulate('click');
    calculator.find('.clear-window').simulate('click');
    expect(calculator.find('.calculator-window').text()).toEqual("");
  });

  test('it should correctly evalute a string of numbers and operators', () => {
    const calculator = shallow(<CalculatorInterface />);
    calculator.find('.calculator-buttons li').at(0).simulate('click'); // 7
    calculator.find('.calculator-buttons li').at(15).simulate('click'); // *
    calculator.find('.calculator-buttons li').at(2).simulate('click'); // 9
    calculator.find('.calculator-buttons li').at(14).simulate('click'); // =
    expect(calculator.find('.calculator-window').text()).toEqual("63");
  });



});
