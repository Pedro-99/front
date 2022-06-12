import React, {useState, useEffect} from "react";
import orderService from "../../features/order/orderService";
import {useSelector, useDispatch} from 'react-redux';
import "./style.css";
const DeliveryInfo = (props) => {
    // const {order} = useSelector((state) => state.order)
    // const [order,setOrder] = useState(order);
    

    // useEffect()
    return (
        <section id="features" className="container py-2" data-stellar-background-ratio="0.2">
            <div className="overlay"></div>
            <div className="container justify-content-center align-items-center mt-5 mb-5">
                <div className="row ">
                    <div className="col-6 col-sm-4 justify-content-center align-items-center box-item">
                        <span className="icon text-center justify-content-center mt-2">
                            <i className="fa fa-user"></i>
                        </span>
                        <div className="text">
                            <h4 className="text-uppercase">Custmoer</h4>
                            <p>{props.username}<br />
                                {props.email}</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 justify-content-center align-items-center box-item">
                        <span className="icon text-center justify-content-center mt-2">
                            <i className="fa fa-truck"></i>
                        </span>
                        <div className="text">
                            <h4 className="text-uppercase">Order info</h4>
                            <p>Shipping: country<br />
                            Pay method: credit card</p>
                            {
                                (props.isPaid !== null) ?
                                props.isPaid ? <span className="text-danger">paid</span> : <span className="p-2 text-light fw-bolder bg-danger">not paid</span>
                                :
                                <></>
                            }
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 justify-content-center align-items-center box-item">
                        <span className="icon text-center justify-content-center mt-2">
                            <i className="fa fa-map-marker"></i>
                        </span>
                        <div className="text">
                            <h4 className="text-uppercase">Deliver to</h4>
                            <p>Address: Ait melloul Agadir, Lot amlak Souss bloc 1, 86150<br />
                                </p>
                                {
                                (props.isPaid !== null) ?
                                props.isDelivered ? <span className="text-danger">Delivered</span> : <span className="p-2 text-light fw-bolder bg-danger">not delivered</span> : <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DeliveryInfo;