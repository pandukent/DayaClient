import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import "./History.scss";

function Request() {
  const [dataRequest, setDataRequest] = useState([""])
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.access_token)
  const history = useHistory();

  useEffect(()=>{
    fetch("http://localhost:3002/communityofficer/detail/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((hasil) => {
        dispatch({ type: "SET_REQUEST", payload: hasil });
        setDataRequest(hasil.data);
      })
      .catch((err) => {
        console.error("error:", err);
      });
  },[])

  function Approval(event){
    event.preventDefault()
    console.log(event.target.value);
      fetch(`http://localhost:3002/vault/${event.target.value}`, {
          method: "POST",
          headers:{
              Authorization: token,
          }
      })
          .then((response) => { return response.json();})
          .then((hasil) => {
            // console.log(hasil);
            dispatch({ type: "data_request", payload: hasil });
            history.push("/hometeller")
          })
  }


  return (
    <div className="request">
      <h1 className="judulRequest position-relative" style={{ textAlign: "center", fontWeight: "bold" }}>
        {" "}
        DATA REQUEST{" "}
      </h1>
      <div className="table" style={{ marginLeft: "5%" }}>
        <table className="table table-striped">
          <thead>
            <tr className="row1">
              <th scope="col">ID Community Officer</th>
              <th scope="col">Date</th>
              <th scope="col">Type</th>
              <th scope="col">Nominal</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataRequest.map((dataHasilRequest) => (
              <tr>
                <td>{dataHasilRequest.communityOfficer}</td>
                <td>{dataHasilRequest.date}</td>
                <td>{dataHasilRequest.type}</td>
                <td> {dataHasilRequest.nominal}</td>
                <td>{dataHasilRequest.status}</td>
                {dataHasilRequest.status === "Process" ? (
                  <td>
                    <button
                      onClick={(e) => {
                        Approval(e);
                      }}
                      value={dataHasilRequest._id}
                      className="btn"
                      style={{ color: "black", fontWeight: "bold", backgroundColor: "#ffaf00" }}
                    >
                      {" "}
                      Approval
                    </button>
                  </td>
                ) : (
                  ""
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Request;
