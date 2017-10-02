
export const RECEIVE_RESULT = 'RECEIVE_RESULT';
export const REMOVE_RESULT = 'REMOVE_RESULT';

export const receiveResult = (result) => ({
  type: RECEIVE_RESULT,
  result
})

export const removeResult = (id) => ({
  type: REMOVE_RESULT,
  id
})
