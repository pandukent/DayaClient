import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function DetailCo(){
    const [detailNasabah, setDetailNasabah] = useState([" "])
    const dispatch = useDispatch();
    const token = useSelector((state) => state.login.access_token);
    const idCo = useSelector((state) => state.dataObjectCO);
    const jumlah = useSelector((state)=> state.dataCo)

    useEffect(() => {
      fetch("http://localhost:3002/communityofficer/detail/"+idCo.id, {
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
          dispatch({ type: "data_Co", payload: hasil })
          setDetailNasabah(hasil.data);
        })
        .catch((err) => {
          console.error("error:", err);
        });
    }, []);

     return (
       <div className="DetailCo">
         <h1 className="judulDetailCo position-relative" style={{ textAlign: "center", fontWeight: "bold" }}>
           Detail Community Officer
         </h1>
         <h3 style={{ marginLeft: "20px" }}>Nama: {idCo.name} </h3>
         <h3 style={{ marginLeft: "20px" }}>Jumlah yang harus dibayar: Rp. {jumlah.hutang} </h3>
         <h3 style={{ marginLeft: "20px" }}>Jumlah yang sudah dibayar: Rp. {jumlah.dibayar} </h3>
         <div className="table" style={{ marginLeft: "5%" }}>
           <table className="table table-striped">
             <thead>
               <tr className="row1">
                 <th scope="col">ID Community Officer</th>
                 <th scope="col">Date</th>
                 <th scope="col">Type</th>
                 <th scope="col">Nominal</th>
                 <th scope="col">Status</th>
               </tr>
             </thead>
             <tbody>
               {detailNasabah.map((detailCO) => (
                 <tr>
                   <td>{detailCO.communityOfficer}</td>
                   <td>{detailCO.date}</td>
                   <td>{detailCO.type}</td>
                   <td>{(detailCO.nominal) ? "Rp. " + detailCO.nominal : ""}</td>
                   <td>{detailCO.status}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
     );
}

export default DetailCo;