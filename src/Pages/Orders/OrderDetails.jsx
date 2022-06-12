import React from "react";
import { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import CartLayout from "../../Layouts/CartLayout";
import LivraisonInfo from "./Livraisoninfo";
import cartService from '../../features/Cart/cartService';
import "./Cart.css";
const OrderDetails = () => {
    const { cart } = useSelector((state) => state.cart);
    const { shopping_session } = useSelector((state) => state.shopping)

    const [cartItems, setCartItems] = useState(cart)
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [onDelete, setOnDelete] = useState(false)
    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    useEffect(() => {


        cartService.getCartItems(shopping_session.id)
            .then((items) => {
                setIsLoading(true);
                setData(items);
                setIsLoading(false);

            })
            .catch((err) => {
                console.log(err);
                setIsError(true)
            })

    }, [onDelete])

    if (isError) {
        return <>Error...</>
    }

    if (isLoading) {
        return <>Loading...</>
    }
    return (
        <>
            <CartLayout>
                <div id="UserInfo" className="  justify-content-center align-items-center">
                    <div className="cont-checkout cont-div">
                        <div className="py-5">
                            <LivraisonInfo />
                        </div>
                        <div className="container d-flex flex-row ">
                            <div className="col-md-8 mt-5 py-5 p-3" id="Cartuser">
                                <div className="cart_container">
                                    {
                                        data && data.map((item, index) => {

                                            return (<>

                                                <div className="cart_items">
                                                    <ul className="cart_list">
                                                        <li className="cart_item clearfix">
                                                            <div className="cart_item_image">
                                                                <img src={item.product.image} alt="" />
                                                            </div>
                                                            <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                                <div className="cart_item_name cart_info_col">
                                                                    <div className="cart_item_title">Name</div>
                                                                    <div className="cart_item_text">{item.product.name}</div>
                                                                </div>
                                                                <div className="cart_item_quantity cart_info_col">
                                                                    <div className="cart_item_title">Quantity</div>
                                                                    <div className="cart_item_text">{item.quantity}</div>
                                                                </div>
                                                                <div className="cart_item_price cart_info_col">
                                                                    <div className="cart_item_title">Price</div>
                                                                    <div className="cart_item_text">${item.product.price}</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-md-4  order-md-last float-end">
                                <h4 className="d-flex mt-5 justify-content-between align-items-center mb-3">
                                    <span className="text-primary">Your cart</span>
                                    <span className="badge bg-primary rounded-pill">3</span>
                                </h4>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 className="my-0">Product name</h6>
                                            <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted">$12</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 className="my-0">Second product</h6>
                                            <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted">$8</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 className="my-0">Third item</h6>
                                            <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted">$5</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Delivery Tasks (USD)</span>
                                        <strong>$20</strong>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Total (USD)</span>
                                        <strong>$20</strong>
                                    </li>
                                </ul>

                                <form className="card p-2">
                                    <a href="/arynass-frontend/#/payemts" className="btn btn-secondary">Place Order</a>
                                </form>
                            </div>
                        </div>
                        <div className="py-5"></div>
                    </div>
                </div>
            </CartLayout>
        </>
    )
}

export default OrderDetails;