import React from "react";
import "./Contact2.css";

const Contact2 = () => {
    return (
        <section id="contact2" className="section pt-5 pb-5">
            <div className="text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12 wow fadeInDown">
                            <div className="company-info_box">
                                <h4><i className="fa fa-map-marker"> <span> Address:</span></i></h4>
                                <p>71 Street name , Agadir, 3332, MOROCCO</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 wow fadeInDown">
                            <div className="company-info_box">
                                <h4><i className="fa fa-envelope"><span> Mail Us at:</span></i></h4>
                                <p>arynass@arynasscos.info</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 wow fadeInDown">
                            <div className="company-info_box">
                                <h4><i className="fa fa-phone"> <span> Call Us on:</span></i></h4>
                                <p>Toll Free: +(212) 000 000000</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 wow fadeInDown">
                            <div className="company-info_box">
                                <h4><i className="fa fa-clock-o"> <span> Timing:</span></i></h4>
                                <p>24 hours a day (Monday to Friday)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact2;