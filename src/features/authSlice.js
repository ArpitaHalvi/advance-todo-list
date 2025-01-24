import { createSlice } from "@reduxjs/toolkit";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../utils/localStorage";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      // get the username and password from action.payload
      const { username, password } = action.payload;
      // parsing(JSON to Object ) the 'users'from local storage if present otherwise setting it to an empty array
      const users = loadFromLocalStorage("users") || [];
      // Checkign for the existing username
      const userExists = users.some((user) => user.username === username);
      if (userExists) {
        throw new Error("Username already exist.");
      }
      // pushing the new user to the array
      users.push({ username, password });
      // saving the user by again parsing(Object to JSON)
      saveToLocalStorage("users", users);
      if (username && password) {
        state.isAuthenticated = true;
        state.user = { username, password };
        saveToLocalStorage("authUser", { username, password });
      }
    },
    login: (state, action) => {
      // get the username and password from action.payload
      const { username, password } = action.payload;
      // get the users from the local storage if any
      const users = loadFromLocalStorage("users") || [];
      // checking if user is present in the local storage
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      // if user is present then update the state
      if (user) {
        state.isAuthenticated = true;
        state.user = user;
        saveToLocalStorage("authUser", user);
      }
      // else throw an error
      else {
        throw new Error("Invalid Credentials. Access Denied!");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("authUser");
    },
    checkAuth: (state) => {
      // This function ensures that the user stays logged in even after refreshing the page or closing browser | load the authenticated user from local storage
      const authUser = loadFromLocalStorage("authUser");
      if (authUser) {
        state.isAuthenticated = true;
        state.user = authUser;
      }
    },
  },
});

export const { signup, login, logout, checkAuth } = authSlice.actions;

export default authSlice.reducer;
