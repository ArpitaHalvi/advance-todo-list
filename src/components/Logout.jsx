import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(logout());
    navigate("/");
  });
  return <div></div>;
}
