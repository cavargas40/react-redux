import { ActionTypes } from "./actionTypes";

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
  