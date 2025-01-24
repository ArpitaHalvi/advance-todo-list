import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../features/authSlice";
import { useNavigate, NavLink } from "react-router-dom";
import Error from "./Error";

export default function Signup() {
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
      dispatch(signup({ username: user.username, password: user.password }));
      navigate("/todo-list");
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };
  return (
    <section className="auth-section">
      {error && <Error msg={error} />}
      <form onSubmit={handleSubmit}>
        <h2>SIGNUP</h2>
        <input
          type="text"
          placeholder="Enter a username"
          value={user.username}
          onChange={handleChange}
          name="username"
        />
        <input
          type="password"
          placeholder="Enter a password"
          value={user.password}
          onChange={handleChange}
          name="password"
        />
        <button type="submit" className="auth-btn">
          Sign up
        </button>
        <p className="create-acc">
          Already have an account?
          <NavLink to="/login">Login</NavLink>
        </p>
      </form>
    </section>
  );
}
