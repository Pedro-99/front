import React from "react";
import "./PaymentsMethods.css";
const PaymentsMethods = () => {
    return (
        <div id="clients">
            <section className="clients section-bg">
                <div className="container ">
                    <div className="row">
                    <div className="d-flex justify-content-center">
                        <div className="align-items-center justify-content-center">
                            <img className="logo-style" src="./assests/paypal.png" alt="" />
                        </div>
                        <div className="align-items-center justify-content-center ">
                            <img className="logo-style" src="./assests/visa.png" alt="" />
                        </div>
                        <div className="align-items-center justify-content-center ">
                            <img className="logo-style" src="./assests/mastercard.png" alt="" />
                        </div>
                        <div className="align-items-center justify-content-center ">
                            <img className="logo-style" src="./assests/m.png" alt="" />
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}

export default PaymentsMethods;