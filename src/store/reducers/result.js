import { ActionTypes } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.payload
  );
  return updateObject(state, { results: updatedArray });
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.StoreResult:
      return updateObject(state, { results: [...state.results, { id: new Date(), value: action.payload }] });
    case ActionTypes.DeleteResult:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default resultReducer;
