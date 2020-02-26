import { ActionTypes } from './actions';

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
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
    case ActionTypes.Substract:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case ActionTypes.StoreResult:
      return {
        ...state,
        results: [...state.results, { id: new Date(), value: state.counter }]
      };
    case ActionTypes.DeleteResult:
      const updatedResults = [...state.results].filter(
        result => result.id !== action.payload
      );

      return {
        ...state,
        results: updatedResults
      };

    default:
      return state;
  }
};

export default reducer;
