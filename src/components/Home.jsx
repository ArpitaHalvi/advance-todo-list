import { ArrowForward } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function Home() {
  const loggedIn = false;
  return (
    <section className="home-page">
      <h1>
        Conquer your day, <span>one task</span> at a time.
      </h1>
      {loggedIn ? (
        <NavLink to="/todo-list">
          Get Started <ArrowForward />
        </NavLink>
      ) : (
        <NavLink to="/login">
          Get Started <ArrowForward />
        </NavLink>
      )}
    </section>
  );
}
