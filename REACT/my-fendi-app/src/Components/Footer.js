// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container-fluid">
        <div className="row">
          {/* Contact Section */}
          <div className="col-md-4">
            <h5 className="text-danger">Contact Us</h5>
            <p><strong>Email:</strong> info@fendi.com</p>
            <p><strong>Phone:</strong> +123-456-7890</p>
            <p><strong>Address:</strong> 123 Luxury Street, Fashion City</p>
          </div>

          {/* Menu Section */}
          <div className="col-md-4">
            <h5 className="text-danger">Menu</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="#" className="text-light">Gallery</a></li>
              <li><a href="#" className="text-light">Contact Us</a></li>
              <li><a href="#" className="text-light">Shop Men</a></li>
              <li><a href="#" className="text-light">Shop Women</a></li>
              {/* Add more menu items as needed */}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4">
            <h5 className="text-danger">Follow Us</h5>
            <ul className="list-unstyled">
              <li className="list-unstyled"><a href="#" className="text-light"><img src="/IMAGES/facebook-icon-512x512-seb542ju.png" alt="Facebook" width="20px" height="20px" /></a> </li>
              <li className="list-unstyled"><a href="#" className="text-light"><img src="/IMAGES/Instagram_icon1111.png" alt="Instagram" width="20px" height="20px" /></a></li>
              <li className="list-unstyled"><a href="#" className="text-light"><img src="/IMAGES/twitterlogo.webp" alt="Twitter" width="20px" height="20px" /></a></li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
