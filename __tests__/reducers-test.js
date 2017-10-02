import ResultReducer from '../reducers/result_reducer';
import {  RECEIVE_RESULT,
          REMOVE_RESULT } from '../actions';

describe('ResultReducer', ()=> {
  const state = {1: {val: 42, note: "The answer to everything"}};

  test('returns the old state in default case', () => {
    expect(ResultReducer(state, {type: {}})).toEqual(state);
  });

  test('adds a result to the state on type RECEIVE_RESULT', ()=> {
    const uniqueId = new Date().getTime();
    const id = uniqueId;
    const result = {val: 42, note: "The answer to everything"};
    const action = {id, result, type: RECEIVE_RESULT};
    const expectedState = {1: {val: 42,
                              note: "The answer to everything"},
                            [id]: result};

    expect(ResultReducer(state, action)).toEqual(expectedState);
  });

  test('removes a result from the state on type REMOVE_RESULT', ()=> {
    const action = {id: 1, type: REMOVE_RESULT};
    const expectedState = {};

    expect(ResultReducer(state, action)).toEqual(expectedState);
  });
});
