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
                            <LazyLoadImage  effect="blur" style={{ 'height' : '220px' }} className="img-1" src={props.image} />
                        </a>
                        <span className="product-discount-label">New</span>
                        
                  
                    </div>
{/* <div> */}
                        {
                    (props.quantity === 0) ? <div className="bg-warning text-light fst-italic fw-bolder p-2">Out Of Stock</div> : <div className="bg-success text-light fst-italic fw-bolder p-2">In Stock</div>
                    }
                  
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