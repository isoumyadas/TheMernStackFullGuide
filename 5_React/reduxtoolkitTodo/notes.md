### What does react-redux do?

    This is a bridge for React and redux to connect with each other

    In this we have used Provider which is used to give an store value where we can use all the actions/slices.

### So why do we need react-redux and @reduxjs/toolkit

    ✅ react-redux provides React bindings for Redux, allowing components to access and interact with the Redux store.

    ✅ @reduxjs/toolkit simplifies Redux setup by providing utilities like createSlice, createAsyncThunk, and configureStore to reduce boilerplate and manage state efficiently.

### Setup

#### Install

`npm install @reduxjs/toolkit & npm install react-redux `

#### Create a Store first

`app -> stores -> yourStore.js  ||   Stores -> yourStore.js`

```
    import { configureStore } from "@reduxjs/toolkit";
    import todoReducer from "../features/todo/todoSlice";

    export const store = configureStore({
        reducer: todoReducer,
    });

// Every one app have only one store which is known as Single Source of Truth

```

#### Create Reducers

`features -> todo -> todoSlice.js`

```
// Reducers is also known as slices

import { createSlice, nanoid } from "@reduxjs/toolkit";

// it can be array or object
const initialState = {
  todos: [],
};

// what is reducer is just a functionality
export const todoSlice = createSlice({
  name: "todo", // every slice has a name
  initialState, // every slice has initialstate
  reducers: {
    // every slice has a reducres which consits property and function.
    // key function
    addTodo: (state, action) => {
      // state has current state which is intialState for now | and action is what will happen like todo | action is what to get values from and make changes.
      const todo = {
        id: nanoid(),
        text: action.payload, // payload is an object
      };
      state.todos.push(todo);
    }, // you'll always get action of state and action
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, text: action.payload } : todo
      );
    },
  },
});

//2nd step : Export the individuals functionality. This is used in components
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

//3rd step: Export the reducers. THis is used in store
export default todoSlice.reducer;

// reducres are named as slices in redux-toolkit


```

#### Now use it

```
useDispatch: this takes help of reducres to change in store


useSelector:


```

✅ useDispatch is a React-Redux hook used to send (dispatch) actions to the Redux store, triggering state updates.

✅ useSelector is used to extract specific pieces of state from the Redux store, allowing components to access and re-render only when needed.

✅ useDispatch is used for modifying the state, while useSelector is used for reading the state.

✅ Example: const dispatch = useDispatch(); dispatch(increment()); vs. const count = useSelector((state) => state.counter.value);.

### Now use Provider in APP.jsx or MAIN.jsx

```
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <h1>Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;

```
