export const RECEIVE_RESULT = 'RECEIVE_RESULT';
export const REMOVE_RESULT = 'REMOVE_RESULT';

export const receiveResult = (result, id) => ({
  type: RECEIVE_RESULT,
  result,
  id
})

export const removeResult = (id) => ({
  type: REMOVE_RESULT,
  id
})
