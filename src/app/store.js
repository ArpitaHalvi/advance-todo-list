import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
import authReducer from "../features/authSlice";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../utils/localStorage";

// initial states for each slice
const preloadedState = {
  auth: loadFromLocalStorage("auth") || undefined,
  todos: loadFromLocalStorage("todos") || undefined,
};

// Creating the store
const store = configureStore({
  reducer: { auth: authReducer, todos: todoReducer },
  // passing loaded state as the preloaded state
  preloadedState,
});

// Save the state to local storage whenever it changes
store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage("auth", state.auth);
  saveToLocalStorage("todos", state.todos);
});

export default store;
