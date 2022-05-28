import React from "react";
import ProductsCard from "../../Components/Products/Card";
import HomeLayout from "../../Layouts/HomeLayout";
import "./Style.css"
const SearchPage = () => {
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
                                <input className="form-control form-control-dark w-100 ms-2" type="text" placeholder="Search" aria-label="Search" />
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
                        <div className="col-md-3 col-sm-6">
                            <ProductsCard />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <ProductsCard />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <ProductsCard />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <ProductsCard />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <ProductsCard />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <ProductsCard />
                        </div>
                    </div>

                </div>
            </HomeLayout>
        </>
    );
}

export default SearchPage;