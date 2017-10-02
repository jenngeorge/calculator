import { RECEIVE_RESULT, REMOVE_RESULT} from '../actions';
import { merge, omit } from 'lodash';

const ResultReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_RESULT:
      newState[action.id] = action.result;
      return newState;
    case REMOVE_RESULT:
      newState = omit(newState, action.id)
      return newState;
    default:
      return state;
  }
}

export default ResultReducer;
