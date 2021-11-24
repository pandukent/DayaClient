import {  useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useEffect } from "react";

import "./HomeTeller.scss";

import imageFluid from "./niat.png";
import imageHistory from "./Homepage.png";

function HomeTeller() {
  const balance = useSelector((state) => state.balance);
  const history = useHistory();

  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.access_token);

  useEffect(() => {
    fetch("http://localhost:3002/vault/balance", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("iniDATA", result);
        dispatch({ type: "SET_BALANCE", payload: result });
      });
  }, []);

  function toHistory() {
    history.push("/history");
  }

  function toRequest() {
    history.push("/request");
  }

  function toDataCO(){
    history.push("/communityofficer");
  }

  return (
    <div className="homeTeller">
      <tr className="rowBalance">
        <td colspan="3">
          <img className="img-fluid" src={imageFluid} alt="logo" />
          <div className="cardBalance">
            <div className="wrapper">
              <p className="title">BALANCE</p>
              <p className="balance">Balance: {balance.data}</p>
            </div>
          </div>
        </td>
      </tr>

      <tr className="rowCard">
        <th scope="col">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imageHistory} className="card-img-top" alt="Image" />
            <div className="card-body">
              <p>Menyimpan berbagai macam catatan transaksi</p>
              <button onClick={(e) => toHistory(e)} className="button1 btn-lg" >
                History
              </button>
            </div>
          </div>
        </th>
        <th scope="col">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imageHistory} className="card-img-top" alt="Image" />
            <div className="card-body">
              <p>Menyimpan permintaan transaksi dari Community Officer</p>
              <button onClick={(e) => toRequest(e)} className="button2 btn-lg">
                Request
              </button>
            </div>
          </div>
        </th>
        <th scope="col">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imageHistory} className="card-img-top" alt="Image" />
            <div className="card-body">
              <p> List data Community Officer</p>
              <button onClick={(e) => toDataCO(e)} className="button btn-lg">
                Community Officer
              </button>
            </div>
          </div>
        </th>
      </tr>
    </div>
  );
}

export default HomeTeller;
