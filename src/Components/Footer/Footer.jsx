import React , {useEffect} from "react";

import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {

  const email = "mailto:arynasscoss@gmail.com"
   const year = new Date().getFullYear()
   useEffect(() => {

    window.scrollTo(0,0);
  
  }, []);
   
  return (
    <div id="footer" className="bg-dark">
      <div className="container text-white">
        <footer className="py-4 ">
          <div className="row py-3 mt-3">
            <div className="col-2">

              <h4 className="footer-brand lh-1">ARYNASS
                <h6 className="fst-italic footer-brand-text"> COSMITICS</h6>
              </h4>
            </div>
            {/* <div className="col-2"> */}
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h5>Quick Links</h5>
              <ul className="nav text-light flex-column">
                <li className="nav-item mb-2"><Link to="/" className="nav-link link-light p-0">Home</Link></li>
                <li className="nav-item mb-2"><Link to="/register" className="nav-link p-0 link-light">Sign In</Link></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 link-light">New Products</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 link-light">Offers</a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h5>Guids</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 link-light">Getting Started</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 link-light">About Us</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 link-light"></a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 link-light"></a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <form>
                <h5>Contact Us</h5>
                <p>If you want to inquire about any information or want to get more information, just contact us.</p>
                <div className="w-100 gap-2">
                  <a href={email}>
                  <button className="btn " type="button">Contact</button>
            </a> 
                  {/* <Link className="btn-section" to="/contact-us">
                    <button className="btn " type="button">Contact</button>
                  </Link> */}
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between text-white py-1 mt-2 border-top">
            <p>&copy; {year} Company, Arynass. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-light" href="#"><i className="fa fa-paypal" width="24" height="24"></i></a></li>
              <li className="ms-3"><a className="link-light" href="#"><i className="fa fa-cc-visa" width="24" height="24"></i></a></li>
              <li className="ms-3"><a className="link-light" href="#"><i className="fa fa-cc-mastercard" width="24" height="24"></i></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
