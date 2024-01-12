// Carousel.js
import React from 'react';

function Carousel() {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      {/* The slideshow/carousel */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/IMAGES/History-of-Fendi.webp" alt="FENDI1" width="500px" height="700px" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="/IMAGES/FENDI-PLAZA-SENAYAN.jpg" alt="FENDI2" width="500px" height="700px" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="/IMAGES/Fendi-store-01-780x520.png" alt="FENDI2" width="500px" height="700px" className="d-block w-100" />
        </div>
      </div>

      {/* Left and right controls/icons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default Carousel;
