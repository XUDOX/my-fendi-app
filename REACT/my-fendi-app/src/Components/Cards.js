// Cards.js
import React from 'react';

function Cards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex">
          <div className="card w-100">
            <img src="/IMAGES/CARDMEN.jpg" className="img-fluid card-img-top" alt="Card 1 Image" style={{ objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">SHOW MEN</h5>
              <p className="card-text">Shop the new men's collection and discover sartorial pieces of Fendi Fall/Winter 2023 to enhance your wardrobe.</p>
              <a href="#" className="btn btn-dark mt-auto">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card w-100">
            <img src="/IMAGES/CARDWOMEN.jpg" className="img-fluid card-img-top" alt="Card 2 Image" style={{ objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">SHOW WOMEN</h5>
              <p className="card-text">Explore Fendi new arrivals and let yourself be inspired by the sophistication of the Women's Fall/Winter 2023 collection.</p>
              <a href="#" className="btn btn-dark mt-auto">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card w-100">
            <img src="/IMAGES/CARDKID.png" className="img-fluid card-img-top" alt="Card 3 Image" style={{ objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">SHOP KIDS</h5>
              <p className="card-text">Kids - discover our collection on Fendi.com. Shop online now!</p>
              <a href="#" className="btn btn-dark mt-auto">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
