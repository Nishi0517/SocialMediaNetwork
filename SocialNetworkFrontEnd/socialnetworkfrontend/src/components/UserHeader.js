import react, { Fragment, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default function UserHeader() {
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Welcome <span className="sr-only">(current)</span>
                  {username}
                </a>
              </li>
              <li className="nav-item">
                <Link to="/userarticle" className="nav-link">
                    Add Article
                </Link>
              </li>
              <li className="nav-item navbar-nav ml-auto">
            <Link to="/" className="nav-link" onClick={logout}>
              Logout
            </Link>
          </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
