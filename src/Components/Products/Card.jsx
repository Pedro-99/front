import React from "react";
import { useCart } from 'react-use-cart';
import "./Card.css";

const data = {
    products: [
        {
            id: 1,
            img: "/assests/frontpro1.jpeg",
            title: 'Womens Blouse Top',
            desc: 'Product for You',
            price: 53.55,
        },

    ]
}

const Cards = (props) => {
    const { addItem } = useCart();
    return (
        <>
            <div id="cardpro" >
                <div className="product-grid">
                    <div className="product-image">
                        <a href="/Products" className="image">
                            <img className="img-1" src={props.img} />
                        </a>
                        <span className="product-discount-label">New</span>
                        <ul className="product-links">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                        </ul>
                        <button href="" className="add-to-cart" onClick={() => addItem(props.item)}>Add to Cart</button>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">{props.title}</a></h3>
                        <div className="price">${props.price}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
const ProductsCard = () => {

    return (
        <>
            {data.products.map((item, index) => {
                return (
                    <Cards img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
                )
            })}
            {/* <div id="cardpro" >
                <div className="product-grid">
                {data.products.map((item, index) => {
                    return (
                        <>
                    <div className="product-image">
                        <a href="/Products" className="image">
                            <img className="img-1" src={item.img} />
                        </a>
                        <span className="product-discount-label">New</span>
                        <ul className="product-links">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                        </ul>
                        <button href="" className="add-to-cart" onClick={() => addItem(props.item)}>Add to Cart</button>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">{item.title}</a></h3>
                        <div className="price">${item.price}</div>
                    </div>
                    </>
                     )
                })}
                </div>
            </div> */}
        </>

    );
}

export default ProductsCard;