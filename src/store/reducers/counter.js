import { ActionTypes } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.Increment:
      return updateObject(state, { counter: state.counter + 1 });
    case ActionTypes.Decrement:
      return updateObject(state, { counter: state.counter - 1 });
    case ActionTypes.Add:
      return updateObject(state, { counter: state.counter + action.payload });
    case ActionTypes.Subtract:
      return updateObject(state, { counter: state.counter - action.payload });
    default:
      return state;
  }
};

export default counterReducer;
