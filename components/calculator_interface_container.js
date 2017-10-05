import {connect} from 'react-redux';
import {receiveResult} from '../actions';
import CalculatorInterface from './calculator_interface';

const mapDispatchToProps = dispatch => ({
  receiveResult: (result, id) => dispatch(receiveResult(result, id))
});

export default connect(
  undefined,
  mapDispatchToProps
)(CalculatorInterface);
