import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

export default function TodoList() {
  return (
    <section className="todo-app">
      <TaskInput />
      <TaskList />
    </section>
  );
}
