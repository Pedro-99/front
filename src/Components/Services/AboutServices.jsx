import React from "react";
import "./Services.css";

const AboutServices = () => {
    return (
        <section id="services2" class="section pt-5">
            <div class="container">
                <div class="section-head">
                    <h2 class="section-title wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">Our <span>Services</span></h2>
                    <hr class="lines wow zoomIn" data-wow-delay="0.3s" />
                    <p class="section-subtitle wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">Details about everything related to our company 
                     <br /> and our services.</p>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="item-box wow fadeInDown" data-wow-delay="0.2s">
                            <div class="icon">
                                <i class="fa fa-credit-card"></i>
                            </div>
                            <h4>Secure Payment</h4>
                            <p>We offer several safe and secure <br />payment options.</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="item-box wow fadeInDown" data-wow-delay="0.4s">
                            <div class="icon">
                                <i class="fa fa-truck"></i>
                            </div>
                            <h4>Fast Delivery</h4>
                            <p>
                            You will receive your products within <br /> 5 to 15 days    
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="item-box wow fadeInDown" data-wow-delay="0.6s">
                            <div class="icon">
                                <i class="fa fa-clock-o"></i>
                            </div>
                            <h4>Customers Service</h4>
                            <p>We receive your inquiries and opinions <br /> 24 hours a day .</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default AboutServices;