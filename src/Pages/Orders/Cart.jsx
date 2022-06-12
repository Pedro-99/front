import React from "react";
import { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import cartService from '../../features/Cart/cartService';
import CartLayout from "../../Layouts/CartLayout";
import "./Cart.css";
import LivraisonInfo from "./Livraisoninfo";

const CartUser = () => {
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
        <CartLayout>
            <div id="Cartuser">
                <div className="cont cont-div">
                    <div className="py-5">
                        {/* <LivraisonInfo /> */}
                    </div>
                    <div className="cart_section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="cart_container">
                                        <div className="cart_title">Shopping Cart<small> (1 item in your cart) </small>
                                            <button
                                                onClick={() => {
                                                    cartService.clearCartItems(shopping_session.id);
                                                    setOnDelete(!onDelete);
                                                    toast.error('cart is cleared successfully');
                                                }}
                                                className="float-end bg-transparent border-0"><span className="fs-5 text-danger">Clear All</span> </button>
                                        </div>
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
                                                                    <div className="cart_item_total cart_info_col">
                                                                        <div className="cart_item_title">Total</div>
                                                                        <div className="cart_item_text ">
                                                                            <button
                                                                                onClick={() => {
                                                                                    cartService.removeCartItem(item.product.id, shopping_session.id);
                                                                                    setOnDelete(!onDelete);
                                                                                    toast.error('product removed from cart');
                                                                                }}
                                                                                className=" btn float-end text-danger"><i className="fa fa-trash"></i></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </>
                                                )
                                            })
                                        }
                                        <div className="order_total">
                                            <div className="order_total_content text-md-right">
                                                <div className="order_total_title">Order Total:</div>
                                                <div className="order_total_amount float-end">$
                                                    {
                                                        data && data.reduce((total, cartItem) => {

                                                            let result = total + (cartItem.product.price * cartItem.quantity)
                                                            return (parseFloat(result).toFixed(2) - 0)

                                                        }, 0)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart_buttons">
                                            <a href="/arynass-frontend/#/cart/confirm-order" className="button btn-outline-warning cart_button_clear">Continue Shopping</a>
                                            <a href="/arynass-frontend/#/cart/confirm-order" className="button cart_button_checkout">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CartLayout>
    );
}

export default CartUser;