import { ActionTypes } from "./actionTypes";

export const saveResult = payload => {
    return {
      type: ActionTypes.StoreResult,
      payload
    };
  };
  
  export const storeResult = payload => {
    return (dispatch, getState) => {
      setTimeout(() => {
        // const oldCounter = getState().ctr.counter;
        // console.log(oldCounter);
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
  