import react, { Fragment, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import UserHeader from "./UserHeader";

export default function AdminHeader() {
  const history = useHistory();

  const [username, setUserName] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("username"));
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("loggedEmail");
    window.location.href="/";
  };

  return (
    <Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Social Network
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <a className="nav-link" href="/admindashboard">
                Welcome <span className="sr-only">(current)</span>
                {localStorage.getItem("username")}
              </a>
            </li>
            <li className="nav-item">
              <Link to="/registartionlist" className="nav-link" onClick={(e)=>window.location.href='/registartionlist'}> 
                  Registration Management
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/articlelist" className="nav-link" onClick={(e)=>window.location.href='/articlelist'}>
                  Articles
              </Link>
            </li>
            <li className="nav-item navbar-nav ml-auto">
            <Link to="/" className="nav-link" onClick={logout}>
              Logout
            </Link>
          </li>

          </ul>
        </div>
      </div>
    </nav>
  </Fragment>
  );
}
