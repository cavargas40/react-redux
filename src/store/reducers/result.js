import { ActionTypes } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.StoreResult:
      return updateObject(state, {
        results: [...state.results, { id: new Date(), value: action.payload }]
      });
    case ActionTypes.DeleteResult:
      const updatedResults = [...state.results].filter(
        result => result.id !== action.payload
      );

      return updateObject(state, { results: updatedResults });
    default:
      return state;
  }
};

export default resultReducer;
