import { useEffect, useState } from "react";
import Error from "./Error";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TodoList() {
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      setError("Please login first!");
      navigate("/login");
    }
  }, []);
  return (
    <section className="todo-app">
      {error && <Error msg={error} />}
      <TaskInput />
      <TaskList />
    </section>
  );
}
