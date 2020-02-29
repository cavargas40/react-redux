import { ActionTypes } from '../actions/actions';

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.Increment:
      return {
        ...state,
        counter: state.counter + 1
      };
    case ActionTypes.Decrement:
      return {
        ...state,
        counter: state.counter - 1
      };
    case ActionTypes.Add:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case ActionTypes.Subtract:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    default:
      return state;
  }
};

export default counterReducer;
