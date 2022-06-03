import React, { useState, useEffect } from "react";
import Card from "../../Components/Products/Card";
import HomeLayout from "../../Layouts/HomeLayout";
import productService from "../../features/products/productService";
import ratingService from '../../features/rating/ratingService';
import "./Style.css"
const SearchPage = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(() => {


        productService.getProducts().then((data) => {
            setProducts(data)
        })
            .catch((err) => console.log("error : fetching data failed", err))

    }, [])






    return (
        <>
            <HomeLayout>
                <div id="searchpage" className="container py-5 mt-5">
                    <header className="blog-header py-3">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-4 pt-1">
                                <h4 className="brand-title lh-1">ARYNASS
                                    <h6 className="fst-italic brand-title-text"> COSMITICS</h6>
                                </h4>
                            </div>

                            <div className="col-6 text-center d-flex">
                                <input
                                    className="form-control form-control-dark w-100 ms-2"
                                    placeholder="Search your product"
                                    aria-label="search"
                                    type="search"
                                    name="search"
                                    id="search-form"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)} />
                                <button className="link bg-trasparent ms-2" href="#" aria-label="Search">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className="container py-3">
                        <div className="row text-center justify-content-center">
                            <hr className="" />
                        </div>
                        <div className="d-flex mt-4 justify-content-center py-1 mb-2">
                            <div className="">
                                <button className="btn btn-outline-secondary " href="#">All Products</button>
                            </div>
                            <div className="">
                                <button className="btn btn-outline-secondary ms-3" href="#">New Products</button>
                            </div>
                            <div className="">
                                <button className="btn btn-outline-secondary ms-3" href="#">Most Popular</button>
                            </div>
                        </div>
                        <hr className="lines" />
                    </div>
                </div>

                <div className="container mb-5">
                    <div className="row">

                        {
                            (products.length !== 0) ? (
                                products && products.filter((val) => {
                                    if (search === "") {
                                        return val
                                    } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                                        return val
                                    }
                                }).map((product, index) => {
    
                                    return (
                                      
                                        <div className="col-md-3 col-sm-6">
                                            <Card
                                                key={index}
                                                id={product.id}
                                                name={product.name}
                                                description={product.description}
                                                price={product.price}
                                                image={product.image}
    
                                            />
                                        </div>
                                       
                                    )
    
    
    
    
    
                                })
                            ) : (
                                (<></>)
                            )

                        }


                    </div>

                </div>
            </HomeLayout>
        </>
    );
}

export default SearchPage;