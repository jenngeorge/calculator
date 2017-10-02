
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {  RECEIVE_RESULT,
          REMOVE_RESULT,
          receiveResult,
          removeResult } from '../actions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('receiveResult', ()=> {
  test('creates an action object with the result', () => {
    const uniqueId = new Date().getTime();
    const result = {id: uniqueId,
                    val: 365,
                    note: "days in a year"}
    const expectedAction = {result, type: RECEIVE_RESULT}

    expect(receiveResult(result)).toEqual(expectedAction)
  })
})
