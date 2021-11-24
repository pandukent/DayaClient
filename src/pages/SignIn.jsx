import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import "./signin.scss";

import bgLogin from "./login.png";

function SignIn() {
  const [nik, setNik] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  function submit(event) {
    event.preventDefault();
    fetch("http://localhost:3002/teller/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nik: nik, password: password }),
    })
      .then((response) => {
          if (response.status === 400) {
            {
              alert("Incorrect Password");
              history.push("/"); 
            }
          } else if (response.status === 404) {
            {
               alert("User not found");
               history.push("/"); 
            }
          }

          if (response.status === 200) {
            history.push("/hometeller");
          }
          return response.json();
      })
      .then((data) => {
         dispatch({ type: "LOGIN_USER", payload: data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }

  return (
    <div className="home">
      <img className="img" src={bgLogin} alt="" />
      <div className="formContainer">
        <div className="signIn">
          <div className="wrapper">
            <div className="title">
              <span>SIGN IN</span>
            </div>
            <form onSubmit={submit}>
              <div className="row">
                <i className="fas fa-user"></i>
                <input value={nik} onChange={(e) => setNik(e.target.value)} type="nik" placeholder="NIK" required />
              </div>
              <div className="row">
                <i className="fas fa-lock"></i>
                <input className="myInput" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
              </div>
              <div className="row button">
                <input type="submit" value="LOGIN" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
