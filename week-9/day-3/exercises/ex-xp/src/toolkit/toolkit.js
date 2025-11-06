import {
  configureStore,
  combineReducers,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      name: "wash dishes",
      completed: false,
      isEditing: false,
    },
    {
      id: 2,
      name: "sleep",
      completed: true,
      isEditing: false,
    },
    {
      id: 3,
      name: "clean room",
      completed: false,
      isEditing: false,
    },
  ],
};

const tasksSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const name = action.payload;
      state.todos.push({
        id: nanoid(),
        name: name,
        completed: false,
        isEditing: false,
      });
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos[index].completed = !state.todos[index].completed;
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      const index = state.todos.findIndex((todo) => todo.id == id);
      state.todos.splice(index, 1);
    },
  },
});

export const { addTodo } = tasksSlice.actions;
export const { toggleTodo } = tasksSlice.actions;
export const { removeTodo } = tasksSlice.actions;
const appReducer = combineReducers({
  tasksReducer: tasksSlice.reducer,
});

export const store = configureStore({
  reducer: appReducer,
});
