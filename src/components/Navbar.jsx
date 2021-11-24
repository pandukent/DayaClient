import React from "react";
import "./navbar.scss";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import logoBTPN from "./logoBTPN.png";

export default function Navbar() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.access_token);
  const data = useSelector((state) => state.login.data)

  const history = useHistory();

  function logout() {
    dispatch({ type: "LOGOUT_USER", payload: "" });
  }

  function home(){
    history.push("/")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-sm-top">
      <div className="container">
        <img onClick={home} className="logo" src={logoBTPN} alt={"LogoBTPN"} className="navbar-brand" style={{ width: "150px", height: "100px", cursor: "pointer" }} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {!token ? (
              <React.Fragment>
              <li className="navbarData">
              <span>
                <Link to="/signin">Teller Officer</Link>
              </span>
            </li>

            <li className="navbarData">
              <span>
                <Link to="/signin">Community Officer</Link>
              </span>
            </li>
            </React.Fragment>
            ) : (
              <li className="navbarData">
                <span>
                  <Link to="/hometeller">Home</Link>
                </span>
              </li>
            )}

            {!token ? (
              " "
            ) : (
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={data.photo} width="40" height="40" className="rounded-circle" />
                  <span>{data.name}</span>
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="simbol">
                    <span>
                      <i className="fas fa-user">
                        <Link to="/profile">Profile</Link>
                      </i>
                    </span>
                  </li>
                  <li className="simbol">
                    <span>
                      <i className="fas fa-sign-out-alt">
                        <Link to="/" onClick={logout}>
                          Sign Out
                        </Link>
                      </i>
                    </span>
                  </li>
                </ul>
              </li>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
