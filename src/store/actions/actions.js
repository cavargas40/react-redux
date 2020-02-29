export const ActionTypes = {
  Increment: 'INCREMENT',
  Decrement: 'DECREMENT',
  Add: 'ADD',
  Subtract: 'SUBTRACT',
  StoreResult: 'STORE_RESULT',
  DeleteResult: 'DELETE_RESULT'
};

export const increment = () => {
  return {
    type: ActionTypes.Increment
  };
};

export const decrement = () => {
  return {
    type: ActionTypes.Decrement
  };
};

export const add = payload => {
  return {
    type: ActionTypes.Add,
    payload
  };
};

export const subtract = payload => {
  return {
    type: ActionTypes.Subtract,
    payload
  };
};

export const saveResult = payload => {
  return {
    type: ActionTypes.StoreResult,
    payload
  };
};

export const storeResult = payload => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(payload));
    }, 2000);
  };
};

export const deleteResult = payload => {
  return {
    type: ActionTypes.StoreResult,
    payload
  };
};
