import {
  ACTION_INCREMENT,
  ACTION_DECREMENT,
  ACTION_ADD_INPUT,
} from "./reducers";

export const increment = () => {
  return {
    type: ACTION_INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: ACTION_DECREMENT,
  };
};
export const addInput = (val,val2) => {
  return {
    type: ACTION_ADD_INPUT,
    payload: val
  };
};
