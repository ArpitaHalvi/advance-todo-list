import { AddTask } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

export default function TaskInput() {
  const [input, setInput] = useState({ task: "", priority: "" });
  const [isInvalid, setIsInvalid] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.task === "" || input.priority === "") {
      setIsInvalid(true);
      return;
    }
    setIsInvalid(false);
    dispatch(addTodo({ task: input.task, priority: input.priority }));
    setInput({ task: "", priority: "" });
  };
  return (
    <section className="task-input-section">
      <div className={`${isInvalid ? "invalid" : ""}`}>
        Please enter a task!
      </div>
      <div className="wrapper-div">
        <form className="input-form" onSubmit={handleAddTodo}>
          <input
            type="text"
            className="task-input"
            placeholder="Enter a task"
            name="task"
            value={input.task}
            onChange={handleChange}
          />
          <div className="priority-add">
            <select
              className="priority"
              name="priority"
              value={input.priority}
              onChange={handleChange}
            >
              <option value="">Choose Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <button className="add-btn" type="submit">
              <AddTask className="add-task" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
