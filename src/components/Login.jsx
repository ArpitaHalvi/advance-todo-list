import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";
import Error from "./Error";

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username === "" || user.password === "") {
      setError("Username or Password is required.");
      return;
    }
    try {
      dispatch(login({ username: user.username, password: user.password }));
      navigate("/todo-list");
    } catch (e) {
      console.log(e, e.message);
      setError(e.message);
    }
  };
  return (
    <section className="auth-section">
      {error && <Error msg={error} />}
      <form onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <input
          type="text"
          placeholder="Your username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Your password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit" className="auth-btn">
          Login
        </button>
        <p className="create-acc">
          Don&apos;t have an account?
          <NavLink to="/signup">Create Account</NavLink>
        </p>
      </form>
    </section>
  );
}
