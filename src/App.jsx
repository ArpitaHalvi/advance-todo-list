import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "./features/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
