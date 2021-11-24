import React from "react";
import "./home.scss";

export default function Home() {


return (
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://www.btpnsyariah.com/documents/20182/21365/Banner+home+1+eng-06.png/db22849b-748f-443c-96f5-ab7d7a3b5ad6?t=1610554396000" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="https://www.btpnsyariah.com/documents/20182/21365/Banner+daya-02.png/77b5ac41-28e2-4c69-95a7-be5e5ab9b95e?t=1606560066470" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="https://www.btpnsyariah.com/documents/20182/21365/Pendanaan+home+all-15.png/22631a18-188a-42da-935b-a5daade6728f?t=1606746172820" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
);
}
