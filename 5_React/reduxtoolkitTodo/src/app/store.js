import { configureStore } from "@reduxjs/toolkit";
// import { todoSlice } from "../features/todo/todoSlice";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

// Every one app have only one store which is known as Single Source of Truth
