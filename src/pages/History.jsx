import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";

import "./History.scss";

function History() {
  const [dataHistory, setDataHistory] = useState([""]);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.access_token);
  console.log(token);

  useEffect(()=>{
    fetch("http://localhost:3002/vault", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        console.log("result", result.data);
        dispatch({ type: "SET_History", payload: result });
        setDataHistory(result.data);
      })
      .catch((err) => {
          console.error("error:", err);
      });
  }, [])

   const handlePageClick = (data) => {
     console.log(data.selected);
   };
  

  return (
    <div className="history">
      <div>
        <h1 className="judulHistory position-relative" style={{ textAlign: "center", fontWeight: "bold" }}>
          DATA HISTORY
        </h1>
      </div>
      <div className="table">
        <table className="table table-striped">
          <thead>
            <tr className="row1">
              <th scope="col">Teller</th>
              <th scope="col">Date</th>
              <th scope="col">Type</th>
              <th scope="col">Nominal</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>
            {dataHistory.map((dataHasil) => (
              <tr>
                <td>{dataHasil.teller}</td>
                <td>{dataHasil.date}</td>
                <td>{dataHasil.type}</td>
                <td>Rp. {dataHasil.nominal}</td>
                <td>Rp. {dataHasil.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
