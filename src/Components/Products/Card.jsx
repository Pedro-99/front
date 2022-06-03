import React from "react";
import { useCart } from 'react-use-cart';
import Stars from '../rating/stars'
import "./Card.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';




const Card = (props) => {
    const { addItem } = useCart();
    return (
        <>
            <div id="cardpro" >
                <div className="product-grid">
                    <div className="product-image">
                        <a href={`/products/${props.id}`} className="image">
                            <LazyLoadImage effect="blur" className="img-1" src={props.image} />
                        </a>
                        <span className="product-discount-label">New</span>
                        <ul className="product-links">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                        </ul>
                        <button href="" className="add-to-cart" onClick={() => addItem(props.item)}>Add to Cart</button>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">{props.name}</a></h3>
                        <div className="price">${props.price}</div>
                        <Stars  id={props.id}/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Card;