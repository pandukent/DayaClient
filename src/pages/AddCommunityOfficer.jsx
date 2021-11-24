import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router";

import "./AddCommunityOfficer.scss";

function AddCommunityOfficer() {
  const token = useSelector((state) => state.login.access_token);

  const [id, setId] = useState("");
  const [teller, setTeller] = useState("");
  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  function submit(event) {
    event.preventDefault();
    fetch("http://localhost:3002/communityofficer/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ _id: id, teller: teller, nik: nik, name: name, region: region, password: password }),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
            // throw new Error(`HTTP error! status: ${response.status}`);
          console.log(response);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        dispatch({ type: "REG_USER", payload: data });
        history.push("/communityofficer");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function toBack(){
    history.push("./communityofficer");
  }

  return (
    <div className="formContainer">
      <div className="sigUnp">
        <div className="wrapper">
          <div className="title" style={{ fontSize: "30px", backgroundColor: "#FCA103", borderRadius:"12px" }}>
            <span>SIGN UP COMMUNITY OFFICER</span>
          </div>

          <form onSubmit={submit}>
            <div className="row" style={{ marginTop: "20px" }}>
              <i className="far fa-id-card" style={{ position: "absolute", marginTop: "10px", display: "flex", color:"black" }}></i>
              <input style={{ paddingLeft: "60px", borderRadius: "5px", fontSize: "20px" }} value={id} onChange={(e) => setId(e.target.value)} type="id" placeholder="ID" required />
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <i className="far fa-id-badge" style={{ position: "absolute", marginTop: "10px", display: "flex" }}></i>
              <input style={{ paddingLeft: "60px", borderRadius: "5px", fontSize: "20px" }} value={teller} onChange={(e) => setTeller(e.target.value)} type="teller" placeholder="TELLER" required />
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <i className="fas fa-id-card" style={{ position: "absolute", marginTop: "10px", display: "flex" }}></i>
              <input style={{ paddingLeft: "60px", borderRadius: "5px", fontSize: "20px" }} value={nik} onChange={(e) => setNik(e.target.value)} type="nik" placeholder="NIK" required />
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <i className="fas fa-user" style={{ position: "absolute", marginTop: "10px", display: "flex" }}></i>
              <input style={{ paddingLeft: "60px", borderRadius: "5px", fontSize: "20px" }} value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="NAME" required />
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <i className="far fa-building" style={{ position: "absolute", marginTop: "10px", display: "flex" }}></i>
              <input style={{ paddingLeft: "60px", borderRadius: "5px", fontSize: "20px" }} value={region} onChange={(e) => setRegion(e.target.value)} type="region" placeholder="REGION" required />
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <i className="fas fa-lock" style={{ position: "absolute", marginTop: "10px", display: "flex" }}></i>
              <input style={{ paddingLeft: "60px", borderRadius: "5px", fontSize: "20px" }} className="myInput" value={password} onChange={(e) => setPassword(e.target.value)} type="PASSWORD" placeholder="Password" required />
            </div>
            <div className="coloumn button" style={{ marginTop: "20px" }}>
              <span style={{ marginRight: "20px" }}>
                <input style={{ backgroundColor: "#FCA103", padding: "10px 10px", borderRadius: "12px", color: "black", fontWeight: "bold" }} type="submit" value="SIGNUP" />
              </span>

              <span>
                <input onClick={toBack} style={{ backgroundColor: "#FCA103", padding: "10px 10px", borderRadius: "12px", color: "black", fontWeight: "bold" }} type="submit" value="CANCEL" />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCommunityOfficer;
