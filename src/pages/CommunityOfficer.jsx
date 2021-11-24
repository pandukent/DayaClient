import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

// import "./History.scss";

function CommunityOfficer() {
  const [dataCommunityOfficer, setDataCommunityOfficer] = useState([""]);
  const token = useSelector((state) => state.login.access_token);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3002/communityofficer/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => {
        // console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        console.log("result", result.data);
        dispatch({ type: "SET_CommunityOfficer", payload: result });
        setDataCommunityOfficer(result.data);
      })
      .catch((err) => {
        console.error("error:", err);
      });
  }, []);

  function addCommunityOfficer() {
    history.push("/addCommunityOfficer");
  }

  function Detail(event) {
    event.preventDefault();
    // console.log(event.target.value);
    dispatch({ type: "data_CommunityOfficerObject", payload: { id: event.target.value, name: event.target.name } });
    history.push("/detailcommunityofficer");
  }


  return (
    <div className="co">
      <h1 className="judulCO" style={{ textAlign: "center", fontWeight: "bold" }}>
        {" "}
        Data Community Officer{" "}
      </h1>
      <button onClick={addCommunityOfficer} className="button" style={{ backgroundColor: "#ffaf00", padding: "7px 10px", fontWeight: "bold", marginLeft: "80%", marginTop: "-30px", color: "black", borderRadius: "7px" }}>
        Register Community Officer
      </button>
      <div className="table" style={{ marginTop: "-30px", marginLeft: "-25px" }}>
        <table className="table table-striped" style={{ marginLeft: "25px" }}>
          <thead>
            <tr className="row1">
              <th scope="col">ID</th>
              <th scope="col">TELLER</th>
              <th scope="col">NAMA</th>
              <th scope="col">REGION</th>
            </tr>
          </thead>
          <tbody>
            {dataCommunityOfficer.map((dataHasilCo) => (
              <tr>
                <td>{dataHasilCo._id}</td>
                <td>{dataHasilCo.teller}</td>
                <td>{dataHasilCo.name}</td>
                <td>{dataHasilCo.region}</td>
                <td>
                  <button
                    onClick={(e) => {
                      Detail(e);
                    }}
                    value={dataHasilCo._id}
                    name={dataHasilCo.name}
                    className="btn"
                    style={{ color: "black", fontWeight: "bold", backgroundColor: "#ffaf00" }}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CommunityOfficer;
