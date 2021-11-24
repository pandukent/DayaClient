import React from "react";
import { useSelector } from "react-redux";

import extraImage from "./Homepage.png"

import "./Profile.scss"

function Profile(){
    const profile = useSelector((state) => state.login.data);

    return (
      <div className="background" style={{backgroundColor:"aliceblue"}}>
        <div className="cardProfile">
          <div className="wrapper">
            <div className="title"> DATA TELLER</div>
            <div className="cardImage">
              <img
                src={profile.photo}
                alt={profile.name}
                style={{ width: "150px", height: "150px", textAlign: "center", marginTop: "20px" }}
              />
            </div>
            <p className="name">Nama: {profile.name}</p>
            <p className="nik">NIK: {profile.nik}</p>
            <p className="id">ID: {profile._id}</p>
          </div>
        </div>
        <div className="extraImage"></div>
          <img src = {extraImage} alt="Image" style={{width:"500px", marginTop:"200px"}}/>
      </div>
    );
}

export default Profile