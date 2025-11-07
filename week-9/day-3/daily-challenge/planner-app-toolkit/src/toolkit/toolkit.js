import {
  configureStore,
  combineReducers,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      name: "wash dishes",
      date: "05-11-2025",
      completed: false,
      isEditing: false,
    },
    {
      id: 2,
      name: "sleep",
      date: "06-11-2025",
      completed: true,
      isEditing: false,
    },
    {
      id: 3,
      name: "clean room",
      date: "07-11-2025",
      completed: false,
      isEditing: false,
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { name, date } = action.payload;
      state.tasks.push({
        id: nanoid(),
        name: name,
        date: date,
        completed: false,
        isEditing: false,
      });
    },
    toggleTask: (state, action) => {
      const id = action.payload;
      const index = state.tasks.findIndex((todo) => todo.id === id);
      state.tasks[index].completed = !state.tasks[index].completed;
    },
    removeTask: (state, action) => {
      const id = action.payload;
      const index = state.tasks.findIndex((todo) => todo.id == id);
      state.tasks.splice(index, 1);
    },
    toggleEdit: (state, action) => {
      const id = action.payload;
      const index = state.tasks.findIndex((todo) => todo.id === id);
      state.tasks[index].isEditing = true;
    },
    editTask: (state, action) => {
      const { id, name, date } = action.payload;
      const index = state.tasks.findIndex((todo) => todo.id === id);
      state.tasks[index].name = name;
      state.tasks[index].date = date;
      state.tasks[index].isEditing = false;
    },
  },
});

export const { addTask } = tasksSlice.actions;
export const { toggleTask } = tasksSlice.actions;
export const { removeTask } = tasksSlice.actions;
export const { toggleEdit } = tasksSlice.actions;
export const { editTask } = tasksSlice.actions;

const appReducer = combineReducers({
  tasksReducer: tasksSlice.reducer,
});

export const store = configureStore({
  reducer: appReducer,
});
