import {
  ADD_TO_DO,
  REMOVE_TO_DO,
  CHANGE_COMPLETE,
  EDITING_TODO,
  CHANGE_IS_EDITING_TODO,
} from "./constants";

export const addTask = (name, date) => {
  return {
    type: ADD_TO_DO,
    payload: { name, date },
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TO_DO,
    payload: { id },
  };
};

export const changeComplete = (id) => {
  return {
    type: CHANGE_COMPLETE,
    payload: { id },
  };
};

export const changeIsEditing = (id) => {
  return {
    type: CHANGE_IS_EDITING_TODO,
    payload: { id },
  };
};

export const editTask = (name, date, id) => {
  return {
    type: EDITING_TODO,
    payload: { name, date, id },
  };
};
