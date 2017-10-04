import {connect} from 'react-redux';
import {receiveResult} from '../actions';
import CalculatorInterface from './calculator_interface';

const mapDispatchToProps = dispatch => ({
  receiveResult: result => dispatch(receiveResult(result))
});

export default connect(
  undefined,
  mapDispatchToProps
)(CalculatorInterface);
