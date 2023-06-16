import react, { Fragment, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import UserHeader from "./UserHeader";

export default function UserDashboard() {
  const history = useHistory();

  const [username, setUserName] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("username"));
  }, []);

  const logout = (e) => {
    e.preventDefault();

    localStorage.removeItem("username");
    history.push("/");
  };

  return (
    <UserHeader />
  );
}
