import React from "react";
import "./Services2.css";
const Services2 = () => {
    return (
        <section id="features" className="section pt-5" data-stellar-background-ratio="0.2">
            <div className="overlay"></div>
            <div className="container mb-5">
                <div className="row mr-2">
                    <div className="section-header">
                        <h2 className="section-title mr-5 float-end">BEST OFFERS</h2>
                        {/* <hr className="lines" /> */}
                    </div>
                </div>
                <div className="container">
                    <div className="row ">
                        <div className="box-item ">
                            {/* <span className="icon">
                      <i className="fa fa-rocket"></i>
                    </span> */}
                            <div className="text float-end">
                                <h4 className="text-uppercase">Discover More Offers Get the best solution for your Problems</h4>
                                {/* <p className="text-uppercase">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button className="button-style mb-5 float-end">Shop Now</button>
                </div>
            </div>
        </section>
    );
}

export default Services2;