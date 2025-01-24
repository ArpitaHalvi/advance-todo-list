import { Assignment, Home } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Login } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);
  // const username = user.username || "Guest";
  // const username = user.username;
  // if (user.username === null || undefined) {
  //   username = "Guest";
  // }
  return (
    <nav className="navbar">
      <div className="logo">
        <Assignment className="logo-icon" />
        {loggedIn ? (
          // If the user is logged in
          <p className="greet-user">Welcome, {user.username}</p>
        ) : (
          // If the user is not logged in
          <p>Please Log in! </p>
        )}
      </div>
      <div className="user-status">
        <div className="link-div">
          <NavLink to="/">
            <Home />
          </NavLink>
          {loggedIn ? (
            <NavLink to="/logout" className="link">
              Logout
            </NavLink>
          ) : (
            <NavLink to="/login">
              <Login className="login-icon" />
            </NavLink>
          )}
          <NavLink to="/todo-list" className="todo-link">
            Todo List
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
