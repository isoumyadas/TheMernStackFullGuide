import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/slices";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todos.todos;
