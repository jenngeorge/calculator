
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {  RECEIVE_RESULT,
          REMOVE_RESULT,
          receiveResult,
          removeResult } from '../actions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('receiveResult', () => {
  const uniqueId = new Date().getTime();
  const id = uniqueId;
  const result = {val: 365,
                  note: "days in a year"};
  const expectedAction = {id, result, type: RECEIVE_RESULT};

  test('creates an action object with the result', () => {
    expect(receiveResult(result, id)).toEqual(expectedAction);
  });

  const store = mockStore({ results: {} });

  test('dispatches RECEIVE_RESULT', () => {
    store.dispatch(receiveResult(result, id))
    expect(store.getActions()[0]).toEqual(expectedAction);
  });
});

describe('removeResult', ()=> {
  const uniqueId = new Date().getTime();
  const id = uniqueId;
  const expectedAction = {id, type: REMOVE_RESULT};

  test('creates an action object with the given id', () => {
    expect(removeResult(id)).toEqual(expectedAction)
  })

  const store = mockStore({ results: {} });

  test('dispatches REMOVE_RESULT', () => {
    store.dispatch(removeResult(id))
    expect(store.getActions()[0]).toEqual(expectedAction);
  })
})
