import { CheckTwoTone, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllTodos,
  deleteTodo,
  toggleCompleted,
} from "../features/todoSlice";
import { Navigate } from "react-router-dom";

export default function TaskList() {
  const todos = useSelector((state) => state.todos.todos);
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  if (!loggedIn) return <Navigate to="/login" />;
  return (
    <section className="task-list-section">
      <ul className="todo-container">
        {todos.map((todo) => {
          return (
            <li
              className={`todo-item ${todo.isCompleted ? "completed" : ""}`}
              key={todo.id}
            >
              <span className="todo-text">{todo.task} </span>
              <div className="properties">
                <span className={`priority ${todo.priority}`}>
                  {todo.priority}
                </span>
                <button
                  className="mark-completed"
                  onClick={() => dispatch(toggleCompleted(todo.id))}
                >
                  <CheckTwoTone />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  <Delete className="delete-icon" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="delete-all">
        <button
          className="delete-all-btn"
          onClick={() => dispatch(deleteAllTodos())}
        >
          Delete All
        </button>
      </div>
    </section>
  );
}
