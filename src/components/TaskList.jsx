import { CheckTwoTone, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllTodos,
  deleteTodo,
  toggleCompleted,
} from "../features/todoSlice";

export default function TaskList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const sortByPriority = (todos) => {
    const priorityOrder = {
      high: 1,
      medium: 2,
      low: 3,
    };
    return todos.sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
  };
  const sortedTodos = sortByPriority(todos);
  return (
    <section className="task-list-section">
      <ul className="todo-container">
        {sortedTodos.map((todo) => {
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
