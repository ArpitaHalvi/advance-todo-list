import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // creating a new todo
      const todo = {
        id: nanoid(),
        task: action.payload.task,
        priority: action.payload.priority,
        isCompleted: false,
      };
      state.todos.push(todo);
      localStorage.setItem("todos", state.todos);
    },
    deleteTodo: (state, action) => {
      // deleting a todo if it matches with the action.payload
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      // updating todo
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, task: action.payload.task }
          : todo
      );
    },
    toggleCompleted: (state, action) => {
      // toggling the completed status for the todo
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    deleteAllTodos: (state) => {
      state.todos = [];
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  toggleCompleted,
  deleteAllTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
