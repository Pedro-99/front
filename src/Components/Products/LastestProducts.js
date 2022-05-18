import React from "react";
import "./LastestProducts.css";

const Title = () =>{
    return(
        <div>
        <div className="container py-5">
            <div className="row">
                <div className="col-12 ">
                    <h1 className="display-6 fw-bolder text-center">latest Products</h1>
                    <hr />
                </div>
            </div>
            </div>
            </div>
    );
}
const LastestProducts = () => {
    return (
        <>
        <Title />
        <div className="container">
        <div id="products" className="row mb-5">
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="#" className="image">
                            <img src="/assests/B.png" className="img-1" />
                            <img src="/assests/m.png" className="img-2" />
                        </a>
                        <ul class="product-links">
                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                            <li><a href="#"><i class="fa fa-random"></i></a></li>
                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                        <a href="#" class="product-view"><i class="fa fa-search"></i></a>
                    </div>
                    <div class="product-content">
                        <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star disable"></li>
                            <li class="disable">(1 reviews)</li>
                        </ul>
                        <h3 class="title"><a href="#">Women's Blouse Top</a></h3>
                        <div class="price">$65.99</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="#" className="image">
                            <img src="/assests/B.png" className="img-1" />
                            <img src="/assests/m.png" className="img-2" />
                        </a>
                        <span class="product-discount-label">-22%</span>
                        <ul class="product-links">
                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                            <li><a href="#"><i class="fa fa-random"></i></a></li>
                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                        <a href="#" class="product-view"><i class="fa fa-search"></i></a>
                    </div>
                    <div class="product-content">
                        <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star disable"></li>
                            <li class="disable">(1 reviews)</li>
                        </ul>
                        <h3 class="title"><a href="#">Women's Blouse Top</a></h3>
                        <div class="price">$65.99</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="#" className="image">
                            <img src="/assests/B.png" className="img-1" />
                            <img src="/assests/m.png" className="img-2" />
                        </a>
                        <span class="product-hot-label">new</span>
                        <ul class="product-links">
                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                            <li><a href="#"><i class="fa fa-random"></i></a></li>
                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                        <a href="#" class="product-view"><i class="fa fa-search"></i></a>
                    </div>
                    <div class="product-content">
                        <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star disable"></li>
                            <li class="disable">(1 reviews)</li>
                        </ul>
                        <h3 class="title"><a href="#">Women's Blouse Top</a></h3>
                        <div class="price">$65.99</div>
                    </div>
                </div>
            </div>
        </div>

        </div>
        </>
    );
}

export default LastestProducts;