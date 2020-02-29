import { ActionTypes } from "./actionTypes";

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