import {
  ADD_TO_DO,
  REMOVE_TO_DO,
  CHANGE_COMPLETE,
  EDITING_TODO,
  CHANGE_IS_EDITING_TODO,
} from "./constants";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      name: "task1",
      date: "05-11-2025",
      active: true,
      isEditing: false,
    },
  ],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO: {
      const newTask = [...state.tasks];
      newTask.push({
        id: nanoid(),
        name: action.payload.name,
        date: action.payload.date,
        active: true,
      });
      const sortedTasks = newTask.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      return { ...state, tasks: sortedTasks };
    }

    case REMOVE_TO_DO: {
      const tempTask = [...state.tasks];
      const delIndex = tempTask.findIndex((task) => task.id === action.payload);
      tempTask.splice(delIndex, 1);

      return { ...state, tasks: tempTask };
    }

    case CHANGE_COMPLETE: {
      const tempTask = [...state.tasks];
      const findIndex = tempTask.findIndex(
        (task) => task.id === action.payload.id
      );
      tempTask[findIndex] = {
        ...tempTask[findIndex],
        active: !tempTask[findIndex].active,
      };
      return { ...state, tasks: tempTask };
    }

    case CHANGE_IS_EDITING_TODO: {
      const tempTask = [...state.tasks];
      const findIndex = tempTask.findIndex(
        (task) => task.id === action.payload.id
      );
      tempTask[findIndex] = {
        ...tempTask[findIndex],
        isEditing: !tempTask[findIndex].isEditing,
      };
      return { ...state, tasks: tempTask };
    }

    case EDITING_TODO: {
      const tempTask = [...state.tasks];
      const findIndex = tempTask.findIndex(
        (task) => task.id === action.payload.id
      );
      tempTask[findIndex] = {
        ...tempTask[findIndex],
        name: action.payload.name,
        date: action.payload.date,
        isEditing: !tempTask[findIndex].isEditing,
      };
      return { ...state, tasks: tempTask };
    }

    default:
      return state;
  }
};

export const ADD_TO_DO_TO_DAY = "addTodoDay";
export const REMOVE_TO_DO_FROM_DAY = "removeTodoDay";
export const CHANGE_COMPLETE_FROM_DAY = "changeCompleteDay";
