import {connect} from 'react-redux';
import {removeResult} from '../actions';
import Results from './results';

const mapStateToProps = (state) => ({
  results: state.results
});

const mapDispatchToProps = dispatch => ({
  removeResult: id => dispatch(removeResult(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
