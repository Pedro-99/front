import React from "react";
import { Link } from "react-router-dom";
import { Carousel,Container, Row, Col } from 'react-bootstrap';
// import "./Style.css";
const Hero = () => {
  return (
      <Container fluid>
    <Carousel id="style-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assests/m2.png"
          alt="First slide"
        />
        <Carousel.Caption>

          <div className="cont">
            <div className="js_frm_signup1  js_frm_signup_white1">
              <h1><b>Welcome</b> to our store</h1>
              <h2>Better quality with an affordable price</h2>
              <Link to={"/categories"}>
                <button className="section-btn1" onClick={"/categories"}>
                  discover
                </button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assests/m3.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="">
            <div className="hero">
              <div className="card bg-dark text-white border-0">
                <img src="/assests/m3.png" className="card-img" alt="background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assests/m4.png"
          alt="Third slide"
        />
        <Carousel.Caption>
            <div className="hero top-set">
              <div className="card bg-dark text-white border-0">  
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                    <div className="back-style"><button className="section-btn1">Discover</button>
                    </div>
              </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Hero;